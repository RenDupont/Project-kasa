import logo from '../../assets/LOGO.svg';
import Classes from '../../styles/logement/Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={Classes.kasaHeader}>
            <img src={logo} alt='Kasa'></img>
            <div className={Classes.kasaHeader_nav}>
                <Link to='/'>Accueil</Link>
                <Link to='/APropos'>A Propos</Link>
            </div>
        </div>
    );
}

export default Header;