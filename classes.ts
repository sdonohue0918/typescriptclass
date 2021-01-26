class Department {
    private name: string;
    protected employees: string[] = []
    //protected modifier allows the variable to be available in classes where it is extended 

    //these lines that look like k/v pairs are just fields for the class, can also set a default value to a field
    //a 'private' flag  in front of a field name means that the value is only available for operations within the class instance
    //you cannot do researchdevelopment.employees[...add]; you would need a method to do this
    private code: string;

    constructor(n: string, id: string) {
        this.name = n
        this.code = id
        
    }
    //constructor method creates an instance of the class

    // constructor(private readonly n: string, public id: string ) {

    // }

    //can also be initialized like the above with access modifiers 
    //readonly can only be added in constructor and prevents that value from being modified by any class methods

    describe(this: Department) {
        console.log('Department' + this.name)
    }
    //using the this parameter in ts is interpreted in ts as describing that this will be referring to an instance of the 'Department' Class which adds a layer of data security to the code

    addEmployees(employee: string) {
        this.employees.push(employee)
    }

    printInfo() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
    //abstract describe(this: Department): void 
    //if derived classes inherit this method the class has to be flagged as an abstract class
}

const researchdevelopment = new Department('R&D', 'JhTTyajk')
//console.log(researchdevelopment)

//researchdevelopment.addEmployees('Sean')
//researchdevelopment.printInfo()

class ITDept extends Department {
    
    
    
    constructor(public admins: string[], private reports: string[]){
        super('IT','XjjiTcJ')
        this.admins = admins
        this.reports = reports
    }

    //super must be added to the constructor of any class that extends a parent class, super calls the constructor of the base class 
    //super must be called before using 'this' to declare specific properties

    addEmployees(name: string){
        if (name !== 'doosh') {
            this.employees.push(name)
        } else {
            return 
        }
    }
    //this class method overrides the base class method with its own functionality, allowable and we can access employees data by using a protected access modifier flag on employees list in the base class
    
    
    addReport(report: string) {
        this.reports.push(report)
    }

    get lastReport() {
        if (this.reports.length === 0) {
            return
        } else {
            return this.reports[this.reports.length - 1]
        }
    }

    set removeReport(reportNo: number) {
        if (this.reports[reportNo]) {
            
            this.reports.splice(reportNo, 1)
        } else {
            return
        }
       
    }

    static createNotice(memo: string){
        return memo
    }
    //cannot use a static property on an instance 

    //describe(){
        //implementation of abstract class 
        //x----> console.log(this.name)
    //}

}


//Singleton Pattern --> ensuring that you can only have one instance of a class
//"strictPropertyInitialization": false
class AccountingDept extends Department{

    private static instance: AccountingDept
    
    
    private constructor() {
        super('Accounting', 'HjjtyR')
    }

    static getInstance() {
        if (AccountingDept.instance){
            return this.instance
        } else {
            this.instance = new AccountingDept()
            return this.instance
        }
    }
}


const IT = new ITDept(['doosh', 'bag', 'leroy'], [])
IT.addEmployees('Dingus')
IT.addEmployees('bach')
IT.addReport('shitters clogged')
IT.addReport('HR blows')
IT.addReport('Hr sucks')
//IT.removeReport = 2
//setters take the parameter like the above; cant use method(param) syntax
//console.log(IT.lastReport)
//getters are called by classInst.methodName without ()
const message = ITDept.createNotice('we need to dev')
//console.log(message)
//console.log(IT)
const accountingDept = AccountingDept.getInstance()
const accountingAudits = AccountingDept.getInstance()
//console.log(accountingDept, accountingAudits)

//ON ABSTRACT CLASSES
// use abstract classes when you want derived classes to inherit methods that will have unique implementations 
//Abstract classes need to be extended by derived class, you cannot make instances of them