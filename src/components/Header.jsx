import logo from '../assets/LOGO.svg';
import Classes from '../styles/Header.module.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const Accueil = location.pathname === '/';
    const APropos = location.pathname === '/APropos';

    return (
        <header className={Classes.kasaHeader}>
            <img src={logo} alt='Kasa'></img>
            <nav className={Classes.kasaHeader_nav}>
                <Link className={`${Accueil ? Classes.kasaHeader_nav_activated : Classes.kasaHeader_nav_notActivated}`} to='/'>Accueil</Link>
                <Link className={`${APropos ? Classes.kasaHeader_nav_activated : Classes.kasaHeader_nav_notActivated}`} to='/APropos'>A Propos</Link>
            </nav>
        </header>
    );
}

export default Header;