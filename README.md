# msdqn.dev

Personal website and portfolio, live at [msdqn.dev](https://msdqn.dev).

Astro with server-side rendering on Cloudflare Workers. Content lives in
Cloudflare D1 and is managed through a built-in CMS at `/cms`. Styled with
TailwindCSS using the Rose Pine palette.

## Stack

- [Astro](https://astro.build/) 5, SSR via `@astrojs/cloudflare`
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) with static assets, custom domains `msdqn.dev` and `www.msdqn.dev`
- [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite) — schema in `migrations/`
- Session auth: PBKDF2 via WebCrypto, HttpOnly cookie, sessions stored in D1
- TailwindCSS, TypeScript, ESLint, Prettier

## Layout

```
src/
├── components/ui/    Astro components
├── libs/             d1.ts (data layer) · auth.ts (sessions) · crud.ts (API factories)
├── pages/            public pages, /cms admin, /api CRUD endpoints
├── middleware.ts     security headers, www redirect
migrations/           D1 schema
wrangler.jsonc        Worker config, D1 binding, custom domains
```

The blog at `/blog` is proxied from [blog.msdqn.dev](https://blog.msdqn.dev)
via RSS. Machine-readable profile data is served at `/llms.txt` and
`/llms-full.txt`.

## Development

```sh
npm install
npx wrangler d1 migrations apply msdqn-dev --local
npm run dev
```

`astro dev` uses a local D1 simulation through the Cloudflare platform proxy.
To test the actual Worker runtime: `npm run preview`.

## Deployment

```sh
npm run deploy
```

Builds and deploys with Wrangler. Remote schema changes:

```sh
npx wrangler d1 migrations apply msdqn-dev --remote
```

## License

[MIT](LICENSE)
