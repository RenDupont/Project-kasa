import Background from './Background';
import Header from './Header';
import Gallery from './Gallery'
import Footer from './Footer';
import Classes from '../../styles/home/Home.module.css'

function index() {
    return (
        <div className={Classes.kasaApp}>
            <Header />
            <Background />
            <Gallery />
            <Footer />
        </div>
    );
}

export default index;
