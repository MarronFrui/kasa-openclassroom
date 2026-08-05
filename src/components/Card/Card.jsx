import './Card.scss';
import data from '../../data/data.json';

export default function Card() {
  return (
    <>
      <div className="card">
        <p className="card-title">{data.id}</p>
      </div>
    </>
  );
}
