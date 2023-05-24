class Fighter {
  _lifePoints: number;
  _strength: number;
  constructor(public _name: string) {
    this._lifePoints = 50;
    this._strength = 10;
  }

  attack(enemy: Fighter) {
    enemy._lifePoints = enemy._lifePoints - this._strength;
    console.log(`${this._name} attack with ${this._strength}| ${enemy._name} end with ${enemy._lifePoints}`);
  }

  gameShark() {
    this._strength += 10;
  }
}

const player1 = new Fighter('dvd');
player1.gameShark();
player1.gameShark();
player1.gameShark();
player1.gameShark();
const player2 = new Fighter('Jukas');
const player3 = new Fighter('Jerssu');

function runBattle(player: Fighter, monsters: Fighter[]) {
  let playerAlive = true;
  let enemiesAlive = true;
  while (playerAlive && enemiesAlive) {
    while (enemiesAlive) {
      const ableFighters = monsters
        .filter((fighter) => fighter._lifePoints > 0);
        const enimiesQuantity = ableFighters.length;
      enemiesAlive = enimiesQuantity !== 0 && playerAlive;
      if (enemiesAlive) {
        const playerTarget = Math.floor(Math.random() * (enimiesQuantity));
        for(let i = 0; i < enimiesQuantity; i += 1) {
          if (i === playerTarget) player.attack(ableFighters[i]);
          if (ableFighters[i]._lifePoints > 0) ableFighters[i].attack(player);
          playerAlive = player._lifePoints > 0;
          if (!playerAlive) i = enimiesQuantity;
        }
      }
    }
  }
  const allFigters = [player, ...monsters];
  const winners = allFigters.filter((fighter) => fighter._lifePoints > 0).map((fighter) => fighter._name);
  console.log(`Fight is over! Winner ${winners}`);
}

function round() {

}


runBattle(player1, [player2, player3]);