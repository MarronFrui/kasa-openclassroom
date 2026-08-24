import './Profil.scss';

export default function Profil({ picture, name }) {
  return (
    <>
      <div className="profil-container">
        <div className="profil-name">{name}</div>
        <img className="profil-picture" src={picture}></img>
      </div>
    </>
  );
}
