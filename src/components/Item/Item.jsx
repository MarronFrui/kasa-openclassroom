import Collapse from '../Collapse/Collapse';
import Tag from '../Tag/Tag';
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
            <div>{property.location}</div>
            <div>Placeholder rating</div>
            <div className="tags">
              <Tag tags={property.tags}></Tag>
            </div>
          </div>
          <div className="profil-pic">
            <div>profil pic placeholder</div>
          </div>
        </section>

        <Collapse title="Description" list={[property.description]} />
        <Collapse title="Equipements" list={property.equipments} />
      </section>
    </>
  );
}
