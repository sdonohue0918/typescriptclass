function startup(){
    console.log("page loaded")
}

startup()

function add(n1: number, n2: number) {
    return n1 + n2
}

const num1 = 5
const num2 = 10
const toggle = false
//const result = add(num1, num2)

function add1(n1: number, n2: number, t: boolean) {
    if (t){
        return n1 + n2
    } else {
        console.log(n1 + n2)
    }
}

add1(num1, num2, toggle)