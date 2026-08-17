import './Banner.scss';

export default function Banner({ image, text, opacity }) {
  return (
    <>
      <div className="banner-container">
        <img src={image} alt="Banner" />
        <div className="banner-text" style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
          {text}
        </div>
      </div>
    </>
  );
}
