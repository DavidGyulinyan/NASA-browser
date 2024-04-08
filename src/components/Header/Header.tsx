import nasaLogo from '../../assets/nasa_logo.svg'
import Lang from "../Lang/Lang"
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="top-head flex-center">
                <img src={nasaLogo} alt="NASA-logo"/>
                <div>NASA Browser</div>
            </div>
            <Lang/>
        </header>
    )
}

export default Header
