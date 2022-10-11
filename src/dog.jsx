import { animalFun } from "./features/animal";

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFn = {
  bark: () => <p>Barking...</p>,
};

Object.assign(dogFn, animalFun);
Object.assign(Dog.prototype, dogFn);

export default Dog;
