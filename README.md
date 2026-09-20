# Spatial Mismatch: Computer & Mathematical Jobs in Brainerd / Crow Wing County

A polished, data-driven spatial analysis site examining the residence–workplace mismatch for Computer & Mathematical occupations in the Brainerd Lakes area (Crow Wing County, Minnesota).

**Live-ready for Vercel.**

## What's Inside

- Clear core argument framed for Spatialytics
- Key quantitative data table (ACS residential supply + DEED workplace concentration)
- Interactive Chart.js visualization of metro vs. Greater Minnesota job share
- Spatial evidence cards and analytical narrative
- Recommended metrics & map types for further Spatialytics work
- Full primary sources and references

## Key Findings Highlighted

| Metric | Value |
|--------|-------|
| Crow Wing residents in Comp/Math occupations | **532** |
| Share of statewide Comp/Math jobs in Twin Cities metro | **74.2%** |
| Share in Greater Minnesota | **25.8%** |

## Deploy to Vercel

### Option 1 – Vercel CLI
```bash
cd brainerd-spatial-mismatch
npx vercel
```

### Option 2 – GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Import the repo in [vercel.com](https://vercel.com)
3. Framework Preset: **Other** (static)
4. Deploy

No build step required — this is a pure static site (HTML + Tailwind CDN + Chart.js).

### Option 3 – Drag & Drop
Zip the folder and drop it on vercel.com/new.

## Local Preview

Simply open `index.html` in a browser, or serve it:

```bash
npx serve .
# or
python3 -m http.server 3000
```

## Tech

- Tailwind CSS (CDN)
- Chart.js (CDN)
- Inter + JetBrains Mono fonts
- Fully responsive, dark aesthetic optimized for data storytelling

## Data Sources

- U.S. Census Bureau ACS (via uspopulation.org compilation) — residential occupation counts
- Minnesota DEED Occupational Employment & Wage Statistics (OEWS) and Information Technology Profile — workplace concentration
- Supporting DEED county profiles and historical Brainerd Lakes workforce studies

---

Built for Spatialytics workflows · Ready for further map layers, LQ analysis, and LEHD flow queries.
