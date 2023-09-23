import Card from "./Card";
import Classes from '../../styles/home/Gallery.module.css';
import data from '../../data/logements.json';

const Gallery = () => {
    return (
        <div className={Classes.kasaGallery}>
            {data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Gallery;