import logo from '../assets/LOGO.svg';
import Classes from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={Classes.kasaHeader}>
            <img src={logo} alt='Kasa'></img>
            <nav className={Classes.kasaHeader_nav}>
                <Link to='/'>Accueil</Link>
                <Link to='/APropos'>A Propos</Link>
            </nav>
        </div>
    );
}

export default Header;