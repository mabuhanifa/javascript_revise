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
let Person = function (name, age) {
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
let printName = function () {
  return this.name;
};

var Rahim = {
  name: "Rahim",
  age: 25,
};

console.log(printName.call(Rahim));
