import Background from './Background';
import Header from './Header';
import Gallery from './Gallery'
import Footer from './Footer';
import data from '../data/logements.json';
import Classes from '../styles/App.module.css';

function App() {
    return (
        <div className={Classes.kasaApp}>
            <Header />
            <Background />
            <Gallery data={data} />
            <Footer />
        </div>
    );
}

export default App;
