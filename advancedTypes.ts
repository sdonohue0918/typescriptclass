//Intersection Types
//allow you to combine different types

type Admin = {
    name: string;
    privileges: string[];

};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
//the actual intersection type

const e1: ElevatedEmployee = {
    name: 'Sean',
    privileges: ['level 3', 'analyst'],
    startDate: new Date()
}

//Intersection Types
//allow you to combine different types


type Combine = string | number;
type Numeric = number | boolean;

type Universal = Combine & Numeric

//Type Guards

function add3(a: Combine, b: Combine){
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    } else {
        return a + b
    }

    //the above conditional is a type guard; it takes advantage of the flexibility of union types
    
}

type Unknown = Employee | Admin

function printInfo(emp: Unknown){
    console.log('Name: ' + emp.name)

    if('privileges' in emp) {

        console.log('Privileges: ' + emp.privileges)
    }

    if ('startDate' in emp) {
        console.log('start date: ' + emp.startDate)
    }
}

//printInfo(e1)

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving...')
    }

    cargoLoad(amount: number){
        console.log('Loading cargo...' + amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle){
    vehicle.drive()
    if ('cargoLoad' in vehicle){

        vehicle.cargoLoad(34)
    }

    //can also use if(vehicle instanceof Truck){} if you are working with classes ONLY
}

//Discriminated Unions

interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    groundSpeed: number


}

type Animal = Bird | Horse 

//there is one common property in each object which makes up the union, the property can be used in the below function to type check; this is useful for working with objects, union types, and interfaces

function moveAnimal(animal: Animal){
    let speed
    
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break
        case 'horse':
            speed = animal.groundSpeed;
    }

    console.log('Moving with speed: ' + speed)   
}

//moveAnimal({type: 'horse', groundSpeed:25})

//Type Casting

//Type casting can allow typescript to recognize what type of specific HTML element is being worked with instead of it just recognizing a generic HTML element

const paragraph = document.getElementById('message-output') 
//const ui = document.getElementById('user-input')
const input = <HTMLInputElement>document.getElementById('user-input')
//can also do it like
const secondInput = document.getElementById('second-input')! as HTMLInputElement
//! means that your telling typescript the expression in front of it  will not be null
input.value = 'Wasssssssup'


//Index Properties --> created objects that are flexible as to which properties they might hold

interface ErrorContainer{
    
    //if this is meant to fleixble it cannot be restricted to just a few fields
    [prop: string]: string;
    //index types defined by square brackets, cant use booleans for properties
    //semantics if 145 say that we dont have a name/count for props but that every property added to object must have a name as string and a value that is string
}

const curErrorMessages: ErrorContainer = {
    email: 'not a valid email address',
    username: 'username already taken'
}

//Function Overloads ---> allows defining multiple function signatures for one function (multiple ways of calling a fuction accepting different parameters)

//line 159&160 is the overload function
function add4(a: number, b:number): number
function add4(a:string, b:string): string
function add4(a: number, b:string): string
function add4(b: string, a:number): string
function add4(a: Combine, b: Combine) {
    if (typeof a === 'string' || typeof b ==='string'){
        return a.toString() + b.toString()
    } else {
        return a + b
    }
}

//OPtional Chaining --->

const fetchedData = {
    id: 'u1',
    name: 'sean',
    job: {
        title: 'programmer',
        description: 'front-end engineer'
    }
}

//can add '?' after an object before dot notation
console.log(fetchedData?.job?.description)

//what this is doing is allowing compiler to run without producing a runtime error, useful for accessing nested properties; if something is undefined (thing in front of ?) it will not access it and will not throw a runtime error

//Nullish Coalescing--> use if you dont know data is null or undefined only

const userInp = null;

//const storedData = userInp || 'Default value if userInp is not present in fetched data'

//ts way of nullish colaescing

const storedData = userInp ?? 'DEFAULT';

