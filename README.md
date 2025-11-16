# AI-Generated Restaurant Website (QR Based Guest Login + Loyalty)

This repository contains a full-stack Next.js + Prisma app implementing:
- QR Table Login (table 1-20)
- Guest no-password login (name + mobile)
- Menu, Cart, Orders (server-side)
- Photo uploads / Instagram link for loyalty
- Admin panel with approve/reject uploads and award points
- Prisma + PostgreSQL (SQLite fallback)
- Uploads stored in `/uploads`
- QR generation script at `scripts/generate_qr.js`
- Netlify-ready (`netlify.toml`)
- Tests: Jest + Playwright (minimal examples)

## Quick local setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` from `.env.example` and set `ADMIN_PASSWORD` and `DATABASE_URL`.
For local testing you can use SQLite (already set in `.env.example`).

3. Generate Prisma client and run migrations:
```bash
npx prisma generate
npx prisma migrate dev --name init
node prisma/seed.js
```

4. Generate QR codes (PNG files will be in `/qrcodes`):
```bash
npm run qr
```

5. Run dev server:
```bash
npm run dev
```

Visit `http://localhost:3000`.

## Uploads
Uploaded files are stored in `/uploads`. To use AWS S3, see the S3 guide below.

## S3 guide (optional)
- Create an S3 bucket and IAM user with put/get permissions.
- Configure environment variables:
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  - S3_BUCKET_NAME
- Install `aws-sdk` and adjust `pages/api/uploads.js` to stream files to S3 instead of storing locally.

## Deployment
- Netlify: use `netlify.toml` and set build command `npm run build`. Provide environment variables via Netlify UI (DATABASE_URL, ADMIN_PASSWORD).
- Vercel: standard Next.js deployment. Set environment variables.

## Testing
- Unit tests (Jest): `npm test`
- E2E with Playwright: `npx playwright test`

## Notes & Limitations
This scaffold is designed to be a production-ready starting point. For a production deployment:
- Use PostgreSQL (Neon, Supabase, Railway).
- Configure secure session handling and HTTPS-only cookies.
- Add rate-limiting, input validation, and file virus scanning.
