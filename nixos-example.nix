{
  description = "Example NixOS configuration for personal-website deployment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    personal-website.url = "github:YOUR_USERNAME/personal-website";
  };

  outputs = { nixpkgs, personal-website, ... }: {
    nixosConfigurations.your-vps = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      modules = [
        personal-website.nixosModules.default
        ({ pkgs, ... }: {
          services.personal-website = {
            enable = true;
            port = 4321;
            host = "0.0.0.0";
            environmentFile = "/run/secrets/personal-website.env";

            nginx = {
              enable = true;
              domain = "maulanasodiqin.com";
              enableSSL = true;
              acmeEmail = "your-email@example.com";
            };
          };

          networking.firewall.allowedTCPPorts = [ 80 443 ];
        })
      ];
    };
  };
}
