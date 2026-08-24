import './Rating.scss';

export default function Rating(rating) {
  return (
    <>
      <div className="rating-container">
        <img className="star" src="../src/assets/rate_star.svg"></img>
        <img className="star" src="../src/assets/rate_star.svg"></img>
        <img className="star" src="../src/assets/rate_star.svg"></img>
        <img className="star" src="../src/assets/rate_star.svg"></img>
        <img className="star" src="../src/assets/rate_star.svg"></img>
      </div>
    </>
  );
}
