import { Link } from 'react-router-dom';
import './Card.scss';

export default function Card({ id, title, cover }) {
  return (
    <>
      <div className="card">
        <Link to={`/item/${id}`} className="card-link">
          <img className="card-image" src={cover} alt="" width={100} height={100}></img>
          <p className="card-title">{title}</p>
        </Link>
      </div>
    </>
  );
}
