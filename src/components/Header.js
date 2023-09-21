import logo from '../assets/LOGO.svg';
import Classes from '../styles/Header.module.css';

function Header() {
    return (
        <div className={Classes.kasaHeader}>
            <img src={logo} alt='Kasa'></img>
            <div className={Classes.kasaHeader_nav}>
                <a href='#'>Accueil</a>
                <a href='#'>A Propos</a>
            </div>
        </div>
    );
}

export default Header;