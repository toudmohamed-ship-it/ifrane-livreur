"use client";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getWhatsAppLink } from "@/lib/schema";
import styles from "./Header.module.css";

const localeLabels: Record<string, string> = { fr: "FR", en: "EN", ar: "ع" };
const locales = ["fr", "en", "ar"] as const;

export default function Header({ locale }: { locale: string }) {
    const t = useTranslations("nav");
    const pathname = usePathname();
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const switchLocale = (newLocale: string) => {
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
        setMenuOpen(false);
    };

    const navLinks = [
        { href: "#services", label: t("services") },
        { href: "#how-it-works", label: t("howItWorks") },
        { href: "#area", label: t("area") },
        { href: "#pricing", label: t("pricing") },
        { href: "#contact", label: t("contact") },
    ];

    const waLink = getWhatsAppLink(locale);

    const handleWAClick = () => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "whatsapp_click", {
                event_category: "conversion",
                event_label: "header_cta",
            });
        }
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.inner}`}>
                <a href={`/${locale}/`} className={styles.logo} aria-label="Ifrane Livreur">
                    <img
                        src="/images/logo.png"
                        alt="Ifrane Livreur Logo"
                        className={styles.logoImg}
                    />
                </a>

                {/* Desktop Nav */}
                <nav className={styles.nav} aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right side */}
                <div className={styles.right}>
                    {/* Language switcher */}
                    <div className={styles.langSwitcher} role="navigation" aria-label="Language switcher">
                        {locales.map((l) => (
                            <button
                                key={l}
                                onClick={() => switchLocale(l)}
                                className={`${styles.langBtn} ${l === locale ? styles.langActive : ""}`}
                                aria-label={`Switch to ${l}`}
                            >
                                {localeLabels[l]}
                            </button>
                        ))}
                    </div>

                    {/* Desktop WA CTA */}
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-whatsapp btn-sm ${styles.headerCta}`}
                        onClick={handleWAClick}
                        aria-label="Order on WhatsApp"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        {t("orderWhatsapp")}
                    </a>

                    {/* Hamburger */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-whatsapp ${styles.mobileWa}`}
                        onClick={() => { handleWAClick(); setMenuOpen(false); }}
                    >
                        {t("orderWhatsapp")}
                    </a>
                    <div className={styles.mobileLang}>
                        {locales.map((l) => (
                            <button
                                key={l}
                                onClick={() => switchLocale(l)}
                                className={`${styles.langBtn} ${l === locale ? styles.langActive : ""}`}
                            >
                                {localeLabels[l]}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
