// interface BaseCharacter {
//   name: string;
//   talk(): void;
//   specialMove(): void;
// }

// class Character implements BaseCharacter {
//   constructor(private n: string) {
//     this.name = n;
//   }

//   get name(): string {
//     return this.n;
//   }

//   set name(value: string) {
//     this.n = value;
//   }

//   talk(): void { }

//   specialMove(): void { }
// }


// class MeleeCharacter extends Character {
//   constructor(name: string) {
//     super(name);
//   }

//   talk(): void {
//     console.log('I gonna punch your face mahuahuahuauh!')
//   }

//   specialMove(): void {
//     console.log('suppppppaaaaaa kickkkk! ups it was supose to be a punch :D')
//   }
// }

// class LongRangeCharacter extends Character {
//   constructor(name: string) {
//     super(name);
//   }
//   talk(): void {
//     console.log(`${this.name}: Distance is secure!`);
//   }
//   specialMove(): void {
//     console.log(`${this.name}: grabe this bullet!`);
//   }
// }

// function myFunc(character: Character) {
//   character.talk();
//   character.specialMove()
// }

// const ranger = new LongRangeCharacter('Ranger');
// const melee = new MeleeCharacter('PunchKicker');

// // myFunc(ranger)
// // myFunc(melee)

// console.log(ranger);