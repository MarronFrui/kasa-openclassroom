import { useState } from 'react';
import './Slideshow.scss';

export default function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="carousel-container">
        <img
          className="carousel-arrow"
          src="/src/assets/arrow_carousel_left.png"
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        ></img>
        <img className="image" src={images[currentIndex]}></img>
        <img
          className="carousel-arrow"
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
          src="/src/assets/arrow_carousel_right.png"
        ></img>
      </div>
    </>
  );
}
