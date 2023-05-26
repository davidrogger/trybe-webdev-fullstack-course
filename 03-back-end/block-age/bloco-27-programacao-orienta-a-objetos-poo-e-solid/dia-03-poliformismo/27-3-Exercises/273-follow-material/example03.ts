interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
};

const db: DbCharacter[] = []

interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}

class LocalDbModel implements IModel {
  create = async (character: Character) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  update = async (id: number, character: Character) => {
    const newData = { id, ...character }
    const characterIndex = this.findIndex(id)
    db.splice(characterIndex, 1, newData);
    return newData
  }

  delete = async (id: number) => {
    const characterIndex = this.findIndex(id);
    if (characterIndex === - 1) return false;
    return true;
  }

  getAll = async () => {
    return db;
  }

  getById = async (id: number) => {
    const characterIndex = this.findIndex(id);
    return db[characterIndex];
  }

  findIndex(id: number): number {
    return db.findIndex((character) => character.id === id);
  }
}

class CharacterService {
  constructor(readonly model: IModel) {};

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return { status: 201, data: newCharacter };
  }

  async getAll() {
    const allCharacters = await this.model.getAll();
    return allCharacters;
  }
}

class MockedDbModel implements IModel {
  async create(character: Character) {
    return { id: 1, name: 'Kharmine', specialMove: 'teleport' };
  }

  async update (id: number, character: Character) {
    return { id: 1, name: 'Kharmine', specialMove: 'play Dead' };
  }

  async delete (id: number) {
    return true;
  }

  async getAll() {
    return [
      {id: 1, name: 'Kharmine', specialMove: 'play Dead'},
      {id: 2, name: 'Armin', specialMove: 'Cry'}
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Kharmine', specialMove: 'play Dead' };
  }

}
const localDb = new LocalDbModel();
const mockedDb = new MockedDbModel();
const db1 = new CharacterService(localDb);
const db2 = new CharacterService(mockedDb);