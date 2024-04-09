import flagArm from '../../assets/flags/armenia.svg'
import flagEng from '../../assets/flags/united-states-of-america.svg'
import flagRus from '../../assets/flags/russia.svg'


const Lang = () => {
    const langs: { id: number, title: string, flag: string, alt: string }[] = [
        {
            id: 1,
            title: "Am",
            flag: flagArm,
            alt: "Flag of Armenia"
        },

        {
            id: 2,
            title: "En",
            flag: flagEng,
            alt: "Flag of United States"
        },

        {
            id: 3,
            title: "Ru",
            flag: flagRus,
            alt: "Flag of Russia"
        }
    ];
    return (
        <div className='langs w-[95%] max-lg:w-full flex justify-end items-end max-lg:justify-center max-lg:items-center gap-4 cursor-pointer'>
            {
                langs.map(lang =>
                    <div className="langs h-10 flex justify-center items-center gap-1" key={lang.id}>
                        <img className='w-7 h-7' src={lang.flag} alt={lang.alt} />
                        <span>{lang.title}</span>
                    </div>)
            }
        </div>
    );
}

export default Lang;
