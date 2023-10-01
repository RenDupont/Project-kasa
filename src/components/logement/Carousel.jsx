import { useState } from "react";
import ArrowNext from '../../assets/chevron-right-solid.svg';
import ArrowBack from '../../assets/chevron-left-solid.svg';
import Classes from '../../styles/logement/Carousel.module.css';

function Carousel({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousImage = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
     };
      
    const goToNextImage = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className={Classes.KasaCarousel}>
            <img onClick={goToPreviousImage} className={Classes.KasaCarousel_previous} src={ArrowBack} alt="previous"></img>
            <img className={Classes.KasaCarousel_cover} src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            <img onClick={goToNextImage} className={Classes.kasaCarousel_next} src={ArrowNext} alt="next"></img>
        </div>
    );
}

export default Carousel;