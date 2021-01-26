// function startup(){
//     console.log("page loaded")
// }
// startup()
// function add(n1: number, n2: number) {
//     return n1 + n2
// }
// const num1 = 5
// const num2 = 10
// const toggle = false
// //const result = add(num1, num2)
// function add1(n1: number, n2: number, t: boolean) {
//     if (t){
//         return n1 + n2
//     } else {
//         console.log(n1 + n2)
//     }
// }
// add1(num1, num2, toggle)
var Sean = {
    name: "Sean",
    age: 26,
    role: [2, 'programmer']
};
var seanTyped = {
    name: "Sean",
    age: 26,
    hobbies: ['reading', 'gaming'],
    role: [1, 'programmer']
};
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
var Role;
(function (Role) {
    Role[Role["a"] = 0] = "a";
    Role[Role["b"] = 1] = "b";
    Role[Role["c"] = 2] = "c";
})(Role || (Role = {}));
//will assign a number to these variables by default but you can also assign values as well
//console.log(Role.a)
console.log(seanTyped.role);
//console.log(product.tags)
//when you see data typed with an array next to it like test: string[] it means 'array of strings'
// test: any[] means you can have any data type in the array
// test1: [string, number] TUPLE --> use to specify what data types, where in the array, and the amount of elements
//Union type
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var returned = combine(30, 'Anna');
console.log(returned);
