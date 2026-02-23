"use client";
import { useTranslations } from "next-intl";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
    const t = useTranslations("whyUs");
    const items = ["item1", "item2", "item3", "item4", "item5", "item6"] as const;
    return (
        <section className={`section section-soft ${styles.section}`} aria-label="Why choose us">
            <div className="container">
                <div className="section-header">
                    <h2>{t("h2")}</h2>
                </div>
                <div className={styles.grid}>
                    {items.map((key) => (
                        <div key={key} className={styles.item}>
                            <span className={styles.check} aria-hidden="true">✔</span>
                            <span className={styles.text}>{t(key)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
