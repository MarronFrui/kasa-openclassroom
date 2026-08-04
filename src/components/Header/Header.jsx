import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo">Kasa</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="../About/About.jsx" className="nav-link">
            About
          </Link>
          <Link to="/employees" className="nav-link">
            Employés
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
