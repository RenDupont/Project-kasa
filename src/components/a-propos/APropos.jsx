import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';
import Values from './Values';
import Classes from '../../styles/a-propos/APropos.module.css'
import Image from '../../assets/IMG.png'

function APropos() {
    return (
        <div className={Classes.kasaAPropos}>
            <Header />
            <Banner message={''} image={Image} />
            <Values />
            <Footer />
        </div>
    );
}

export default APropos;