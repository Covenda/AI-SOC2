# Recorded Future Website Clone

A production-quality front-end clone of the Recorded Future website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This project recreates the information architecture, routing structure, and UI/UX of the Recorded Future website. It includes:

- **59 routes** covering all major sections: Platform, Products, Use Cases, Industries, Resources, Company, Partners, and Legal
- **Responsive design** with mobile, tablet, and desktop breakpoints
- **Reusable components** for Hero sections, Feature Grids, Navigation, and Footer
- **Clean, maintainable code** ready for rebranding and customization

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React 19** for UI components

## Project Structure

```
AI-SOC/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Navbar & Footer
│   ├── page.tsx                 # Homepage
│   ├── platform/                # Platform pages
│   ├── products/                # Product pages
│   ├── use-case/                # Use case pages
│   ├── industry/                # Industry pages
│   ├── resources/               # Resources & content
│   ├── partner/                 # Partner programs
│   ├── legal/                   # Legal pages
│   └── ...                      # Other routes
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Main navigation
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                 # Hero section component
│   └── FeatureGrid.tsx          # Feature grid component
├── lib/                         # Utilities and data
│   └── navigation.ts            # Navigation structure
└── public/                      # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Key Routes

### Platform
- `/platform` - Platform overview
- `/platform/intelligence-graph` - Intelligence Graph
- `/platform/integrations` - Integrations
- `/platform/recorded-future-ai` - AI capabilities

### Products
- `/products/threat-intelligence` - Threat Intelligence
- `/products/brand-intelligence` - Brand Intelligence
- `/products/vulnerability-intelligence` - Vulnerability Intelligence
- `/products/identity-intelligence` - Identity Intelligence
- And 5 more product pages

### Use Cases
- `/use-case/digital-risk` - Digital Risk Protection
- `/use-case/ransomware` - Ransomware Defense
- `/use-case/exposure-management` - Exposure Management
- `/use-case/automation-security-workflows` - Automation

### Industries
- `/industry/financial` - Financial Services
- `/industry/healthcare` - Healthcare
- `/industry/public-sector` - Public Sector
- `/industry/technology` - Technology
- And 2 more industry pages

### Content & Resources
- `/blog` - Blog
- `/resources` - Resources hub
- `/case-study` - Case studies
- `/research` - Threat research

### Company
- `/why-recorded-future` - Why choose us
- `/our-story` - Company story
- `/careers` - Careers
- `/contact` - Contact
- `/partner` - Partner programs

## Design System

### Colors

The project uses a professional enterprise security color palette:

- **Brand Navy**: Primary dark blue
- **Brand Blue**: Primary accent blue
- **Brand Cyan**: Highlight cyan
- **Brand Purple**: Accent purple
- **Neutral Gray Scale**: UI elements

### Typography

System font stack with fallbacks for cross-platform consistency.

### Components

#### Hero Component
```tsx
<Hero
  badge="Platform"
  title="Your Title"
  description="Description text"
  primaryCTA={{ text: 'Book Demo', href: '/contact' }}
  variant="gradient" // or "simple"
/>
```

#### FeatureGrid Component
```tsx
<FeatureGrid
  title="Section Title"
  description="Section description"
  features={[
    {
      icon: '🎯',
      title: 'Feature Title',
      description: 'Feature description',
      href: '/link' // optional
    }
  ]}
  columns={3} // 2, 3, or 4
/>
```

## Customization & Rebranding

To rebrand this site:

1. **Update colors** in `tailwind.config.ts`
2. **Replace logo** in `components/Navbar.tsx` and `components/Footer.tsx`
3. **Update metadata** in `app/layout.tsx`
4. **Modify content** in individual page files
5. **Update navigation** in `lib/navigation.ts`

## Future Enhancements

- Add actual content from the live Recorded Future site
- Implement case study detail pages
- Add blog post detail pages
- Integrate with a CMS for content management
- Add contact forms with backend integration
- Implement search functionality
- Add animations and micro-interactions

## License

This is a clone project for internal use. All Recorded Future branding and content belongs to Recorded Future, Inc.
