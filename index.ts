//Generics--->connected with another type and adds flexibility for defining incoming data

//const names = ['sean', 'patrick']

const names: Array<string>= [] //array needs a specifier for the kind of data that the array will contain

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(()=>{

//         resolve('this is a string')
        
//     }, 2000)
//     reject('this is an error')
// })
//the above code block says that the variable 'promise' is typed as a Promise that will yield a string as a resolved value


//Generic function
// function merge<T, U>(obj1: T, obj2: U){
//     return Object.assign(obj1, obj2)
// }

//generic function here with ts compiler shows that the function output is the intersection between two different types; T & U are placeholders for specific types (in this case this function will only work if two objects are passed in )



//Constraints--->restricting the types the generic types can be based on 

// function merge2<T extends object, U extends object>(obj1: T, obj2: U){
//     return Object.assign(obj1, obj2)
// }

//Generic practice


interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string]{
    let desc = 'Received no value!'
    if (element.length === 1){
        desc = 'got ' + element.length + '1 element'
    } else if (element.length > 1){
        desc = 'got ' + element.length + ' elements'
    }
    return [element, desc]
}

//console.log(countAndPrint('Wassssssup'))
//if you pass in array ts assigns a length property to it and will count the number of elements, vs passing in a string which counts number of characters when length is assigned



//keyof constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value ' + obj[key]
}

//console.log(extractAndConvert({name: 'max'}, 'name'))




//Generic Classes

//Generic class can be used if you don't care about what data is being stored in the class,  
class Store<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new Store<string>()
const numStorage = new Store<number>()

//Generic Utility Types


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourse(title: string, description: string, completeUntil: Date) :CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = completeUntil
    //Partial turns courseGoal into an object type where the properties are optional
    return courseGoal as CourseGoal
}


const nameArr: Readonly<string[]> = ['Max', 'Anna']
//ts compile knows that nameArr cannot be modified after init

//Note on Generics and Unions
//For data collections unions are more flexible in allowing different data types whereas generics allow you to lock into a data type for a use case
