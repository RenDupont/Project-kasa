import Classes from '../../styles/logement/StarRating.module.css'

const StarRating = ({ rating }) => {

    const ratingNumber = parseInt(rating);
    const normalizedRating = Math.min(5, Math.max(1, ratingNumber));
  
    return (
        <div className={Classes.kasaStarRating}>
            {[...Array(5)].map((star, index) => {
            const isRed = index < normalizedRating;
            return (
                <span key={index} className={isRed ? Classes.kasaStarRating_red : ''}>
                &#9733;
                </span>
            );
            })}
        </div>
    );
  };
  
  export default StarRating;
  