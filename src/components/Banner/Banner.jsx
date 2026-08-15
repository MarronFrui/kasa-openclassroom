import './Banner.scss';

export default function Banner({ image, text }) {
  return (
    <>
      <div className="banner-container">
        <img src={image} alt="Banner" />
        <div className="banner-text">{text}</div>
      </div>
    </>
  );
}
