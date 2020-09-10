class Entity {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  // methods
  greet() {
    console.log(`Hi, I'm ${this.name} from Middle Earth!`);
  }
}
export default Entity;
