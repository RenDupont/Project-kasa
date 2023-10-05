import Classes from '../styles/Banner.module.css';

function Banner({message, image}) {
    return (
        <div className={Classes.kasaBanner}>
            <img src={image} alt='Banner' />
            <p>{message}</p>
        </div>
    );
}

export default Banner;