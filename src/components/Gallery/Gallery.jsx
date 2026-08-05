import Card from '../Card/Card';
import properties from '../../data/data.json';

export default function Gallery() {
  return (
    <>
      {properties.map((property) => (
        <Card key={property.id} title={property.title} cover={property.cover} />
      ))}
    </>
  );
}
