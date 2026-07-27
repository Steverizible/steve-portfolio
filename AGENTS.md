<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- Single Next.js 16 (App Router, Turbopack) app; package manager is npm (`package-lock.json`). No backend, database, or external services — all content is static in `lib/site-data.ts` with images in `public/images/`.
- Dependencies are installed by the startup update script (`npm install`); no extra setup needed.
- Standard scripts live in `package.json`: `npm run dev` (dev server on `http://localhost:3000`), `npm run build`, `npm run start`, `npm run lint`.
- The contact form (`/contact` and homepage) submits via a `mailto:` link, so "sending" opens the OS mail client rather than hitting an API — expect no network request when testing it.
- Optional env var `NEXT_PUBLIC_SITE_URL` overrides the metadata base URL (`app/layout.tsx`); unset is fine for local dev.
