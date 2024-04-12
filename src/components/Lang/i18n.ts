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
                    apod: "Օրվա աստղագիտական ​​լուսանկար",
                    apodTitle: "Ներմուծեք ամսաթիվը։ օրվա լուսանկար",
                    nearbast: "Մոտակա աստերոիդներ",
                    nearbastTitle: "Աստերոիդների որոնում ըստ Երկրին մոտենալու ամսաթվի:",
                    nearbastSubtitle: "Առավելագույն միջակայքը 7 օր",
                    startDate: "Մեկնարկի ամսաթիվ",
                    endDate: "Ավարտի ամսաթիվ",

                    asteroidName: "Անվանում",
                    asteroidDistance: "Հեռավորությունը(կմ)",
                    asteroidMagnitude: "Բացարձակ մեծություն",
                    asteroidDiameter: "Տրամագիծը(մ)",
                    asteroidHazardness: "Պոտենցիալ վտանգավոր",

                    newplanet: "Ներկայացրել նոր մոլորակ",
                    newPlanetTitle: "Եթե ​​գտնեք նոր մոլորակ, կարող եք այն ավելացնել մեր կատալոգում",
                    newPlanetName: "Մոլորակի անվանումը",
                    planetGalaxyName: "Գալակտիկայի անունը",
                    planetDiameter: "Տրամագիծը(կմ)",
                    planetDistance: "Հեռավորությունը(կմ)",
                    userName: "Ձեր անունը",
                    userEmail: "Էլ․ Հասցե",
                    submitButton: "Ուղարկել",
                    reqPlanetName: "Մոլորակի անունը պարտադիր է",
                    planetNameChar: "Մոլորակի անունը պետք է լինի առնվազն 5 նիշ",
                    reqGalaxyName: "Գալակտիկայի անունը պարտադիր է",
                    reqDiameter: "Տրամագիծը պետք է լինի դրական",
                    planetDiameterChar: "Տրամագիծը դաշտը պարտադիր է",
                    reqDistance: "Հեռավորությունը պետք է լինի դրական",
                    planetDistanceChar: "Հեռավորությունը դաշտը պարտադիր է",
                    reqUserName: "Ձեր անունը դաշտը պարտադիր է",
                    reqUserEmail: "Էլ․ Հասցե դաշտը պարտադիր է",
                    selectGalaxy: "Ընտրեք գալակտիկա...",
                    somewhereElse: "Մեկ այլ տեղ..."
                },
            },
            en: {
                translation: {
                    title: "Browser",
                    apod: "Astronomy photo of the day",
                    apodTitle: "Insert the date։ photo of the day",
                    nearbast: "Near by asteroids",
                    nearbastTitle: "Search for Asteroids based on their closest approach date to Earth.",
                    nearbastSubtitle: "Maximum range for 7 days",
                    startDate: "Start date",
                    endDate: "End date",

                    asteroidName: "Name",
                    asteroidDistance: "Distance(km)",
                    asteroidMagnitude: "Absolute Magnitude",
                    asteroidDiameter: "Diameter(m)",
                    asteroidHazardness: "Potential Hazardous",

                    newplanet: "Submit New Planet",
                    newPlanetTitle: "If you find a new planet, you can add it to our catalog",
                    newPlanetName: "Planet name",
                    planetGalaxyName: "Galaxy name",
                    planetDiameter: "Diameter(km)",
                    planetDistance: "Distance(km)",
                    userName: "Your name",
                    userEmail: "Email",
                    submitButton: "Submit",
                    reqPlanetName: "Planet name is required",
                    planetNameChar: "Planet name must be at least 5 characters",
                    reqGalaxyName: "Galaxy name is required",
                    reqDiameter: "Diameter must be positive",
                    planetDiameterChar: "The diameter field is required",
                    reqDistance: "Distance must be positive",
                    planetDistanceChar: "Distance is required",
                    reqUserName: "Your Name field is required",
                    reqUserEmail: "Email field is required",
                    selectGalaxy: "Select a galaxy...",
                    somewhereElse: "Somewhere else..."
                },
            },
            ru: {
                translation: {
                    title: "Браузер",
                    apod: "Астрономическое фото дня",
                    apodTitle: "Вставьте дату։ фото дня",
                    nearbast: "Близлежащие астероиды",
                    nearbastTitle: "Поиск астероидов по дате их наибольшего сближения с Землей.",
                    nearbastSubtitle: "Максимальный диапазон 7 дней",
                    startDate: "Дата начала",
                    endDate: "Дата окончания",
                    
                    asteroidName: "Имя",
                    asteroidDistance: "Расстояние(км)",
                    asteroidMagnitude: "Абсолютная величина",
                    asteroidDiameter: "Диаметр(м)",
                    asteroidHazardness: "Потенциально опасный",

                    newplanet: "Отправить новую планету",
                    newPlanetTitle: "Если вы найдете новую планету, вы можете добавить ее в наш каталог",
                    newPlanetName: "Название планеты",
                    planetGalaxyName: "Название галактики",
                    planetDiameter: "Диаметр(км)",
                    planetDistance: "Расстояние(км)",
                    userName: "Ваше имя",
                    userEmail: "Электронная почта",
                    submitButton: "Отправлять",
                    reqPlanetName: "Поле названия планеты обязательно",
                    planetNameChar: "Название планеты должно содержать не менее 5 символов.",
                    reqGalaxyName: "Поле названия галактики обязательно.",
                    reqDiameter: "Диаметр должен быть положительным",
                    planetDiameterChar: "Поле диаметра обязательно",
                    reqDistance: "Расстояние должно быть положительным",
                    planetDistanceChar: "Поле расстояния обязательно",
                    reqUserName: "Поле вашего имени обязательно",
                    reqUserEmail: "Поле электронной почты обязательно",
                    userEmailChar: "Invalid email address",
                    selectGalaxy: "Выберите галактику...",
                    somewhereElse: "Где-нибудь еще..."
                },
            },
        },
    });

export default i18n;
