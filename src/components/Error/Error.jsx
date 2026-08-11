import { Link } from 'react-router-dom';
import './Error.scss';

export default function Error() {
  return (
    <>
      <section>
        <div className="error">404</div>
        <div className="error-text">Oups! La page que vous demandez n'existe pas.</div>
        <Link to="/" className="link">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </>
  );
}
