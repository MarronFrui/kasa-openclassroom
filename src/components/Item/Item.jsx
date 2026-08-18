import Collapse from '../Collapse/Collapse';
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
        <div className="title">{property.title}</div>
        <div>{property.location}</div>
        <div>Placeholder rating</div>
        <Collapse title="Description" list={[property.description]} />
        <Collapse title="Equipements" list={property.equipments} />
      </section>
    </>
  );
}
