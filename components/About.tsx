"use client";
import { useTranslations } from "next-intl";
import styles from "./About.module.css";

export default function About() {
    const t = useTranslations("about");
    return (
        <section className="section section-soft" aria-label="About Ifrane Livreur">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.text}>
                        <h2 className={styles.h2}>{t("h2")}</h2>
                        <p>{t("p1")}</p>
                        <p>{t("p2")}</p>
                    </div>
                    <div className={styles.stats}>
                        {[
                            { value: t("stat1Value"), label: t("stat1Label") },
                            { value: t("stat2Value"), label: t("stat2Label") },
                            { value: t("stat3Value"), label: t("stat3Label") },
                        ].map((s, i) => (
                            <div key={i} className={styles.stat}>
                                <strong>{s.value}</strong>
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
