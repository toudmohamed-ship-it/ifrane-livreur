"use client";
import { useTranslations } from "next-intl";
import styles from "./Pricing.module.css";

export default function Pricing() {
    const t = useTranslations("pricing");
    const features = t.raw("standard.features") as string[];
    return (
        <section className="section" id="pricing" aria-label="Pricing">
            <div className="container">
                <div className="section-header">
                    <h2>{t("h2")}</h2>
                    <p>{t("subtitle")}</p>
                </div>
                <div className={styles.wrap}>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <div className={styles.cardBadge}>⚡ Ifrane</div>
                            <h3 className={styles.cardTitle}>{t("standard.title")}</h3>
                            <div className={styles.price}>{t("standard.price")}</div>
                            <p className={styles.cardDesc}>{t("standard.desc")}</p>
                        </div>
                        <ul className={styles.features}>
                            {features.map((f: string, i: number) => (
                                <li key={i} className={styles.feature}>
                                    <span className={styles.featureCheck} aria-hidden="true">✔</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className={styles.note}>{t("note")}</p>
            </div>
        </section>
    );
}
