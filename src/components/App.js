import Background from './Background';
import Header from './Header';
import Gallery from './Gallery'
import Footer from './Footer';
import data from '../data/logements.json';
import '../styles/App.css';

function App() {
    return (
        <div className='kasa-app'>
            <Header />
            <Background />
            <Gallery data={data} />
            <Footer />
        </div>
    );
}

export default App;
