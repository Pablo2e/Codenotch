var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //metodos
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return (currentYear - parseInt(this.age));
    };
    //getter y setter
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Person;
}());
var juan = new Person("Juan", "28", "Via 2");
console.log(juan.age);
console.log(juan.yearOfBirth(2020));
console.log(juan.getAddress());
juan.setAddress("Gran Via 2");
console.log(juan.getAddress());
