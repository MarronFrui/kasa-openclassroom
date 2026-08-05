import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="../src/assets/logo.svg" />
        <nav className="nav">
          <Link to="/" className="nav-link">
            ACCUEIL
          </Link>
          <Link to="../About/About.jsx" className="nav-link">
            A PROPOS
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
