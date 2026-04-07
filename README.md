# Braven Team 04, Revamped City Year Bay Area MVP Website

A modern, clean website prototype for [City Year Bay Area](https://www.cityyear.org/bay-area/) recruitment, built with React and Tailwind CSS.

## Demo

[![Demo Video](<img width="1299" height="497" alt="Screenshot 2025-10-04 at 11 50 37 PM" src="https://github.com/user-attachments/assets/a7c6c71c-3d22-441e-bbae-eb31a9f3b254" />)](https://github.com/user-attachments/assets/a7c6c71c-3d22-441e-bbae-eb31a9f3b254)


## Features

- **Clean, Modern Design**: Simplified color palette with uplifting, professional aesthetics
- **Donation Section**: Easy-to-use donation interface with preset and custom amounts
- **Partner Perks**: Highlights networking opportunities, stipends, and leadership experience
- **Interactive Calendar**: Sign up for short shifts (2-4 hours) to experience City Year before committing
- **Video Testimonials**: Placeholder sections for current member and alumni stories
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices

## Challenge (Capstone Context)

City Year Bay Area’s recruitment experience needs to do more than “explain the program” — it needs to quickly help a prospective applicant answer:

- **Is this financially realistic in the Bay Area?**
- **What does day-to-day service actually look like?**
- **What impact will I have, and what support will I get?**
- **What’s the next step I can take right now?**

## Product Summary

This project is a **modern recruitment website prototype** designed to reduce uncertainty and increase conversion by combining:

- **Clear, skimmable messaging** for first-time visitors
- **Interactive tools** that make benefits, schedule, and trade-offs concrete
- **Impact-forward storytelling** that connects service to real outcomes

## How It Drives Impact

- **Reduces financial ambiguity**: tools that translate stipends/benefits into “real numbers” help candidates self-qualify faster.
- **Builds trust through transparency**: details on benefits, support, and expectations shift the tone from “marketing” to “clarity.”
- **Creates low-friction entry points**: short-shift / event-style CTAs and simple pathways to apply make commitment feel achievable.
- **Makes service feel tangible**: day-in-the-life + impact visuals help visitors picture themselves in the role.
- **Supports mobile-first recruiting**: designed to work cleanly on phones where many candidates first discover programs.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview the Production Build

```bash
npm run preview
```

Vite will print a local URL (commonly `http://localhost:4173`).

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with smooth scrolling
│   │   ├── Hero.jsx            # Hero section with main CTA
│   │   ├── DonationSection.jsx # Donation interface
│   │   ├── CalendarSection.jsx # Interactive shift signup calendar
│   │   ├── VideosSection.jsx   # Video testimonial placeholders
│   │   ├── ApplySection.jsx    # Application CTA
│   │   └── Footer.jsx          # Footer with links and info
│   │   ├── brand/              # Brand storytelling + interactive tools
│   │   ├── impact/             # Impact dashboards/visualizations
│   │   ├── calculators/        # Financial/benefits calculators
│   │   ├── alumni/             # Alumni content + tracking
│   │   ├── faq/                # FAQ components
│   │   └── hero/               # Hero carousel + stat ticker
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind CSS imports
├── index.html
├── package.json
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md
```

## Design Decisions

### Color Palette
- **Primary Red** (`#E63946`): City Year brand color, used for CTAs and highlights
- **Blue** (`#457B9D`): Professional, trustworthy - used in hero and accents
- **Green** (`#06A77D`): Positive, growth - used for available shifts
- **Yellow** (`#FFD166`): Energetic, attention-grabbing - used for perks banner
- **Neutrals**: Clean grays for text and backgrounds

### Key Improvements
1. **Simplified Navigation**: Clean, sticky navbar with smooth scrolling
2. **Clear Messaging**: Emphasizes professional growth and career pathways
3. **Low Commitment Entry**: Calendar allows trying short shifts before full commitment
4. **Visual Hierarchy**: Better spacing, typography, and visual flow
5. **Mobile-First**: Fully responsive design that works on all devices

## What’s Included (Highlights)

- **Brand / “Real Numbers” storytelling**: interactive and narrative components that make benefits and expectations concrete.
- **Impact visualization**: components that show outcomes and reinforce purpose.
- **Recruitment funnel sections**: hero → mission → perks → calendar/events → apply/contact.

## Next Enhancements (If Productized)

- **Real analytics**: track CTA clicks, scroll depth, and drop-off points.
- **CMS-backed content**: allow non-engineers to update alumni stories, FAQs, and events.
- **Donation/payment**: wire donation flows to Stripe/PayPal with secure server-side processing.
- **Accessibility pass**: keyboard navigation, reduced motion toggles, and content contrast verification.

## Customization

### Adding Real Video Content
Replace the video placeholders in `VideosSection.jsx` with actual video embeds or links.

### Calendar Data
Update the `shiftsData` object in `CalendarSection.jsx` to connect to your actual scheduling system.

### Donation Integration
Connect the donation buttons in `DonationSection.jsx` to your payment processor (Stripe, PayPal, etc.).

## Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server

## Deployment Notes

- **Static hosting friendly**: `npm run build` outputs to `dist/` and can be deployed to Netlify, Vercel, or GitHub Pages.
- **Single-page routing**: if you add routes later, configure your host to serve `index.html` for unknown paths.

## License

This project is created for City Year Bay Area.

