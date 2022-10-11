import { animalFun } from "./features/animal";

class Lion {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Lion.prototype, animalFun);

export default Lion;
