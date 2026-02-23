"use client";
import { useTranslations } from "next-intl";
import styles from "./Services.module.css";

const serviceIcons = [
    // Food
    <svg key="food" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>,
    // Grocery
    <svg key="grocery" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.95-1.57l1.65-7.43H5.12" />
    </svg>,
    // Pharmacy
    <svg key="pharmacy" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>,
    // Parcel
    <svg key="parcel" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>,
];

const serviceKeys = ["food", "grocery", "pharmacy", "parcel"] as const;
const serviceColors = ["#e8151b", "#f59e0b", "#10b981", "#3b82f6"];

export default function Services() {
    const t = useTranslations("services");

    return (
        <section className="section section-soft" id="services" aria-label="Delivery services">
            <div className="container">
                <div className="section-header">
                    <h2>{t("h2")}</h2>
                    <p>{t("subtitle")}</p>
                </div>

                <div className={styles.grid}>
                    {serviceKeys.map((key, i) => (
                        <article
                            key={key}
                            className={styles.card}
                            id={`${key}-delivery-ifrane`}
                        >
                            <div className={styles.iconWrap} style={{ "--color": serviceColors[i] } as React.CSSProperties}>
                                {serviceIcons[i]}
                            </div>
                            <h3 className={styles.cardTitle}>{t(`${key}.h3`)}</h3>
                            <p className={styles.cardDesc}>{t(`${key}.desc`)}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
