import Card from "./Card";
import '../styles/Gallery.css';

const Gallery = ({ data }) => {
    return (
        <div className="kasa-gallery">
            {data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Gallery;