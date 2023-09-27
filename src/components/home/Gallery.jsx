import Card from "./Card";
import Classes from '../../styles/home/Gallery.module.css';
import data from '../../data/logements.json';
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <div className={Classes.kasaGallery}>
            {data.map((item) => (
                <Link to={`Logement/${item.id}`} key={item.id}>
                    <Card key={item.id} item={item} />
                </Link>
            ))}
        </div>
    );
};

export default Gallery;