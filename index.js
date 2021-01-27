//Intersection Types
//allow you to combine different types
var _a;
//the actual intersection type
var e1 = {
    name: 'Sean',
    privileges: ['level 3', 'analyst'],
    startDate: new Date()
};
//Type Guards
function add3(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
    //the above conditional is a type guard; it takes advantage of the flexibility of union types
}
function printInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('start date: ' + emp.startDate);
    }
}
//printInfo(e1)
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving...');
    };
    Truck.prototype.cargoLoad = function (amount) {
        console.log('Loading cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('cargoLoad' in vehicle) {
        vehicle.cargoLoad(34);
    }
    //can also use if(vehicle instanceof Truck){} if you are working with classes ONLY
}
//there is one common property in each object which makes up the union, the property can be used in the below function to type check; this is useful for working with objects, union types, and interfaces
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.groundSpeed;
    }
    console.log('Moving with speed: ' + speed);
}
//moveAnimal({type: 'horse', groundSpeed:25})
//Type Casting
//Type casting can allow typescript to recognize what type of specific HTML element is being worked with instead of it just recognizing a generic HTML element
var paragraph = document.getElementById('message-output');
//const ui = document.getElementById('user-input')
var input = document.getElementById('user-input');
//can also do it like
var secondInput = document.getElementById('second-input');
//! means that your telling typescript the expression in front of it  will not be null
input.value = 'Wasssssssup';
var curErrorMessages = {
    email: 'not a valid email address',
    username: 'username already taken'
};
function add4(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
//OPtional Chaining --->
var fetchedData = {
    id: 'u1',
    name: 'sean',
    job: {
        title: 'programmer',
        description: 'front-end engineer'
    }
};
//can add '?' after an object before dot notation
console.log((_a = fetchedData === null || fetchedData === void 0 ? void 0 : fetchedData.job) === null || _a === void 0 ? void 0 : _a.description);
//what this is doing is allowing compiler to run without producing a runtime error, useful for accessing nested properties; if something is undefined (thing in front of ?) it will not access it and will not throw a runtime error
//Nullish Coalescing--> use if you dont know data is null or undefined only
var userInp = null;
//const storedData = userInp || 'Default value if userInp is not present in fetched data'
//ts way of nullish colaescing
var storedData = userInp !== null && userInp !== void 0 ? userInp : 'DEFAULT';
