export const attack = (attacker, defender) => {
  const attack =
    attacker.player.attack +
    Math.floor(Math.random() * attacker.player.attack) -
    defender.player.defense;
  const realAttack = attack <= 0 ? 10 : attack;
  const damage = defender.player.hp - realAttack;
  if (damage <= 0) {
    return 0;
  } else {
    return damage;
  }
};

export const specialAttack = (attacker, defender) => {
  const attack =
    attacker.player.specialAttack +
    Math.floor(Math.random() * attacker.player.specialAttack) -
    defender.player.specialDefense;
  const realAttack = attack <= 0 ? 20 : attack;
  const damage = defender.player.hp - realAttack;
  if (damage <= 0) {
    return 0;
  } else {
    return damage;
  }
};

export const health = (attacker, max) => {
  if (attacker.player.hp <= 0) {
    return 0;
  } else if (attacker.player.hp >= max) {
    return max;
  } else {
    return attacker.player.hp + Math.floor(Math.random() * attacker.player.hp);
  }
};

export const checkVictory = (attacker, defender) => {
  if (attacker.player.hp === 0) return 2;
  if (defender.player.hp === 0) return 1;
  if (attacker.player.hp === 0 && defender.player.hp === 0) return 0;
};
