# 👨‍🍳 Chuks Kitchen

A high-fidelity frontend implementation of the Chuks Kitchen food delivery platform. This project was developed as part of an internship challenge at Trueminds Innovations, focusing on the rigorous translation of complex Figma designs into a functional, responsive, and type-safe React application.

---

### Live Priview

[Vercel Deployment](https://chuks-kitchen-gamma.vercel.app)

---

## 📋 Project Overview

The core objective was to demonstrate "Design-to-Code" proficiency by implementing a minimum of 5 pages from a 12-page Figma specification. I successfully delivered 5 core pages with full mobile responsiveness, prioritizing pixel-perfection and clean architectural patterns.

### Pages Implemented:

- Onboarding/Welcome: Initial brand entry point with optimized image assets.

- Sign In: User authentication interface with custom form logic.

- Sign Up: Registration interface featuring reusable input components.

- Home: A dashboard-style landing page with featured highlights.

- Menu/Explore: A complex listing page featuring advanced filtering and search.

***Note: Account, Cart, and Contact pages are planned for future development.***

---

## 🛠️ Tech Stack

- Framework: Next.js 16 (App Router)

- Language: TypeScript

- Styling: Tailwind CSS (utilizing v4 features)

- UI Components: Shadcn UI (Radix UI Primitives)

- Icons: Lucide React

- Package Manager: pnpm

---

## 📁 Project Structure

The project utilizes Next.js Route Groups and a modular component architecture to keep the codebase organized.
```
chuks-kitchen/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   ├── sign-up/
│   │   ├── layout.tsx          # Auth-specific layout (Form Shell)
│   │   └── page.tsx            
│   ├── (main)/                 # Core app experience
│   │   ├── account/            # Not implemented
│   │   ├── cart/               # Not implemented
│   │   ├── ccontact/           # Not implemented
│   │   ├── home/               # Home page
│   │   ├── menu/               # Food menu page
│   │   └── layout.tsx          # Main Shell (Navbar)  
│   ├── favico.ico
│   ├── global.css
│   └── layout.tsx              # Global Shell (Footer)
├── components/
│   ├── ui/                     # Shadcn primitives (Card, Button, Navigation menu, Sheet)
│   ├── AuthInput.tsx           # Custom input with icons
│   ├── FoodCard.tsx            # Menu item component
│   └── Navbar.tsx              # Main navigation
│   └── Other components...
├── lib/                        # Utilities & Data
│   ├── foodData.ts             # Food data list
│   ├── navigation.ts           # The navigation links
│   └── utils.ts                # The `cn()` helper
├── public/
│   ├── auth/
│   ├── food/                   # Food-specific photography
│   │   ├── category/           # Images for category buttons
│   │   └── food-items/         # Large dish images (Jollof, etc.)
│   ├── home/
│   ├── icons/
│   ├── menu/
│   └── logo.svg
├── .gitignore
├── components.json             # Shadcn configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies (pnpm)
├── postcss.config.mjs          # Tailwind v4 processing
├── README.md
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Key Features & Logic

Advanced Category Filtering
The menu features a specialized filtering system. While the data is hard-coded, the logic is built to handle complex relationships:

Virtual Categories: Implemented "Popular" as a functional filter. Even though "Popular" isn't a food group, the system identifies items with the isPopular flag.

Grouped Rendering: When the "Popular" filter is active, the UI dynamically groups items by their actual category (e.g., "Popular in Jollof Rice") using .reduce() and Object.entries().

Reusable Component Architecture
Custom Auth Inputs: Developed a single AuthInput component that handles password toggles, dynamic icons, and validation states without code duplication.

Responsive Navbar: A hybrid navigation system that uses a desktop NavigationMenu and a mobile Sheet (Drawer) for optimal UX.

---

## 🧠 Challenges Overcome

🧩 Interpreting Design Ambiguity
The Figma design presented "Popular" as a sibling to food categories like "Swallows." I identified that this would lead to a poor user experience if rendered as a flat list. I improvised a Grouped View logic that maintains the menu's structure while highlighting top-rated items, turning a design ambiguity into a functional feature.

🎨 Mastering Shadcn UI
As this was my first time using Shadcn, I faced a steep learning curve in customizing component styles without "breaking" the underlying Radix primitives.

- Solution: I utilized Tailwind’s cn() utility and learned to extend Shadcn's base styles via class-variance-authority (CVA), allowing for heavy customization while maintaining the integrity of the library.

📱 Responsive Layouts
Matching 5 pages across both Mobile and Desktop required deep use of Tailwind’s grid and flexbox systems, specifically handling the "line-height" gaps in images and ensuring uniform card heights in the menu grid regardless of content length.

---

## 🔧 Installation

1. Clone the repository:
```bash
git clone git@github.com:Dhee-codes/chuks-kitchen.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Run development server:
```bash
pnpm dev
```

---

## Author

***Dhee-codes***

### Acknowledgement

Trueminds Innovations