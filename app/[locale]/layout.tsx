import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { DOMAIN, getLocalBusinessSchema, getFAQSchema } from "@/lib/schema";
import Script from "next/script";

const GA_ID = "G-XXXXXXXXXX"; // PLACEHOLDER: replace with real GA4 ID

type Locale = "fr" | "en" | "ar";

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });

    const alternates: Record<string, string> = {};
    routing.locales.forEach((l) => {
        alternates[l] = `${DOMAIN}/${l}/`;
    });

    return {
        metadataBase: new URL(DOMAIN),
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `${DOMAIN}/${locale}/`,
            languages: {
                ...alternates,
                "x-default": `${DOMAIN}/fr/`,
            },
        },
        openGraph: {
            title: t("ogTitle"),
            description: t("ogDescription"),
            url: `${DOMAIN}/${locale}/`,
            siteName: "Ifrane Livreur",
            type: "website",
            locale: locale === "ar" ? "ar_MA" : locale === "en" ? "en_US" : "fr_MA",
        },
        robots: { index: true, follow: true },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = await getMessages();
    const isRTL = locale === "ar";
    const localBusinessSchema = getLocalBusinessSchema(locale);
    const faqSchema = getFAQSchema(locale);

    return (
        <html
            lang={locale}
            dir={isRTL ? "rtl" : "ltr"}
            className={isRTL ? "rtl" : ""}
        >
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {isRTL ? (
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                ) : (
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                )}
                <Script
                    id="schema-local-business"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
                <Script
                    id="schema-faq"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                {/* GA4 tracking removed as per request "no need for the moment" */}
            </head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
