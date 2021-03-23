import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Searchbar from '../Searchbar/Searchbar';

const Header = () => {
  return (
    <header className="header shadow-lg">
      <div className="d-flex justify-content-around align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faDotCircle} className="header-icon shadow" />
          <h1 className="header-title d-none d-md-block">PokeFight</h1>
        </div>
        <Searchbar />
      </div>
    </header>
  );
};

export default Header;
