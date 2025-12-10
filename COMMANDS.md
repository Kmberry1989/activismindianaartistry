# Project Commands & Scripts

This document outlines important commands for maintaining the **Indiana Art Activist** project, including fetching news, updating artist data, and syncing with external data sources.

## Data Updates

### 1. Fetch News
Fetches the latest news articles for artists using the DuckDuckGo API and updates `src/lib/artists-data.ts`.

**Command:**
```bash
npx tsx scripts/fetch-news.ts
```

**What it does:**
- Iterates through all artists in `src/lib/artists-data.ts`.
- Searches for news related to the artist and their artwork.
- Updates the `news_media_coverage` field for each artist.
- Saves the updated data back to `src/lib/artists-data.ts`.

---

### 2. Update Artist Data (from CSV)
Regenerates `src/lib/artists-data.ts` from the local CSV inventory file. Use this after manually editing the CSV.

**Command:**
```bash
node scripts/update-artists.js
```

**Key Files:**
- Input: `Art Activist Inventory Sheet - Information for Website.csv`
- Input: `bio info.csv` (for rich biographies)
- Output: `src/lib/artists-data.ts`

**Note:** This script now intelligently merges data from both the main inventory sheet and the bio info CSV.

---

### 3. Sync Google Sheets
Syncs the local CSV file with the master Google Sheet.

**Command:**
```bash
npm run sync
```
*Or directly:*
```bash
python3 scripts/sync_sheets.py
```

**Prerequisites:**
- Requires `python3` and `pandas` (`pip install pandas`).
- Updates `Art Activist Inventory Sheet - Information for Website.csv`.

---

## Asset Management

### 4. Fetch Open Graph Images
Fetches preview images for external links (news articles, portfolios) to improve display cards.

**Command:**
```bash
npx tsx scripts/fetch-og-images.ts
```

### 5. Download Artist Images
Batch downloads images for artists if they are missing.

**Command:**
```bash
node scripts/download-images.js
```

---

## Development

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
