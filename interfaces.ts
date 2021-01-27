interface Person {
    name: string;
    age: number;

    greet(phrase: string): void
}
//interfaces describe the structure of an object
//cannot assign values to any properties
//cannot write implementations for methods

//interfaces are used to check an object (not a class) has the correct structure

//interfaces and custom types are similar but different in...
    //interfaces can only describe objects, type is more flexible
    //interfaces is better with objects than custom typing
    //interfaces can be implemented by a class/classes in a way similar to abstract classes 


let user1: Person;

user1 = {
    name: 'Sean',
    age: 26,
    greet(phrase: string){
        console.log('whatsup' + phrase)
    }
}


interface  Greetable {
    //readonly name: string;
    //implements readonly--->prop can be set once but cannot be changed after
    
    greet(phrase: string): void;
}

interface Named extends Greetable {
    readonly name: string;
}
//interfaces can extend other interfaces which makes deciding which interfaces have what properties easier


class Human implements Named {
    //name?: string
    //'?' in an interface or class marks it as an optional property, for classes ? will be used in constructor to be used most effectively
    name: string
    age: number

    constructor(n: string, age: number ){
        this.name = n
        this.age = age
        
    }

    greet(phrase: string){
        console.log('whatsup' + phrase)
    }
    // class can have properties or methods that are more than what is specified in the interface but anything the interface specifies must be in the class
}
//console.log(user1.greet(' bro'))

//Interfaces as Function Type
interface AddFn {
    (a: number, b: number): number;
    //function acts as anonymous function within interface
}

let sum: AddFn;

sum = (n1: number, n2: number) => {
    return n1 + n2
}

//console.log(sum(1,2))