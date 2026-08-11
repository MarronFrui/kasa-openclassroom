import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import './Home.scss';

export default function Home() {
  return (
    <>
      <Banner />
      <section className="gallery-container">
        <Gallery />
      </section>
    </>
  );
}
