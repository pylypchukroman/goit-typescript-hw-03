class Key {
  constructor(private signature: number = Math.floor(Math.random() * 10)) {
    this.signature = signature;
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key = Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected key: Key = new Key();
  protected door: boolean = false;
  protected tenants: Person[] = [];

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor (key: Key);
}

class MyHouse extends House{

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse();
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
