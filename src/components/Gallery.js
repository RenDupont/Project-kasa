import Card from "./Card";
import Classes from '../styles/Gallery.module.css';

const Gallery = ({ data }) => {
    return (
        <div className={Classes.kasaGallery}>
            {data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Gallery;