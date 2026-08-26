import './Rating.scss';

export default function Rating({ rating }) {
  const stars = [0, 1, 2, 3, 4];

  return (
    <>
      <div className="rating-container">
        {stars.map((index) => (
          <img
            key={index}
            className="star"
            src={
              index < rating ? '../src/assets/rate_star_active.svg' : '../src/assets/rate_star.svg'
            }
          ></img>
        ))}
      </div>
    </>
  );
}
