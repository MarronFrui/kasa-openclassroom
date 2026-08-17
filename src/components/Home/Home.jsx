import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import './Home.scss';

export default function Home() {
  return (
    <>
      <Banner
        image="../../src/assets/banner_home.png"
        text={
          <>
            Chez vous,
            <br className="mobile-break" /> partout et ailleurs
          </>
        }
        opacity={0.5}
      />
      <section className="gallery-container">
        <Gallery />
      </section>
    </>
  );
}
