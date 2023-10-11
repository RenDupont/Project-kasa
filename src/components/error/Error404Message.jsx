import Classes from '../../styles/errorPage/Error404.module.css'
import { Link } from 'react-router-dom';

function Error404Message() {
    return (
        <div className={Classes.kasaErrorMessage}>
                <p>404</p>
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default Error404Message;