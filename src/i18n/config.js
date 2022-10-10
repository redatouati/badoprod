import i18next from 'i18next';
import En from '../locals/en/translations.json'
import Fr from '../locals/fr/translations.json'
import Ar from '../locals/ar/translations.json'


i18next.init({
    resources: {
        en: {translations: En},
        fr: {translations: Fr},
        ar: {translations: Ar},
    },
    ns: ['translations'],
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