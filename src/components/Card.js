import '../styles/Card.css';

const Card = ({ item }) => {
    return (
        <div className="kasa-card">
            <img src={item.cover} alt={item.title}></img>
            <p>{item.title}</p>
        </div>
    );
};

export default Card;