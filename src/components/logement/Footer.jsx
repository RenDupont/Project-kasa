import logo from '../../assets/LOGO.svg';
import Classes from '../../styles/logement/Footer.module.css';

function Footer() {
    return (
        <footer className={Classes.kasaFooter}>
            <div>
                <img src={logo} alt='Kasa'></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;