# Circuit Savant website

Static React + Vite + Tailwind site. Customers get in touch by phone call or WhatsApp - there is no booking form or backend.

## Run locally
```
npm install
npm run dev
```

## Settings (optional)
Copy `.env.example` to `.env`:
- `VITE_BUSINESS_NAME`, `VITE_SERVICE_AREA`
- `VITE_PHONE_DISPLAY` (shown on the site), `VITE_PHONE_E164` and `VITE_WHATSAPP_E164` (digits only, no `+`, e.g. `263781339253`)
- `VITE_EMAIL` (defaults to info@circuitsavant.co.zw)
- `VITE_GOOGLE_MAPS_EMBED_KEY` (optional)

## Deploy
Pushing to `main` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml`. Add the same values as repository **variables** (Settings > Secrets and variables > Actions > Variables).
