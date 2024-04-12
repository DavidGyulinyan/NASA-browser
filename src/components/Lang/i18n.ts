import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getCurrentLang = (): string => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
        return savedLang;
    } else {
        return "am";
    }
};


i18n
    .use(initReactI18next)
    .init({
        lng: getCurrentLang(),
        interpolation: {
            escapeValue: false,
        },
        resources: {
            am: {
                translation: {
                    title: "Դիտարկիչ",
                    apod: "Օրվա աստղագիտական ​​լուսանկարը",
                    nearbast: "Մոտակա աստերոիդներ",
                    newplanet: "Ներկայացրել նոր մոլորակ"
                },
            },
            en: {
                translation: {
                    title: "Browser",
                    apod: "Astronomy photo of the day",
                    nearbast: "Near by asteroids",
                    newplanet: "Submit New Planet"
                },
            },
            ru: {
                translation: {
                    title: "Браузер",
                    apod: "Астрономическое фото дня",
                    nearbast: "Близлежащие астероиды",
                    newplanet: "Отправить новую планету"
                },
            },
        },
    });

export default i18n;
