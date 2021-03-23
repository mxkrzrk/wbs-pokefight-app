import './Won.css';
import { Fireworks } from 'fireworks/lib/react';

export default function Won({ onClickWon, winner }) {
  let dx = {
    y: 100,
    x: window.innerWidth / 2.4,
    count: 1,
    interval: 1000,
    colors: ['#ff0000', '#3b4cca', '#ffde00'],
  };
  let sx = {
    y: 100,
    x: window.innerWidth / 1.8,
    count: 1,
    interval: 1000,
    colors: ['#ff0000', '#3b4cca', '#ffde00'],
  };

  return (
    <div
      className="pokemon-won d-flex justify-content-center align-items-center"
      onClick={onClickWon}
    >
      <Fireworks {...dx} />
      <Fireworks {...sx} />
      <h2 className="pokemon-won-title">{winner} WON!!</h2>
    </div>
  );
}
