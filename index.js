//Generics--->connected with another type and adds flexibility for defining incoming data
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//const names = ['sean', 'patrick']
var names = []; //array needs a specifier for the kind of data that the array will contain
function countAndPrint(element) {
    var desc = 'Received no value!';
    if (element.length === 1) {
        desc = 'got ' + element.length + '1 element';
    }
    else if (element.length > 1) {
        desc = 'got ' + element.length + ' elements';
    }
    return [element, desc];
}
//console.log(countAndPrint('Wassssssup'))
//if you pass in array ts assigns a length property to it and will count the number of elements, vs passing in a string which counts number of characters when length is assigned
//keyof constraint
function extractAndConvert(obj, key) {
    return 'Value ' + obj[key];
}
//console.log(extractAndConvert({name: 'max'}, 'name'))
//Generic Classes
//Generic class can be used if you don't care about what data is being stored in the class,  
var Store = /** @class */ (function () {
    function Store() {
        this.data = [];
    }
    Store.prototype.addItem = function (item) {
        this.data.push(item);
    };
    Store.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    Store.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return Store;
}());
var textStorage = new Store();
var numStorage = new Store();
function createCourse(title, description, completeUntil) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    //Partial turns courseGoal into an object type where the properties are optional
    return courseGoal;
}
var nameArr = ['Max', 'Anna'];
//ts compile knows that nameArr cannot be modified after init
//Note on Generics and Unions
//For data collections unions are more flexible in allowing different data types whereas generics allow you to lock into a data type for a use case
