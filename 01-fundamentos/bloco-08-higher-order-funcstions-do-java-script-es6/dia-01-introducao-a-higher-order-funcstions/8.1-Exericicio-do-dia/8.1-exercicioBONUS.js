const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const rawDmg = Math.floor(Math.random() * 15) + 1
  return rawDmg + dragon.strength;
}

const warriorDamage = () => {
  const rawDmg = Math.floor(Math.random() * warrior.strength) + 1;
  return rawDmg * warrior.weaponDmg;
}

const mageDamage = () => {
  if (mage.mana < 15) return 'Não possui mana suficiente';
  const rawDmg = (Math.floor(Math.random() * mage.intelligence) + 1) * 2;
  const manaCost = 15;
  mage.mana = mage.mana - manaCost;
  return { damage: rawDmg, manaCost: manaCost };  
}

const warriorAction = (dmg) => {
  warrior.damage = dmg();
  dragon.healthPoints = dragon.healthPoints - warrior.damage;  
}

const mageAction = (dmg) => {
  const mageAtk = dmg()
  mage.damage = mageAtk.damage;
  dragon.healthPoints = dragon.healthPoints - mage.damage
}

const dragonAction = (dmg) => {
  dragon.damage = dmg();
  warrior.healthPoints = warrior.healthPoints - dragon.damage;
  mage.healthPoints = mage.healthPoints - dragon.damage;  
}

const gameActions = {
  warriorTurn: warriorAction(warriorDamage),
  mageTurn: mageAction(mageDamage),
  dragonTurn: dragonAction(dragonDamage),
  turnResults: () => battleMembers,
};

console.log(gameActions.warriorTurn);

// ================GABARITO===================================

// const gameActions = {
//   warriorTurn: (warriorAttack) => {
//     const warriorDamage = warriorAttack(warrior);
//     warrior.damage = warriorDamage;
//     dragon.healthPoints -= warriorDamage;
//   },
//   mageTurn: (mageAttack) => {
//     const mageTurnStats = mageAttack(mage);
//     const mageDamage = mageTurnStats.damageDealt;
//     mage.damage = mageDamage;
//     mage.mana -= mageTurnStats.manaSpent;
//     dragon.healthPoints -= mageDamage;
//   },
//   dragonTurn: (dragonAttack) => {
//     const dragonDamage = dragonAttack(dragon);
//     mage.healthPoints -= dragonDamage;
//     warrior.healthPoints -= dragonDamage;
//     dragon.damage = dragonDamage;
//   },
//   turnResults: () => battleMembers,
// };

// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.dragonTurn(dragonAttack);
// console.log(gameActions.turnResults());