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
