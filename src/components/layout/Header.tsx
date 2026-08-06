"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, X } from "lucide-react";
import { Category } from "@/lib/types";
import styles from "./Header.module.scss";

interface HeaderProps {
  categories?: Category[];
}

// Pages with NO full-bleed hero — navbar must start solid white immediately
const NON_HERO_PATTERNS = [
  /^\/products\/[^/]+/,      // /products/[slug]  (detail page)
  /^\/distributorship\/apply/, // apply form
  /^\/contact/,               // contact page
];

function isNonHeroPage(path: string) {
  return NON_HERO_PATTERNS.some((p) => p.test(path));
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products", isDropdown: true },
  { name: "Crop Solutions", href: "/crop-solutions" },
  { name: "Distributorship", href: "/distributorship" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header({ categories = [] }: HeaderProps) {
  const pathname = usePathname();
  const nonHero = isNonHeroPage(pathname);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Determine initial state without triggering synchronous cascaded renders
    const checkScroll = () => {
      if (nonHero) {
        setScrolled(true);
      } else {
        setScrolled(window.scrollY > 20);
      }
    };
    
    checkScroll();

    if (nonHero) return; // No scroll listener needed for non-hero pages

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [pathname, nonHero]);

  // Handle nav clicks to close mobile menu
  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={handleNavClick}>
          <Image src="/logo.jpg" alt="Eriezon Crop Science India" width={108} height={36} priority />
        </Link>
        
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            link.isDropdown ? (
              <div 
                key={link.name}
                className={styles.dropdownContainer}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link href={link.href} className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                  {link.name} <ChevronDown size={14} className={`${styles.chevron} ${dropdownOpen ? styles.chevronRotate : ""}`} />
                </Link>
                {dropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <Link href={link.href} className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                      All Products
                    </Link>
                    {categories.map((cat) => (
                      <Link 
                        key={cat._id}
                        href={`/products?category=${cat.slug}`} 
                        className={styles.dropdownItem}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            )
          ))}
          <Link href="/distributorship/apply" className={styles.ctaButton}>Become a Distributor</Link>
        </nav>

        <button 
          className={styles.mobileMenuBtn} 
          aria-label="Toggle Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            link.isDropdown ? (
              <div key={link.name} className={styles.mobileCategoryGroup}>
                <Link href={link.href} className={styles.mobileNavLink} onClick={handleNavClick}>
                  {link.name}
                </Link>
                <div className={styles.mobileCategoryList}>
                  <Link href={link.href} className={styles.mobileCategorySubLink} onClick={handleNavClick}>
                    All Products
                  </Link>
                  {categories.map((cat) => (
                    <Link 
                      key={cat._id}
                      href={`/products?category=${cat.slug}`} 
                      className={styles.mobileCategorySubLink}
                      onClick={handleNavClick}
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.name} href={link.href} className={styles.mobileNavLink} onClick={handleNavClick}>
                {link.name}
              </Link>
            )
          ))}
          <Link href="/distributorship/apply" className={styles.mobileCtaButton} onClick={handleNavClick}>
            Become a Distributor
          </Link>
        </div>
      )}
    </header>
  );
}
