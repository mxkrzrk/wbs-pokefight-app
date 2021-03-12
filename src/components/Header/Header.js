import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header d-flex justify-content-center align-items-center shadow-lg">
      <FontAwesomeIcon icon={faDotCircle} className="header-icon shadow" />
      <h1 className="header-title">PokeFight</h1>
    </header>
  );
};

export default Header;
