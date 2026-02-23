"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from "./FAQ.module.css";

const qKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export default function FAQ() {
    const t = useTranslations("faq");
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="section section-soft" id="faq" aria-label="FAQ">
            <div className="container">
                <div className="section-header">
                    <h2>{t("h2")}</h2>
                    <p>{t("subtitle")}</p>
                </div>
                <div className={styles.list} role="list">
                    {qKeys.map((qk, i) => {
                        const ak = qk.replace("q", "a") as `a${number}`;
                        const isOpen = open === i;
                        return (
                            <div key={qk} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`} role="listitem">
                                <button
                                    className={styles.question}
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{t(qk)}</span>
                                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} aria-hidden="true">
                                        ›
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className={styles.answer}>
                                        <p>{t(ak)}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
