"use client";
import { navlinks } from "@/lib/navigation";
import Image from "next/image";
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
    <footer className="text-[12px] leading-7 font-pop text-surface/60 bg-footer px-4 sm:px-10 md:px-14 lg:px-27.5 py-12 md:py-14 lg:py-17.25">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-17 lg:gap-25.25 mb-1">
        <section>
          <Image
            src="/logo.svg"
            alt="Chuks Kitchen logo"
            width={230}
            height={38}
          />
          <p className="footer-text">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </section>
        <nav aria-labelledby="footer-nav">
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
        <button onClick={scrollToTop} className="w-13 aspect-square bg-back-to-top rounded-full flex justify-center items-center">
          <Image
            src="/footer/back-to-top-arrow.svg"
            alt="Back to top arrow"
            width={24}
            height={24}
          />
        </button>
      </div>
    </footer>
  );
};
