import './Card.scss';

export default function Card({ title, cover }) {
  return (
    <>
      <div className="card">
        <img className="card-image" src={cover} alt="" width={100} height={100}></img>
        <p className="card-title">{title}</p>
      </div>
    </>
  );
}
