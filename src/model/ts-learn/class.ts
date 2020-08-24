class CuteAnimal {
  name: string = 'CuteAminal';
  hairColor: string;
  food: string;
  constructor(name: string, hairColor: string, food: string) {
    this.name = name;
    this.hairColor = hairColor;
    this.food = food;
  }
  active() {
    return this.name + '的毛发是' + this.hairColor + '的,喜欢吃' + this.food;
  }
  move(val: number = 0) {
    console.log('一气呵成,跑' + val + '米');
  }
}

let bigDog = new CuteAnimal('金毛狗狗', '棕色', '肉肉');
console.log(bigDog.active());

class Bird extends CuteAnimal {
  color: string;
  constructor(name: string, hairColor: string, food: string, color: string) {
    super(name, hairColor, food);
    this.color = color;
  }
  skill() {
    console.log(this.hairColor);
    return '还可以翱翔在天空上!';
  }
  //   move(val: number = 100) {
  //     super.move(val);
  //   }
}
let bird = new Bird('鸟', '彩色', '虫子', '蓝色');
console.dir(bird);
console.log(bird.skill());
console.log(bird.active());
bird.move();
