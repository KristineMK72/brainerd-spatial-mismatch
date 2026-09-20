# Spatial Mismatch: Computer & Mathematical Jobs in Brainerd / Crow Wing County

A polished, data-driven spatial analysis site examining the residence–workplace mismatch for Computer & Mathematical occupations in the Brainerd Lakes area (Crow Wing County, Minnesota).

**Live on Vercel** · Ready for Spatialytics

## Key Findings

| Metric | Value |
|--------|-------|
| Crow Wing residents in Comp/Math occupations | **532** |
| Share of statewide Comp/Math jobs in Twin Cities metro | **74.2%** |
| Share in Greater Minnesota | **25.8%** |

## What’s on the Site

- Clear core argument framed for Spatialytics
- Key quantitative data table (ACS residential supply + DEED workplace concentration)
- Interactive Chart.js visualization of metro vs Greater Minnesota job share
- Spatial evidence cards and analytical narrative
- **Full Recommended Metrics & Visuals toolkit**
- Implementation notes and next analytical steps
- Primary sources and references

## Recommended Metrics Toolkit

### 1. Concentration Metrics
- Metro Share of Jobs
- Location Quotient (LQ)
- Residential vs Workplace Counts

### 2. Accessibility & Opportunity Metrics
- Job Accessibility Score (cumulative opportunities in 30/45/60-min isochrones)
- Travel-Time Threshold Share
- Effective Opportunity Set

### 3. Flow & Mobility Metrics (LEHD / OnTheMap)
- Inflow / Outflow Ratio
- Live–Work Share
- Cross-County Commute Rate
- Mean / Median Commute

### 4. Wage & Opportunity Gradient Metrics
- Wage Residual Surface
- Opportunity Gradient
- Skill-Matched Job Density

### 5. Composite / Derived Indices
- Spatial Mismatch Index (SMI)
- Brain-Drain Proxy
- Remote-Work Adjusted Mismatch

## Data Stack for Spatialytics

- **Residence**: ACS detailed occupation tables
- **Workplace**: DEED OEWS + LEHD LODES / OnTheMap
- **Commute**: LEHD Origin-Destination + ACS journey-to-work
- **Geography**: Crow Wing County, Brainerd micropolitan, Region 5, Twin Cities 7-county

## Tech

- Pure static HTML + Tailwind CSS (CDN) + Chart.js (CDN)
- Fully responsive dark aesthetic

## Deploy

No build step required. Framework preset on Vercel: **Other** (static).

Built for Spatialytics workflows · Data from latest DEED OEWS & ACS releases (2025–2026)
