# 👨‍🍳 Chuks Kitchen

A high-fidelity frontend implementation of the Chuks Kitchen food delivery platform. This project was developed as part of an internship challenge at Trueminds Innovations, focusing on the rigorous translation of complex Figma designs into a functional, responsive, and type-safe React application.

---

### Live Priview

[Vercel Deployment](https://chuks-kitchen-gamma.vercel.app)

---

## 📋 Project Overview

The core objective was to demonstrate "Design-to-Code" proficiency by implementing a Figma specification. I successfully delivered 5 core pages with full mobile responsiveness, prioritizing pixel-perfection and clean architectural patterns.

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

### URL-Driven State Management
Implemented a seamless navigation flow where Category Cards on the Home page link directly to filtered results on the Menu page. 
- **Logic**: Utilized Next.js `useSearchParams` to synchronize the UI state with URL query parameters (`?category=...`), allowing for bookmarkable filtered views and cross-page communication without a global state manager.

### Advanced Category Filtering
- **Virtual Categories**: Implemented "Popular" as a functional filter using an `isPopular` flag.
- **Grouped Rendering**: When "Popular" is active, the UI dynamically groups items by their category using `.reduce()` and `Object.entries()`.

### Interactive User Feedback
Used **Sonner** to implement toast notifications for "Add to Cart" actions. This provides immediate visual confirmation and handles non-implemented routes gracefully, ensuring the application feels "alive" and responsive.

---

## 🧠 Challenges Overcome

🧩 **Interpreting Design Ambiguity**
The Figma design presented "Popular" as a sibling to food categories. I identified that this would lead to a flat, confusing list. I improvised a **Grouped View logic** that maintains the menu's structure while highlighting top-rated items.

🎨 **State & URL Synchronization**
Synchronizing the `activeCategory` state with URL parameters without triggering "cascading renders" required careful implementation of `useState` initialization and `useEffect` hooks to ensure a smooth, error-free user experience during navigation.

📱 **Responsive Layouts**
Handled complex grid behaviors and image aspect ratios across breakpoints, ensuring that wrapping components in `Link` tags didn't compromise the layout integrity or the intended CSS styling.

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
