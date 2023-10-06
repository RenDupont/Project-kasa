import Banner from '../Banner';
import Header from '../Header';
import Gallery from './Gallery'
import Footer from '../Footer';
import Classes from '../../styles/home/Home.module.css'
import Image from '../../assets/IMG.png'

function index() {
    return (
        <div className={Classes.kasaApp}>
            <Header />
            <Banner message={'Chez vous, partout et ailleurs'} image={Image} />
            <Gallery />
            <Footer />
        </div>
    );
}

export default index;
