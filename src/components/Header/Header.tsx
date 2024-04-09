import nasaLogo from '../../assets/nasa_logo.svg'
import Nav from '../NavBar/NavBar'
import Lang from "../Lang/Lang"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Lang />
            <Link to='/'>
                <div className="w-full flex justify-center">
                    <img className="w-20 h-20" src={nasaLogo} alt="NASA-logo" />
                    <div className="text-3xl font-bold flex justify-center items-center">NASA Browser</div>
                </div>
            </Link>
            <Nav />
        </header>
    )
}

export default Header
