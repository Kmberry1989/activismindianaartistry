# InArtAct – Map, Zine, and Analytics Extras
here we go
This bundle adds three new feature routes to your InArtAct Next.js app:

- `/activists/map` – interactive map of Indiana art & activism
- `/activists/zine` – DIY printable zine generator
- `/activists/analytics` – tiny QR/link analytics dashboard (sample data)

It is designed to sit on top of the existing archive/grid system you already have.

---

## File overview

- `app/activists/map/page.tsx`
  - Client-side map view using **react-leaflet** and OpenStreetMap tiles.
  - Expects optional `latitude` and `longitude` on your `artistsData` entries.
- `app/activists/zine/page.tsx`
  - Client-side zine builder that:
    - filters artists by cause
    - lets you select specific entries
    - generates a print-optimized layout
- `app/activists/analytics/page.tsx`
  - Uses a simple JSON file as a stand-in for real analytics.
  - Shows summary cards, a tiny bar chart, and a detail table.
- `data/qrAnalyticsSample.json`
  - Sample QR campaign stats. Replace with real analytics exports later.

---

## How to integrate

From the root of your Next.js app (where `package.json` lives):

```bash
# Adjust source path to where you unzipped this bundle
cp -R app data path/to/your/inartact/
```

If you already have an `app/activists` folder, you can copy the subfolders:

```bash
cp -R app/activists/map path/to/your/inartact/app/activists/
cp -R app/activists/zine path/to/your/inartact/app/activists/
cp -R app/activists/analytics path/to/your/inartact/app/activists/
cp -R data/qrAnalyticsSample.json path/to/your/inartact/data/
```

---

## Wire in your real data

Each of these pages currently uses a placeholder:

```ts
// Adjust this import path to your real data:
// import { artistsData } from '@/lib/artistsData';

const artistsData: Artist[] = [];
```

Replace with your real import, e.g.:

```ts
import { artistsData } from '@/lib/artistsData';
```

Make sure your `Artist` type matches what you use in the rest of your app. For the map and zine pages, you will want at least:

```ts
type Artist = {
  id: string;
  name: string;
  title: string;
  cause: string;
  location: string;
  bio?: string;
  latitude?: number;
  longitude?: number;
};
```

You do **not** have to update every artist with coordinates immediately. You can start by adding `latitude`/`longitude` only for key sites.

---

## Dependencies for the interactive map

The `/activists/map` page uses **react-leaflet** and **leaflet**.

Install them:

```bash
npm install react-leaflet leaflet
```

Then, in your Next.js app (for example, in `app/layout.tsx` or a global CSS file), make sure you import the Leaflet CSS:

```ts
// app/layout.tsx or app/globals.css
import 'leaflet/dist/leaflet.css';
```

The map component uses dynamic imports so it renders only on the client.

---

## Using the zine generator

Once wired to real data:

- Go to `/activists/zine`.
- Choose a **cause**.
- Select 4–8 artists using the checkboxes.
- Click **“Print Zine”**.
- Your browser’s print dialog will open; print double-sided and fold as desired.

The layout is optimized via `@media print` styles so you can hand this out in galleries, classrooms, or community events.

---

## Using the analytics dashboard

- Visit `/activists/analytics`.
- The page reads from `data/qrAnalyticsSample.json`.
- You can replace this file with exports from:
  - your QR platform
  - Google Analytics
  - a simple CSV you convert to JSON

Each entry looks like:

```json
{
  "id": "qr-001",
  "label": "Gallery Wall Poster",
  "target": "/activists",
  "totalHits": 124,
  "uniqueVisitors": 97,
  "lastScan": "2025-11-15T21:34:00Z"
}
```

Add or remove entries as needed; the cards, bar chart, and table will adapt automatically.

---

## Suggested navigation

Add links somewhere in your app’s navigation or footer:

- `/activists/map` – “Map”
- `/activists/zine` – “Zine Generator”
- `/activists/analytics` – “Analytics” or “QR Stats”

That turns InArtAct from a static archive into an exploratory tool, a teaching aid, and a project you can show off to professors, boards, and collaborators.
