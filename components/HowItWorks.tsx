"use client";
import { useTranslations } from "next-intl";
import styles from "./HowItWorks.module.css";

const stepIcons = ["💬", "✅", "⚡"];

export default function HowItWorks() {
    const t = useTranslations("howItWorks");
    const steps = [
        { num: "01", icon: stepIcons[0], title: t("step1Title"), desc: t("step1Desc") },
        { num: "02", icon: stepIcons[1], title: t("step2Title"), desc: t("step2Desc") },
        { num: "03", icon: stepIcons[2], title: t("step3Title"), desc: t("step3Desc") },
    ];

    return (
        <section className="section" id="how-it-works" aria-label="How it works">
            <div className="container">
                <div className="section-header">
                    <h2>{t("h2")}</h2>
                    <p>{t("subtitle")}</p>
                </div>
                <div className={styles.steps}>
                    {steps.map((step, i) => (
                        <div key={i} className={styles.step}>
                            <div className={styles.stepNum}>{step.num}</div>
                            {i < steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
                            <div className={styles.stepIcon}>{step.icon}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
