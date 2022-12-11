import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const detectionOptions = {
    order: ['navigator', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag', 'path', 'subdomain', 'querystring'],
    lookupQuerystring: 'lng',
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'],
}

const resources = {

        en: {
            translations: require('../locals/en/translation.json'),
            header: require('../locals/en/header.json'),
            home: require('../locals/en/home.json'),
            services: require('../locals/en/services.json'),
            products: require('../locals/en/products.json'),
            imidiwan: require('../locals/en/artists_imidiwan.json'),
            contact: require('../locals/en/contact.json'),
            footer: require('../locals/en/footer.json')
        },

        fr: {
            translations: require('../locals/fr/translation.json'),
            header: require('../locals/fr/header.json'),
            home: require('../locals/fr/home.json'),
            services: require('../locals/fr/services.json'),
            products: require('../locals/fr/products.json'),
            imidiwan: require('../locals/fr/artists_imidiwan.json'),
            contact: require('../locals/fr/contact.json'),
            footer: require('../locals/fr/footer.json')
        },

        ar: {
            translations: require('../locals/ar/translation.json'),
            header: require('../locals/ar/header.json'),
            home: require('../locals/ar/home.json'),
            services: require('../locals/ar/services.json'),
            products: require('../locals/ar/products.json'),
            imidiwan: require('../locals/ar/artists_imidiwan.json'),
            contact: require('../locals/ar/contact.json'),
            footer: require('../locals/ar/footer.json')
        }
}



i18next.use(LanguageDetector)
       .init({
            detection: detectionOptions,
            fallbackLng: 'en',
            resources,
            ns: ['translations', 'header', 'home', 'services', 'products', 'imidiwan', 'contact', 'footer'],
            defaultNS: 'translations',
            returnObjects: true,
            debug: process.env.NODE_ENV === 'development',
            interpolation: {
                escapeValue: false, // not needed for react!!
            },
            react: {
                wait: true,
            },
        });

i18next.languages = ['en', 'fr', 'ar'];

export default i18next;