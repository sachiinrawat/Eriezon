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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`} suppressHydrationWarning>
      <div className={styles.pillContainer}>
        {/* Logo in frosted white capsule */}
        <Link href="/" className={styles.logoBadge} onClick={handleNavClick} suppressHydrationWarning>
          <Image
            src="/logo.jpg"
            alt="Eriezon"
            width={94}
            height={28}
            priority
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) =>
            link.isDropdown ? (
              <div
                key={link.name}
                className={styles.dropdownContainer}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${pathname.startsWith("/products") ? styles.activeLink : ""}`}
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={`${styles.chevron} ${dropdownOpen ? styles.chevronRotate : ""}`}
                  />
                </Link>
                {dropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    <Link
                      href={link.href}
                      className={styles.dropdownItem}
                      onClick={() => setDropdownOpen(false)}
                    >
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
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.activeLink : ""}`}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className={styles.ctaWrapper}>
          <Link
            href="/distributorship/apply"
            className={styles.pillCtaBtn}
            onClick={handleNavClick}
          >
            Become a Distributor
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.mobileMenuBtn}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer (Smooth Glass Island) */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavList}>
            {NAV_LINKS.map((link) =>
              link.isDropdown ? (
                <div key={link.name} className={styles.mobileCategoryGroup}>
                  <Link
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </Link>
                  <div className={styles.mobileCategoryList}>
                    <Link
                      href={link.href}
                      className={styles.mobileCategorySubLink}
                      onClick={handleNavClick}
                    >
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
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${pathname === link.href ? styles.activeMobileLink : ""}`}
                  onClick={handleNavClick}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/distributorship/apply"
              className={styles.mobileCtaBtn}
              onClick={handleNavClick}
            >
              Become a Distributor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
