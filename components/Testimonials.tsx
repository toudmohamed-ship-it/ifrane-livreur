"use client";
import { useTranslations } from "next-intl";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
    const t = useTranslations("testimonials");
    const reviews = [
        { key: "t1", name: t("t1.name"), text: t("t1.text") },
        { key: "t2", name: t("t2.name"), text: t("t2.text") },
        { key: "t3", name: t("t3.name"), text: t("t3.text") },
    ];
    return (
        <section className="section section-soft" aria-label="Customer testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>{t("h2")}</h2>
                    <p>{t("subtitle")}</p>
                </div>
                <div className={styles.grid}>
                    {reviews.map((r) => (
                        <figure key={r.key} className={styles.card}>
                            <div className="stars" aria-label="5 stars">★★★★★</div>
                            <blockquote className={styles.quote}>{r.text}</blockquote>
                            <figcaption className={styles.name}>— {r.name}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
