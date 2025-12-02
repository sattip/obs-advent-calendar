# OBS Advent Calendar 2024

24-day Advent Calendar campaign με AI Tips & Christmas Offers για το OBS Technologies eCommerce ecosystem.

## Overview

Ένα interactive advent calendar που συνδυάζει AI automation tips για ελληνικά eshops με κλιμακούμενες προσφορές τις τελευταίες 3 ημέρες πριν τα Χριστούγεννα. Κάθε "πόρτα" ξεκλειδώνει νέο περιεχόμενο με πρακτικές συμβουλές, technical guides και automation strategies.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Klaviyo** - Email marketing automation
- **date-fns** - Date manipulation and timezone handling

## Project Structure

```
obs-advent-calendar/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx             # Main calendar page
│   ├── components/
│   │   ├── advent/
│   │   │   ├── AdventCalendar.tsx    # Main calendar grid
│   │   │   ├── Door.tsx              # Individual door component
│   │   │   ├── DoorContent.tsx       # Door content modal
│   │   │   ├── CountdownTimer.tsx    # Christmas countdown
│   │   │   └── SnowAnimation.tsx     # Decorative snow effect
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Site header
│   │   │   └── Footer.tsx            # Site footer
│   │   └── ui/                       # Shared UI components
│   ├── lib/
│   │   ├── constants.ts              # Brand colors & campaign config
│   │   └── types.ts                  # TypeScript type definitions
│   └── hooks/                        # Custom React hooks
├── content/
│   └── days/
│       └── day-XX/
│           ├── email.html            # Klaviyo email template
│           ├── blog.md               # Greek SEO blog post
│           └── video-script.md       # Reels/Shorts script
├── public/
│   └── images/                       # Static assets
└── package.json                      # Dependencies and scripts

```

## Content

The campaign includes 24 complete content packages:

- **24 Email Templates** - Klaviyo-ready HTML emails with inline CSS
- **24 Blog Posts** - Greek SEO-optimized articles (1500-2000 words each)
- **24 Video Scripts** - Instagram Reels & YouTube Shorts scripts (30-60s)

### Content Types

- **Days 1-21**: AI Tips & Automation Strategies
- **Days 22-24**: Christmas Offers with escalating discounts

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The application will be available at `http://localhost:3000`

## Daily Content Themes

- Day 1: AI Agents για eCommerce
- Day 2: Auto-Accept Skroutz Παραγγελίες
- Day 3: SEO Titles με AI - Αύξησε το CTR κατά 40%
- Day 4: Mobile Checkout Optimization
- Day 5: AI Product Analysis - Ανακάλυψε Ποια Προϊόντα Πουλάνε
- Day 6: Auto-hide Low Stock Products
- Day 7: AI Category Organization για SEO
- Day 8: Market Intelligence - AI Price Monitoring
- Day 9: Daily Sales Report → Slack
- Day 10: AI Product Descriptions
- Day 11: Checkout Fields ανά Ρόλο
- Day 12: AI για Technical SEO
- Day 13: AI Personalization
- Day 14: Auto-detect Slow Plugins
- Day 15: Dynamic Pricing με AI
- Day 16: Security Auto-block IPs
- Day 17: Νέο Προϊόν → Auto SEO Workflow
- Day 18: AI Transactional Emails
- Day 19: B2B Τιμές ανά Ρόλο
- Day 20: Train AI με τα Data σου
- Day 21: Future AI Integration
- Day 22: Christmas Warmup - 20% OFF All OBS Plugins
- Day 23: Christmas Growth - 30% OFF + AI Agent Templates
- Day 24: CHRISTMAS FINALE - 40% OFF + Complete AI Mastery Bundle

## Offers (Days 22-24)

### Day 22: Christmas Warmup
- **Discount**: 20% OFF
- **Code**: `ADVENT20`
- **Products**: All OBS Plugins

### Day 23: Christmas Growth
- **Discount**: 30% OFF + Bonus AI Agent Templates
- **Code**: `ADVENT30`
- **Products**: All OBS Products + Free Templates

### Day 24: Christmas Finale
- **Discount**: 40% OFF + Complete AI Mastery Bundle
- **Code**: `XMAS40`
- **Products**: Complete OBS Suite + Full Training Pack

## Brand Colors

### OBS Colors
```css
--obs-purple: #a33188
--obs-blue: #4a92c9
--obs-blue-light: #9fdcf7
--obs-teal: #68bae5
--obs-green: #30e070
```

### Christmas Theme
```css
--christmas-red: #c41e3a
--christmas-gold: #ffd700
--christmas-snow: #fffafa
```

## Features

- **Daily Unlock System** - Doors unlock at 6:00 AM EET each day
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered transitions
- **SEO Optimized** - Greek metadata and structured content
- **Type Safety** - Full TypeScript coverage
- **Snow Animation** - Festive animated background
- **Countdown Timer** - Real-time countdown to Christmas

## Campaign Configuration

- **Start Date**: December 1, 2024
- **End Date**: December 24, 2024
- **Timezone**: Europe/Athens (EET/EEST)
- **Daily Unlock Time**: 06:00 AM
- **Target Audience**: Greek eCommerce businesses using WooCommerce

## Components Overview

### Core Components

1. **AdventCalendar** - Main grid layout (4x6 responsive grid)
2. **Door** - Individual calendar door with unlock logic
3. **DoorContent** - Modal displaying daily content
4. **CountdownTimer** - Christmas countdown
5. **SnowAnimation** - Decorative snow particles
6. **Header** - Site navigation and branding
7. **Footer** - Copyright and links

### Features per Component

- **Door states**: Locked, unlocked, opened, future
- **Content types**: AI tip, automation, offer
- **Animations**: Flip, fade, scale, particle effects
- **Accessibility**: Keyboard navigation, ARIA labels

## Development

### Code Style

- ESLint with Next.js recommended config
- TypeScript strict mode enabled
- Tailwind CSS for all styling
- Component composition over inheritance

### Best Practices

- Server Components by default
- Client Components only when needed ('use client')
- Optimistic UI updates
- Error boundaries for resilience
- Loading states for better UX

## Deployment

The app is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Environment Variables

```bash
NEXT_PUBLIC_CAMPAIGN_START=2024-12-01
NEXT_PUBLIC_CAMPAIGN_END=2024-12-24
NEXT_PUBLIC_TIMEZONE=Europe/Athens
```

## Content Marketing Strategy

### Email Campaign (Klaviyo)
- Daily automated emails at 6:00 AM
- Segmented lists: Active customers, leads, inactive
- Personalization tokens for names and past purchases
- Click tracking on CTA buttons

### Blog SEO Strategy
- Greek keywords targeting WooCommerce audience
- Internal linking between daily posts
- Meta descriptions optimized for CTR
- Schema markup for articles

### Social Media (Reels/Shorts)
- 30-60 second vertical videos
- Quick AI tips with visual demonstrations
- Countdown to Christmas offers
- Engagement hooks in first 3 seconds

## Analytics & Tracking

Recommended tracking setup:

- **Google Analytics 4** - User behavior and conversions
- **Facebook Pixel** - Retargeting and attribution
- **Klaviyo Analytics** - Email performance
- **Hotjar/Microsoft Clarity** - User session recording

## License

Proprietary - OBS Technologies

## Support

For technical support or questions:
- Email: support@obs.gr
- Website: https://obs.gr
- Documentation: https://docs.obs.gr

---

**Built with love by OBS Technologies for the Greek eCommerce community**

Καλά Χριστούγεννα! 🎄
