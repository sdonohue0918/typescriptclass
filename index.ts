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

const Sean = {
    name: "Sean",
    age: 26,
    role: [2, 'programmer']
    
}

const seanTyped: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
    

} = {
    name: "Sean",
    age: 26,
    hobbies: ['reading', 'gaming'],
    role: [1, 'programmer']
    
}

const product: {
    id: string;
    price: number;
    tags: string[],
    details: {
        title: string;
        description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

enum Role { a, b, c}
//will assign a number to these variables by default but you can also assign values as well
//console.log(Role.a)
console.log(seanTyped.role)
//console.log(product.tags)


//when you see data typed with an array next to it like test: string[] it means 'array of strings'
// test: any[] means you can have any data type in the array
// test1: [string, number] TUPLE --> use to specify what data types, where in the array, and the amount of elements

//Union type
function add(input1: number | string, input2: string | number){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    
    return result
}

const returned = add(30, 'Anna')

//console.log(returned)

//Literal type

function combine1(input1: number | string, input2: string | number, resultConver: 'asString' | 'asNumber'){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConver === 'asNumber') {
        result = +input1 +  +input2
    } else {
        result = input1.toString() + input2.toString()
    }

    if (resultConver === 'asNumber') {
         return +result
    } else {
        return result.toString()
    }
}
    

// const whatever = combine1('30', '50', 'asNumber')
// console.log(whatever)

//Type Aliases

type Combinable = number | string
type Conversion = 'asString' | 'asNumber'
//you use type (from ts) to give a name for custom type 

function combine2(input1: Combinable, input2: Combinable, resultConver: Conversion){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConver === 'asNumber') {
        result = +input1 +  +input2
    } else {
        result = input1.toString() + input2.toString()
    }

    if (resultConver === 'asNumber') {
         return +result
    } else {
        return result.toString()
    }
}
    
//Return Type

//assigned to the function to check for correct return value data type on compilation
function add2(inp1: number, inp2: number): number {
    return inp1 + inp2
}
// let test = add2(2,5)
// console.log(test)




//Return Type/Void Type
//a function with a void return type doesn't return any value, in other programming languages, undefined is what happens in vanilla js 
//also will compile if you do return something, making void flexible in cases where you may or may not want to return a value depending on the control flow
function printResult(num: number): void {
    console.log('Result: ' + num)


}
//printResult(add(3,4))


//Functions as Types
//() => creates a function type
let combineValues: (a: number, b: number) => number;
//this syntax/semant basically infers that combineValues can accept an assigned function  with params that are nums and that will return a number value, a function that is assigned that doesn't meet these specs will cause a compilation error 
combineValues = add2
//console.log(combineValues(3, 6))



//Unknown Type





//function types and callbacks

function addAndHandle(num1: number, num2: number, callback: (cbNum: number) => void) {
    const result = num1 + num2;
    callback(result)
}

addAndHandle(5,10, (result) => {
    console.log(result)
})

