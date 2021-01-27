//interfaces describe the structure of an object
//cannot assign values to any properties
//cannot write implementations for methods
//interfaces are used to check an object (not a class) has the correct structure
//interfaces and custom types are similar but different in...
//interfaces can only describe objects, type is more flexible
//interfaces is better with objects than custom typing
//interfaces can be implemented by a class/classes in a way similar to abstract classes 
var user1;
user1 = {
    name: 'Sean',
    age: 26,
    greet: function (phrase) {
        console.log('whatsup' + phrase);
    }
};
//interfaces can extend other interfaces which makes deciding which interfaces have what properties easier
var Human = /** @class */ (function () {
    function Human(n, age) {
        this.name = n;
        this.age = age;
    }
    Human.prototype.greet = function (phrase) {
        console.log('whatsup' + phrase);
    };
    return Human;
}());
var sum;
sum = function (n1, n2) {
    return n1 + n2;
};
//console.log(sum(1,2))
