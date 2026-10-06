# AUTONOVA Website

Modern, responsive React + Vite website for AUTONOVA (Zimbabwe automotive services).

## Stack
- Frontend: React.js + Vite + Tailwind CSS
- Routing: React Router
- Forms: React Hook Form + Zod
- SEO: react-helmet-async + OpenGraph tags + sitemap support
- Notifications: react-hot-toast
- Optional backend: Node.js/Express + MongoDB + Nodemailer

## Run Frontend
```bash
npm install
npm run dev
```

## Environment
1. Copy `.env.example` to `.env`
2. Set business phone/contact values
3. Choose one form mode:
- `VITE_USE_BACKEND=false` for EmailJS mode
- `VITE_USE_BACKEND=true` for API mode

## EmailJS Mode (Option A)
Set:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Backend Mode (Option B)
```bash
cd server
npm install
npm run dev
```

### Backend env
Copy `server/.env.example` to `server/.env` and set:
- `PORT`
- `MONGODB_URI`
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_FROM`
- `EMAIL_TO`
- `CLIENT_ORIGIN`

## Deployment
### Frontend (Vercel / Netlify)
1. Connect repo
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add frontend env variables in dashboard

### Backend (Render / Fly.io)
1. Deploy `server` as Node service
2. Start command: `npm start`
3. Add server env variables
4. Allow CORS origin from frontend domain

## Sitemap generator instructions
Current project includes `public/sitemap.xml`.
For automated generation, use one of these:
1. Install `vite-plugin-sitemap` and generate on build.
2. Or use `sitemap` npm package in a `postbuild` script.

## Accessibility and Performance
- Semantic landmarks, labels, keyboard-focus styles
- Contrast-safe dark theme with orange accent
- Lazy loaded route pages
- Lazy-loaded images with responsive sizing
- Reusable components for consistency