import './Fights.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function CardFight({
  data,
  player,
  onClickAttack,
  opponent,
  onClickSpecialAttack,
  onClickHealth,
}) {
  return (
    <Card className="poke shadow align-self-stretch">
      <Card.Img
        variant="top"
        src={data.sprites.other.dream_world.front_default}
        className="poke-image mb-3"
      />
      <ProgressBar
        now={player.hp}
        max={data.stats[0].base_stat}
        variant="success"
        label={`${data.name}`}
        className="poke-progress"
      />
      <Card.Body>
        {!opponent && (
          <div className="d-flex justify-content-around align-items-center py-4">
            <Button className="poke-button" onClick={onClickAttack}>
              Attack
            </Button>
            <Button className="poke-button" onClick={onClickSpecialAttack}>
              Special Attack
            </Button>
            <Button className="poke-button" onClick={onClickHealth}>
              Health
            </Button>
          </div>
        )}
        <div>
          {data.stats.map((stat, index) => (
            <div
              key={index}
              className="d-flex justify-content-around align-items-center poke-list-item"
            >
              <div className="text-left w-50">
                {stat.stat.name.charAt(0).toUpperCase() +
                  stat.stat.name.slice(1)}
              </div>
              <div className="w-50">{stat.base_stat}</div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
