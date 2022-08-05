//implicit binding

var country = {
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
var Person1 = function (name, age) {
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
var Person2 = function (name, age) {
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
var printName1 = function () {
  return this.name;
};

var Rahim = {
  name: "Rahim",
  age: 25,
};

console.log(printName1.call(Rahim));

//explicit binding

var v11 = "Kind";
var v21 = "Honest";
var v31 = "Hard Working";

var printName2 = function (v1, v2, v3) {
  return `${this.name} is ${v1} , ${v2} and ${v3}`;
};

var Rahim = {
  name: "Rahim",
  age: 25,
};

console.log(printName2.call(Rahim, v11, v21, v31));

//explicit binding
//@apply
var v10 = "Kind";
var v20 = "Honest";
var v30 = "Hard Working";

var printName3 = function (v1, v2, v3) {
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
var v1 = "Kind";
var v2 = "Honest";
var v3 = "Hard Working";

var printName = function (v1, v2, v3) {
  return `${this.name} is ${v1} , ${v2} and ${v3}`;
};

var Rahim = {
  name: "Rahim",
  age: 25,
};

var v = [v1, v2, v3];
var newFun = printName.bind(Rahim, v1, v2, v3);
console.log(newFun());

//new binding like class methods

var Person = function (name, age) {
  this.name = name;
  this.age = age;
  return `${name} is ${age} years old`;
};

var sakib = new Person("Sakib", 25);

console.log(sakib());

//Window binding
var printName = function () {
  return this.name; //undefined `refers to window object`
};

console.log(printName());

("use strict");

var printName = function () {
  console.log(this); //undefined error message this is undefined`
  return this.name;  //undefined `refers to window object`
};

console.log(printName());


//without ("use strict");
var printName = function () {
  console.log(window === this); // returns true
  return this.name;  //undefined
};

console.log(printName());
