import Classes from '../../styles/logement/Logement.module.css';
import Footer from './Footer';
import Header from './Header';
import LogementDetails from './LogementDetails';

function Logement() {
    return (
        <div className={Classes.kasaLogement}>
            <Header />
            <LogementDetails />
            <Footer />
        </div>
    );
}

export default Logement;