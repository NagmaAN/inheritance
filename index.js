

class Person {
  constructor(name, address, colony) {
    this.name = name;
    this.address = address;
    this.colony = colony;
  }
}

class Student extends Person {
  constructor(name, address, colony, grade) {
    super(name, address, colony);
    this.grade = grade;
  }
}
const x = new Student("Utkarsh", "Delhi", "Navanagr",15);
console.log(x);
