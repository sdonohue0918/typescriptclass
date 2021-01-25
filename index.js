function startup() {
    console.log("page loaded");
}
startup();
function add(n1, n2) {
    return n1 + n2;
}
var num1 = 5;
var num2 = 10;
var toggle = false;
//const result = add(num1, num2)
function add1(n1, n2, t) {
    if (t) {
        return n1 + n2;
    }
    else {
        console.log(n1 + n2);
    }
}
add1(num1, num2, toggle);
