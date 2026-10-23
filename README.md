# Splitlee website

Next.js 15 (App Router) + Tailwind CSS 3. Static export.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

- Download link: set `DOWNLOAD_URL` at the top of `app/page.jsx`.
- Page sections: `app/page.jsx`
- App screen mockups (Home, Friends, History, Insights, Map, Trips, Add bill, Scan & Pay): `components/Phone.jsx`, styled in `app/globals.css`
- Colours / fonts: `tailwind.config.js`

Deploy: push to GitHub and import on Vercel, or upload `out/` to Netlify / GitHub Pages.
