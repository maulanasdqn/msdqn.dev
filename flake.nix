{
  description = "Personal Website - Astro SSR Application";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        nodejs = pkgs.nodejs_22;

        personal-website = pkgs.buildNpmPackage {
          pname = "personal-website";
          version = "0.0.1";

          src = ./.;

          npmDepsHash = "sha256-NW6zjOfjg9KiCoyiLfMqQx3q3s8h6PA/T+nnuIGwTII=";

          nativeBuildInputs = [ nodejs ];

          buildPhase = ''
            runHook preBuild
            npm run build
            runHook postBuild
          '';

          installPhase = ''
            runHook preInstall
            mkdir -p $out/lib/personal-website
            cp -r dist/* $out/lib/personal-website/
            cp package.json $out/lib/personal-website/
            cp -r node_modules $out/lib/personal-website/

            mkdir -p $out/bin
            cat > $out/bin/personal-website <<EOF
            #!${pkgs.bash}/bin/bash
            cd $out/lib/personal-website
            exec ${nodejs}/bin/node ./server/entry.mjs
            EOF
            chmod +x $out/bin/personal-website
            runHook postInstall
          '';

          meta = with pkgs.lib; {
            description = "Maulana Sodiqin's Personal Portfolio Website";
            license = licenses.mit;
            maintainers = [ ];
          };
        };
      in
      {
        packages = {
          default = personal-website;
          inherit personal-website;
        };

        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            nodePackages.npm
          ];

          shellHook = ''
            echo "Personal Website Development Environment"
            echo "Node.js: $(node --version)"
            echo "npm: $(npm --version)"
          '';
        };
      }
    ) // {
      nixosModules.default = { config, lib, pkgs, ... }:
        let
          cfg = config.services.personal-website;
        in
        {
          options.services.personal-website = {
            enable = lib.mkEnableOption "Personal Website";

            port = lib.mkOption {
              type = lib.types.port;
              default = 4321;
              description = "Port to run the website on";
            };

            host = lib.mkOption {
              type = lib.types.str;
              default = "0.0.0.0";
              description = "Host to bind to";
            };

            environmentFile = lib.mkOption {
              type = lib.types.nullOr lib.types.path;
              default = null;
              description = "Path to environment file containing secrets";
            };

            user = lib.mkOption {
              type = lib.types.str;
              default = "personal-website";
              description = "User to run the service as";
            };

            group = lib.mkOption {
              type = lib.types.str;
              default = "personal-website";
              description = "Group to run the service as";
            };

            openFirewall = lib.mkOption {
              type = lib.types.bool;
              default = false;
              description = "Open the port in the firewall";
            };

            nginx = {
              enable = lib.mkEnableOption "nginx reverse proxy";

              domain = lib.mkOption {
                type = lib.types.str;
                default = "localhost";
                description = "Domain name for the website";
              };

              enableSSL = lib.mkOption {
                type = lib.types.bool;
                default = true;
                description = "Enable SSL with Let's Encrypt";
              };

              acmeEmail = lib.mkOption {
                type = lib.types.str;
                default = "";
                description = "Email for Let's Encrypt certificates";
              };
            };
          };

          config = lib.mkIf cfg.enable {
            users.users.${cfg.user} = {
              isSystemUser = true;
              group = cfg.group;
              description = "Personal Website service user";
            };

            users.groups.${cfg.group} = { };

            networking.firewall.allowedTCPPorts = lib.mkIf cfg.openFirewall [ cfg.port ];

            systemd.services.personal-website = {
              description = "Personal Website Astro SSR Application";
              wantedBy = [ "multi-user.target" ];
              after = [ "network.target" ];

              environment = {
                NODE_ENV = "production";
                HOST = cfg.host;
                PORT = toString cfg.port;
              };

              serviceConfig = {
                Type = "simple";
                User = cfg.user;
                Group = cfg.group;
                ExecStart = "${self.packages.${pkgs.system}.personal-website}/bin/personal-website";
                Restart = "always";
                RestartSec = "10s";
                EnvironmentFile = lib.mkIf (cfg.environmentFile != null) cfg.environmentFile;

                NoNewPrivileges = true;
                ProtectSystem = "strict";
                ProtectHome = true;
                PrivateTmp = true;
                PrivateDevices = true;
                ProtectKernelTunables = true;
                ProtectKernelModules = true;
                ProtectControlGroups = true;
                RestrictSUIDSGID = true;
              };
            };

            services.nginx = lib.mkIf cfg.nginx.enable {
              enable = true;
              recommendedProxySettings = true;
              recommendedTlsSettings = true;
              recommendedOptimisation = true;
              recommendedGzipSettings = true;

              virtualHosts.${cfg.nginx.domain} = {
                forceSSL = cfg.nginx.enableSSL;
                enableACME = cfg.nginx.enableSSL;
                locations."/" = {
                  proxyPass = "http://127.0.0.1:${toString cfg.port}";
                  proxyWebsockets = true;
                };
              };
            };

            security.acme = lib.mkIf (cfg.nginx.enable && cfg.nginx.enableSSL) {
              acceptTerms = true;
              defaults.email = cfg.nginx.acmeEmail;
            };
          };
        };
    };
}
