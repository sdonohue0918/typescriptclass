function Logger(target: Function){
    console.log('logging')
    console.log(target)
}




//@ symbol is the identifier for ts compiler, the string after it points to a function which serves as the decorator
//decorators receiver arguments

@Logger()
class Person {
    name = 'Sean'

    constructor(){
        console.log('creating object...')
    }


}

const pers = new Person()
console.log(pers)