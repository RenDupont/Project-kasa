import logo from '../../assets/LOGO.svg';
import Classes from '../../styles/home/Footer.module.css';

function Footer() {
    return (
        <div className={Classes.kasaFooter}>
            <img src={logo} alt='Kasa'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;