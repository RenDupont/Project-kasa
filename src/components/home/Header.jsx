import logo from '../../assets/LOGO.svg';
import Classes from '../../styles/home/Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={Classes.kasaHeader}>
            <img src={logo} alt='Kasa'></img>
            <div className={Classes.kasaHeader_nav}>
                <Link to='/'>Accueil</Link>
                <Link to='/'>A Propos</Link>
            </div>
        </div>
    );
}

export default Header;