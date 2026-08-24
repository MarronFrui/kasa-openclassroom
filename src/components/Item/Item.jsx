import Collapse from '../Collapse/Collapse';
import Tag from '../Tag/Tag';
import Rating from '../Rating/Rating';
import Profil from '../Profil/Profil';
import { useParams } from 'react-router';
import properties from '../../data/data.json';
import './Item.scss';

export default function Item() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === id);
  return (
    <>
      <section className="item-container">
        <img src={property.cover}></img>
        <section className="description-container">
          <div>
            <div className="title">{property.title}</div>
            <div className="location">{property.location}</div>
            <div className="tags">
              <Tag tags={property.tags}></Tag>
            </div>
          </div>
          <div className="social">
            <Rating rating={property.rating} />
            <div className="profil-pic">
              <Profil picture={property.host.picture} name={property.host.name}></Profil>
            </div>
          </div>
        </section>

        <Collapse title="Description" list={[property.description]} />
        <Collapse title="Equipements" list={property.equipments} />
      </section>
    </>
  );
}
