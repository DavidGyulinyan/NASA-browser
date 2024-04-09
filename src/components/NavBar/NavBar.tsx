import { Link } from "react-router-dom"

const NavBar = () => {
    const navItems: { id: number, title: string, path: string }[] = [
        {
            id: 1,
            title: "Astronomy photo of the day",
            path: "astronomy_photo_of_the_day"
        },
        {
            id: 2,
            title: "Nearby Asteroids",
            path: "near_by_asteroids"
        },
        {
            id: 3,
            title: "Submit New Planet",
            path: "new_planets"
        },
    ]
    return (
        <nav className="w-full h-20 mt-3 flex justify-around items-center gap-5 max-lg:flex-wrap bg-blue-800">
            {
                navItems.map(item =>
                    <div className="text-white text-center font-bold text-3xl max-xl:text-xl cursor-pointer" key={item.id}>
                        <Link to={item.path}> 
                        {
                            item.title
                        }
                        </Link> 
                    </div>
                    )
            }

        </nav>
    )
}

export default NavBar
