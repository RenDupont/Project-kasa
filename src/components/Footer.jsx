import logo from '../assets/LOGOFooter.svg';
import Classes from '../styles/Footer.module.css';

function Footer() {
    return (
        <footer className={Classes.kasaFooter}>
            <img src={logo} alt='Kasa'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;