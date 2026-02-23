const WHATSAPP_NUMBER = "212690118288";
const PHONE_NUMBER = "+212 690 118 288";
const DOMAIN = "https://ifrane-livreur.ma";
const INSTAGRAM = "https://www.instagram.com/ifrane_livreur/";

export { WHATSAPP_NUMBER, PHONE_NUMBER, DOMAIN, INSTAGRAM };

export function getWhatsAppLink(locale: string): string {
    const messages: Record<string, string> = {
        fr: "Bonjour%2C+je+voudrais+une+livraison+%C3%A0+Ifrane",
        en: "Hello%2C+I+would+like+a+delivery+in+Ifrane",
        ar: "%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AE%D8%AF%D9%85%D8%A9+%D8%AA%D9%88%D8%B5%D9%8A%D9%84+%D9%81%D9%8A+%D8%A5%D9%81%D8%B1%D8%A7%D9%86",
    };
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${messages[locale] || messages.fr}`;
}

export function getLocalBusinessSchema(locale: string) {
    const descriptions: Record<string, string> = {
        fr: "Ifrane Livreur est le service de livraison leader à Ifrane, Maroc. Nous livrons repas, courses, et médicaments en 30 minutes, desservant l'Université Al Akhawayn et toute la Province d'Ifrane dans le Moyen Atlas.",
        en: "Ifrane Livreur is the leading courier service in Ifrane, Morocco. Fast delivery of food, groceries, and pharmacy items in 30 minutes, serving Al Akhawayn University and the entire Ifrane Province in the Middle Atlas.",
        ar: "إفران ليفرور هي خدمة التوصيل الرائدة في إفران، المغرب. توصيل سريع للطعام والبقالة والأدوية في 30 دقيقة، نخدم جامعة الأخوين وإقليم إفران بأكمله في الأطلس المتوسط.",
    };
    return [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${DOMAIN}/${locale}/#organization`,
            "name": "Ifrane Livreur",
            "url": `${DOMAIN}/${locale}/`,
            "logo": `${DOMAIN}/images/logo.png`,
            "sameAs": [INSTAGRAM]
        },
        {
            "@context": "https://schema.org",
            "@type": "CourierService",
            "@id": `${DOMAIN}/${locale}/#service`,
            "name": "Ifrane Livreur",
            "description": descriptions[locale] || descriptions.fr,
            "url": `${DOMAIN}/${locale}/`,
            "telephone": PHONE_NUMBER,
            "image": `${DOMAIN}/images/ifrane-livreur-service.jpg`,
            "provider": {
                "@type": "LocalBusiness",
                "name": "Ifrane Livreur",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Ifrane",
                    "addressRegion": "Province d'Ifrane",
                    "addressCountry": "MA"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 33.5333,
                    "longitude": -5.1167
                }
            },
            "areaServed": [
                { "@type": "City", "name": "Ifrane" },
                { "@type": "AdministrativeArea", "name": "Province d'Ifrane" },
                { "@type": "MountainRange", "name": "Moyen Atlas" },
                { "@type": "EducationalOrganization", "name": "Université Al Akhawayn" }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Catalogues de Services Ifrane Livreur",
                "itemListElement": getServiceSchemas(locale)
            }
        }
    ];
}

export function getServiceSchemas(locale: string) {
    const services = {
        fr: [
            { name: "Livraison de repas à Ifrane", desc: "Livraison de repas et plats chauds depuis les restaurants d'Ifrane." },
            { name: "Livraison de courses à Ifrane", desc: "Livraison de courses et produits d'épicerie à domicile à Ifrane." },
            { name: "Livraison de médicaments à Ifrane", desc: "Livraison de médicaments depuis les pharmacies d'Ifrane." },
            { name: "Livraison de colis à Ifrane", desc: "Livraison de colis et documents à Ifrane." },
        ],
        en: [
            { name: "Food Delivery in Ifrane", desc: "Delivery of food and hot meals from Ifrane restaurants." },
            { name: "Grocery Delivery in Ifrane", desc: "Home delivery of groceries and pantry items in Ifrane." },
            { name: "Pharmacy Delivery in Ifrane", desc: "Medication delivery from Ifrane pharmacies." },
            { name: "Parcel Delivery in Ifrane", desc: "Parcel and document delivery in Ifrane." },
        ],
        ar: [
            { name: "توصيل الطعام في إفران", desc: "توصيل الطعام والوجبات الساخنة من مطاعم إفران." },
            { name: "توصيل البقالة في إفران", desc: "توصيل المشتريات والمواد الغذائية إلى المنزل في إفران." },
            { name: "توصيل الأدوية في إفران", desc: "توصيل الأدوية من صيدليات إفران." },
            { name: "توصيل الطرود في إفران", desc: "توصيل الطرود والوثائق في إفران." },
        ],
    };
    return (services[locale as keyof typeof services] || services.fr).map((s) => ({
        "@type": "Service",
        name: s.name,
        description: s.desc,
        areaServed: "Ifrane",
        provider: { "@type": "LocalBusiness", name: "Ifrane Livreur" },
    }));
}

export function getFAQSchema(locale: string) {
    const faqs = {
        fr: [
            { q: "Quelle est la zone de livraison à Ifrane ?", a: "Nous livrons dans toute la ville d'Ifrane — tous les quartiers, hôtels, résidences universitaires et zones commerciales." },
            { q: "Combien coûte une livraison à Ifrane ?", a: "Nos tarifs commencent à partir de 15 MAD. Le prix final dépend de la distance et du type de commande." },
            { q: "Comment commander une livraison ?", a: "Envoyez-nous un message WhatsApp avec votre adresse et ce que vous souhaitez. Pas de formulaire requis." },
            { q: "Livrez-vous les médicaments de pharmacie ?", a: "Oui, nous livrons les médicaments depuis toutes les pharmacies d'Ifrane." },
            { q: "Quel est votre délai de livraison ?", a: "30 minutes maximum à Ifrane. Dans la plupart des cas, nous livrons encore plus rapidement." },
        ],
        en: [
            { q: "What areas do you deliver in Ifrane?", a: "We deliver across all of Ifrane city — all neighborhoods, hotels, university residences, and commercial zones." },
            { q: "How much does delivery cost in Ifrane?", a: "Our rates start from 15 MAD. The final price depends on distance and order type." },
            { q: "How do I place a delivery order?", a: "Simply send us a WhatsApp message with your address and what you need. No forms required." },
            { q: "Do you deliver pharmacy items?", a: "Yes, we deliver medications from all pharmacies in Ifrane." },
            { q: "How fast is your delivery?", a: "30 minutes maximum within Ifrane. In most cases, we deliver even faster." },
        ],
        ar: [
            { q: "ما هي مناطق التوصيل في إفران؟", a: "نوصّل في كامل مدينة إفران — جميع الأحياء، الفنادق، السكن الجامعي والمناطق التجارية." },
            { q: "كم تكلف خدمة التوصيل في إفران؟", a: "تبدأ أسعارنا من 15 درهم. السعر النهائي يعتمد على المسافة ونوع الطلب." },
            { q: "كيف أطلب خدمة التوصيل؟", a: "أرسل لنا رسالة واتساب بعنوانك وما تحتاجه. بدون نماذج." },
            { q: "هل تقدمون توصيل الأدوية؟", a: "نعم، نوصّل الأدوية من جميع صيدليات إفران." },
            { q: "ما هو وقت التوصيل؟", a: "30 دقيقة كحد أقصى داخل إفران. في أغلب الحالات، نوصّل بشكل أسرع." },
        ],
    };
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (faqs[locale as keyof typeof faqs] || faqs.fr).map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };
}
