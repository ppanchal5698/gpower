# GPower Solutions Web

Marketing site built with React, TypeScript, and Vite.

## Prerequisites

- Node.js 22+
- npm 10+

## Environment Variables

Copy `.env.example` to `.env` for local development.

- `VITE_FORMS_ENABLED`
  - `false` keeps form submission disabled and shows a clear status message.
  - `true` enables submission when endpoint is configured.
- `VITE_FORMS_ENDPOINT`
  - Required when `VITE_FORMS_ENABLED=true`.
- `VITE_FORMS_TOKEN`
  - Optional bearer token for the forms API.

## Scripts

- `npm run dev`: Start local dev server.
- `npm run lint`: Run ESLint.
- `npm run lint:ci`: Run ESLint with zero-warning gate.
- `npm run typecheck`: Run TypeScript project typecheck.
- `npm run build`: Production build.
- `npm run check:dist`: Verify built artifact integrity.
- `npm run preview`: Preview production build locally.

## Production Quality Gate

Run this before release:

```bash
npm ci
npm run lint:ci
npm run typecheck
npm run build
npm run check:dist
```

## Vercel Deployment

This repo includes `vercel.json` with:

- SPA rewrite fallback for BrowserRouter
- Cache headers for `/assets/*`
- Security headers for all routes

### Steps

1. Import repository in Vercel.
2. Set framework preset to Vite (auto-detected).
3. Configure project environment variables:
   - `VITE_FORMS_ENABLED=false` (until API endpoint is ready)
   - `VITE_FORMS_ENDPOINT` and `VITE_FORMS_TOKEN` when enabling form submissions.
4. Deploy and verify:
   - Route loads at `/`
   - Deep-link URLs resolve to app shell
   - Form shows temporary-unavailable status while disabled

## CI

GitHub Actions workflow is at `.github/workflows/ci.yml`.

It runs on pushes to `main` and all pull requests:

- install
- lint
- typecheck
- build
- dist smoke check
