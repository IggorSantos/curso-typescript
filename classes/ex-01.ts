class User {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  logDetails(): void{
    console.log(`O ${this.name} tem ${this.age} anos`)
  }
}

class Char extends User {
  nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number){
    super(name,age);
    this.nickname = nickname;
    this.level = level;
  }
}

const will = new User("Willian",40)
console.log(will)
will.logDetails()
const john = new Char("John",50,"johnmaster",80)
console.log(john)
