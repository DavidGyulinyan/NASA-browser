import { useTranslation } from "react-i18next";
import flagArm from '../../assets/flags/armenia.svg';
import flagEng from '../../assets/flags/united-states-of-america.svg';
import flagRus from '../../assets/flags/russia.svg';
import { LangProps } from '../../Models/LangPropsTypes';
import i18n from "./i18n";

const Lang = () => {
    const { t } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const langs: LangProps[] = [
        {
            id: 1,
            title: "Am",
            flag: flagArm,
            alt: "Flag of Armenia",
            language: "am"
        },
        {
            id: 2,
            title: "En",
            flag: flagEng,
            alt: "Flag of United States",
            language: "en"
        },
        {
            id: 3,
            title: "Ru",
            flag: flagRus,
            alt: "Flag of Russia",
            language: "ru"
        }
    ];

    return (
        <div className='langs w-[95%] max-lg:w-full flex justify-end items-end max-lg:justify-center max-lg:items-center gap-4 cursor-pointer'>
            {
                langs.map(lang =>
                    <div className="langs h-10 flex justify-center items-center gap-1" key={lang.id} onClick={() => changeLanguage(lang.language)}>
                        <img className='w-7 h-7' src={lang.flag} alt={lang.alt} />
                        <span>{t(lang.title)}</span>
                    </div>)
            }
        </div>
    );
}

export default Lang;
