//implicit binding

let country = {
  name: "Bangladesh",
  area: "147570sqkm",
  capital: "Dhaka",
  countryName: function () {
    return this.name;
  },
};

console.log(country.countryName())