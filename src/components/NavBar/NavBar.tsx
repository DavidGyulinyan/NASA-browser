import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const { t } = useTranslation();

    const navItems: { id: number, titleKey: string, path: string }[] = [
        {
            id: 1,
            titleKey: "apod",
            path: "astronomy_photo_of_the_day"
        },
        {
            id: 2,
            titleKey: "nearbast",
            path: "near_by_asteroids"
        },
        {
            id: 3,
            titleKey: "newplanet",
            path: "new_planets"
        },
    ];

    return (
        <nav className="w-full min-h-20 mt-3 flex justify-around items-center gap-5 max-lg:flex-wrap bg-blue-800">
            {navItems.map(item =>
                <div className="text-white text-center font-bold text-3xl max-lg:text-lg max-xl:text-xl cursor-pointer" key={item.id}>
                    <Link to={item.path}>
                        {t(item.titleKey)}
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default NavBar;
