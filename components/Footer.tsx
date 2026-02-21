"use client";
import { navlinks } from "@/lib/navigation";
import { Logo } from "./Logo";
import Link from "next/link";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    label: "Twitter",
    href: "https://x.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const Footer = () => {
  return (
    <footer className="text-[12px] leading-7 font-poppins text-secondary-foreground bg-secondary px-4 sm:px-10 md:px-14 lg:px-27.5 py-12 md:py-14 lg:py-17.25">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-17 lg:gap-25.25 mb-1">
        <section>
          <Logo link={false} className="w-57.5 h-9.5" />
          <p className="footer-text">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </section>
        <nav>
          <h4 className="footer-text">Quick Links</h4>
          <ul>
            {navlinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h4 className="footer-text">Contact Us</h4>
          <p>
            +234 801 234 5678 <br />
            hello@chukskitchen.com <br />
            123 Taste Blvd, Lagos, Nigeriat
          </p>
        </div>
        <div aria-label="Social links">
          <ul>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <p>&copy; 2020 Lift Media. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="w-13 aspect-square bg-[#0081FE] rounded-full flex justify-center items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5L12 21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 11L12.4096 4.1978C12.3585 4.13563 12.2955 4.08584 12.225 4.05174C12.1544 4.01764 12.0779 4 12.0005 4C11.9232 4 11.8467 4.01764 11.7761 4.05174C11.7056 4.08584 11.6426 4.13563 11.5915 4.1978L6 11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};
