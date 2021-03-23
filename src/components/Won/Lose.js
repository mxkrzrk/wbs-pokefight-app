import './Won.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSkullCrossbones,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

export default function Lose({ onClickWon, winner, draw }) {
  return (
    <div
      className="pokemon pokemon-lose d-flex justify-content-center align-items-center"
      onClick={onClickWon}
    >
      {draw ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <FontAwesomeIcon className="pokemon-lose-icon" icon={faHandshake} />
          <h2 className="pokemon-title pokemon-lose-title">DRAW!!</h2>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <FontAwesomeIcon className="pokemon-lose-icon" icon={faSkullCrossbones} />
          <h2 className="pokemon-title pokemon-lose-title">{winner} LOSE!!</h2>
        </div>
      )}
    </div>
  );
}
