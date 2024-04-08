import nasaLogo from '../../assets/nasa_logo.svg'
import Lang from "../Lang/Lang"

const Header = () => {
    return (
        <header>
            <Lang/>
            <div className="top-head w-full flex justify-center">
                <img className="w-20 h-20" src={nasaLogo} alt="NASA-logo"/>
                <div className="text-3xl font-bold flex justify-center">NASA Browser</div>
            </div>
        </header>
    )
}

export default Header
