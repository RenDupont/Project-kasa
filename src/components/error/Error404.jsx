import Header from '../Header';
import Footer from '../Footer';
import Error404Message from './Error404Message';
import Classes from '../../styles/errorPage/Error404.module.css'

function Error404() {
    return (
        <section className={Classes.kasaErrorPage}>
            <Header />
            <Error404Message />
            <Footer />
        </section>
    );
}

export default Error404;