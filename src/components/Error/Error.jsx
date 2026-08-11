import { Link } from 'react-router-dom';
import './Error.scss';

export default function Error() {
  return (
    <>
      <section>
        <div className="Error">404</div>
        <div>La page que vous avez demander n'existe pas</div>
        <Link to="/" className="link">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </>
  );
}
