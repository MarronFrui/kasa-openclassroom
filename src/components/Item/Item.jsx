import Collapse from '../Collapse/Collapse';
import { useParams } from 'react-router';
import properties from '../../data/data.json';

export default function Item() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === id);
  return (
    <>
      <img src={property.cover}></img>
      <div>{property.title}</div>
      <div>Placeholder location</div>
      <div>Placeholder rating</div>
      <Collapse title="Description" list={['qsd']}></Collapse>
      <Collapse title="Equipements" list={['qsd']}></Collapse>
    </>
  );
}
