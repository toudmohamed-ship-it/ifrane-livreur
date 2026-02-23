"use client";
import { useTranslations } from "next-intl";
import styles from "./ServiceArea.module.css";

export default function ServiceArea() {
    const t = useTranslations("area");
    return (
        <section className="section" id="area" aria-label="Service area">
            <div className="container">
                <div className="section-header">
                    <h2>{t("h2")}</h2>
                    <p>{t("subtitle")}</p>
                </div>
                <div className={styles.inner}>
                    <div className={styles.text}>
                        <p>{t("description")}</p>
                        <div className={styles.tags}>
                            {["Ifrane Centre", "Hay Salam", "Al Amal", "AUI Campus", "Avenue Hassan II", "Zone Hôtelière"].map((z) => (
                                <span key={z} className={styles.tag}>{z}</span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.mapWrap}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6783.92!2d-5.1167!3d33.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3d57c8f2a1ba1%3A0x6e0b50e55e0b50e5!2sIfrane%2C%20Morocco!5e0!3m2!1sfr!2sma!4v1707000000000"
                            width="100%"
                            height="340"
                            style={{ border: 0, borderRadius: "14px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={t("mapAlt")}
                            aria-label={t("mapAlt")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
