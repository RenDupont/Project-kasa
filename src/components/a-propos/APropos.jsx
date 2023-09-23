import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Values from './Values';
import Classes from '../../styles/a-propos/APropos.module.css'

function APropos() {
    return (
        <div className={Classes.kasaAPropos}>
            <Header />
            <Banner />
            <Values />
            <Footer />
        </div>
    );
}

export default APropos;