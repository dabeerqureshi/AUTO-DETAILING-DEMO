# 🏎️ APEX GLOSS — Precision Auto Detailing & 9H Ceramic Studio

> **North America’s Premier Mobile & Studio Detailing Platform (USA & Canada)**  
> Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. 100% production-ready and optimized for **1-click Vercel deployment**.

---

## 🌟 Overview & Market Research

This platform was engineered based on in-depth market research of top-performing car detailing and ceramic coating businesses across the **United States** (Dallas, Los Angeles, Miami, Chicago, Scottsdale) and **Canada** (Greater Toronto Area, Vancouver, Calgary, Montreal).

### Key Industry Insights Implemented:
1. **Dynamic Multi-Currency Engine**: Instant toggle between **USD ($)** and **CAD ($)** with realistic North American pricing multipliers.
2. **Vehicle Category Classification**: Dynamically adjusts labor time, chemical consumption, and pricing based on vehicle size:
   - *Coupe / Sedan* (Base 1.0x)
   - *Mid-Size SUV / Crossover* (1.2x)
   - *Full-Size SUV / Truck* (1.45x)
   - *Exotic / Luxury / Fleet* (1.7x)
3. **Interactive Before & After Comparison Slider**: Allows clients to drag a divider comparing paint correction (swirl removal), interior heated steam extraction, and ceramic wheel barrel protection.
4. **Instant Price Estimator & Builder**: Live quote calculator calculating total cost and service duration with itemized add-on selections.
5. **High-Converting 4-Step Booking Funnel**:
   - Step 1: Vehicle Year, Make, Model & Category
   - Step 2: Package Selection & Add-on Upgrades
   - Step 3: Location (Mobile At-Doorstep vs In-Studio Bay) + Address/Postal Code + Date/Time slot
   - Step 4: Contact info, notes, zero-deposit confirmation, celebratory confetti, and unique reference ID (e.g. `APX-84920`).
6. **North American Climate Defense Modules**:
   - **Canada & Northern US**: Road Salt & Magnesium Chloride neutralizer flush.
   - **Southern US**: Solar UV & Lovebug acid etch ceramic shield.
7. **The Science of 9H Ceramic & CARFAX Warranty**: Educates clients on hydrophobic contact angles (>115°) and permanent covalent bonding.

---

## 🚀 1-Click Vercel Deployment

Deploying this website to **Vercel** takes under 60 seconds:

### Method 1: Push to GitHub & Connect to Vercel (Recommended)
1. Commit and push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete APEX GLOSS auto detailing demo platform"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `AUTO-DETAILING-DEMO` repository.
4. Keep the default settings (Framework Preset: Next.js).
5. Click **"Deploy"**. Vercel will build and assign a global CDN URL with automatic SSL.

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open browser at http://localhost:3000
```

---

## 🛠️ Project Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom styling, dark mode & animations
│   │   ├── layout.tsx          # Root layout with CurrencyProvider & SEO metadata
│   │   └── page.tsx            # Main page assembling all sections & booking state
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glassmorphism header & USD/CAD switcher
│   │   ├── Hero.tsx            # Luxury hero section with trust metrics
│   │   ├── PackagesSection.tsx # 4 signature detailing package cards
│   │   ├── InstantEstimator.tsx# Live interactive price & duration calculator
│   │   ├── InteractiveSlider.tsx# Draggable Before/After visual comparison
│   │   ├── CeramicDeepDive.tsx # 9H ceramic coating science & CARFAX warranty
│   │   ├── MobileVsStudio.tsx  # Mobile van vs indoor studio bay comparison
│   │   ├── WinterSummerCare.tsx# Northern salt vs Southern UV protection guide
│   │   ├── Testimonials.tsx    # Verified reviews from USA & Canada clients
│   │   ├── FaqSection.tsx      # Interactive FAQ accordion
│   │   ├── DemoBanner.tsx      # Turnkey demo callout for detailing business owners
│   │   ├── Footer.tsx          # Complete footer with regional hubs & hours
│   │   └── BookingModal.tsx    # 4-step booking funnel modal with confetti
│   ├── context/
│   │   └── CurrencyContext.tsx # USD/CAD currency provider & price formatter
│   ├── data/
│   │   ├── services.ts         # Service packages, vehicles & add-on data
│   │   └── locations.ts        # Testimonials & USA/Canada metropolitan hubs
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 🎨 Customizing For Any Detailing Business

- **Change Brand Name & Logo**: Update `src/components/Navbar.tsx` and `src/components/Footer.tsx`.
- **Change Pricing & Packages**: Modify `src/data/services.ts`.
- **Add Local Service Cities**: Edit `src/data/locations.ts`.
- **Connect Stripe or Square**: Wire into `handleFinalSubmit` in `src/components/BookingModal.tsx`.

