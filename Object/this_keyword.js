//implicit binding

let country = {
  name: "Bangladesh",
  area: "147570sqkm",
  capital: "Dhaka",
  countryName: function () {
    return this.name;
  },
};
console.log(country.countryName());

//implicit binding

var printPersonName = function (obj) {
  obj.printName = function () {
    console.log(this.name);
  };
};

var Rahim = {
  name: "Rahim",
  age: 25,
};

var Karim = {
  name: "Karim",
  age: 22,
};

printPersonName(Rahim);
printPersonName(Karim);

Karim.printName();
Rahim.printName();

//implicit binding
let Person1 = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      return this.name;
    },
  };
};

var rahim = Person1("Rahim", 35);

console.log(rahim.printName());

//implicit binding
let Person2 = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      return this.name;
    },
    father: {
      name: "Abu Abdal",
      printName: function () {
        return this.name;
      },
    },
  };
};

var rahim = Person("Rahim", 35);

console.log(rahim.father.printName());

//explicit binding
let printName1 = function () {
  return this.name;
};

var Rahim = {
  name: "Rahim",
  age: 25,
};

console.log(printName1.call(Rahim));

//explicit binding

let v11 = "Kind";
let v21 = "Honest";
let v31 = "Hard Working";

let printName2 = function (v1, v2, v3) {
  return `${this.name} is ${v1} , ${v2} and ${v3}`;
};

var Rahim = {
  name: "Rahim",
  age: 25,
};

console.log(printName2.call(Rahim, v11, v21, v31));

//explicit binding
//@apply
let v10 = "Kind";
let v20 = "Honest";
let v30 = "Hard Working";

let printName3 = function (v1, v2, v3) {
  return `${this.name} is ${v1} , ${v2} and ${v3}`;
};

var Rahim = {
  name: "Rahim",
  age: 25,
};

var v = [v10, v20, v30];

console.log(printName.apply(Rahim, v));

//explicit binding
//@bind
let v1 = "Kind";
let v2 = "Honest";
let v3 = "Hard Working";

let printName = function (v1, v2, v3) {
  return `${this.name} is ${v1} , ${v2} and ${v3}`;
};

var Rahim = {
  name: "Rahim",
  age: 25,
};

var v = [v1, v2, v3];
var newFun = printName.bind(Rahim, v1, v2, v3);
console.log(newFun());

//new binding

let Person = function (name, age) {
  this.name = name;
  this.age = age;
  return `${name} is ${age} years old`;
};

var sakib = new Person("Sakib",25);

console.log(sakib());