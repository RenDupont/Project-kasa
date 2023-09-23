import Classes from '../../styles/home/Card.module.css';

const Card = ({ item }) => {
    return (
        <div className={Classes.kasaCard}>
            <img src={item.cover} alt={item.title}></img>
            <p>{item.title}</p>
        </div>
    );
};

export default Card;