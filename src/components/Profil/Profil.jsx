import './Profil.scss';

export default function Profil({ picture, name }) {
  return (
    <>
      <div>
        <img src={picture}></img>
        <div className="profil-name">{name}</div>
      </div>
    </>
  );
}
