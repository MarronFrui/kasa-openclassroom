import './Banner.scss';

export default function Banner() {
  return (
    <>
      <div className="banner-container">
        <img src="../../src/assets/banner_home.png" />
        <div className="banner-text">
          Chez vous,
          <br className="mobile-break" /> partout et ailleurs
        </div>
      </div>
    </>
  );
}
