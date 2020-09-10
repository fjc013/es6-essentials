import Entity from './entity';

class Hobbit extends Entity {
  constructor(name, height) {
    //refer to inherited class
    super(name, height);
  }
  // Localized method
  greet() {
    console.log(`Hi, I'm ${this.name} from the Shire!`);
  }
}
class Wizard {
  constructor(power_level) {
    this.power_level = power_level;
  }
  power() {
    console.log(this.power_level);
  }
}

let Frodo = new Hobbit("Frodo Baggins", 4.5);
// console.log(Frodo);
Frodo.greet();
//
let Gandalf = new Wizard(100);
Gandalf.power();
