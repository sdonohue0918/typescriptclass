class Department {
    constructor(n, id) {
        this.employees = [];
        this.name = n;
        this.code = id;
    }
    //constructor method creates an instance of the class
    // constructor(private readonly n: string, public id: string ) {
    // }
    //can also be initialized like the above with access modifiers 
    //readonly can only be added in constructor and prevents that value from being modified by any class methods
    describe() {
        console.log('Department' + this.name);
    }
    //using the this parameter in ts is interpreted in ts as describing that this will be referring to an instance of the 'Department' Class which adds a layer of data security to the code
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const researchdevelopment = new Department('R&D', 'JhTTyajk');
//console.log(researchdevelopment)
//researchdevelopment.addEmployees('Sean')
//researchdevelopment.printInfo()
class ITDept extends Department {
    constructor(admins, reports) {
        super('IT', 'XjjiTcJ');
        this.admins = admins;
        this.reports = reports;
        this.admins = admins;
        this.reports = reports;
    }
    //super must be added to the constructor of any class that extends a parent class, super calls the constructor of the base class 
    //super must be called before using 'this' to declare specific properties
    addEmployees(name) {
        if (name !== 'doosh') {
            this.employees.push(name);
        }
        else {
            return;
        }
    }
    //this class method overrides the base class method with its own functionality, allowable and we can access employees data by using a protected access modifier flag on employees list in the base class
    addReport(report) {
        this.reports.push(report);
    }
    get lastReport() {
        if (this.reports.length === 0) {
            return;
        }
        else {
            return this.reports[this.reports.length - 1];
        }
    }
    set removeReport(reportNo) {
        if (this.reports[reportNo]) {
            this.reports.splice(reportNo, 1);
        }
        else {
            return;
        }
    }
    static createNotice(memo) {
        return memo;
    }
}
//Singleton Pattern --> ensuring that you can only have one instance of a class
//"strictPropertyInitialization": false
class AccountingDept extends Department {
    constructor() {
        super('Accounting', 'HjjtyR');
    }
    static getInstance() {
        if (AccountingDept.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDept();
            return this.instance;
        }
    }
}
const IT = new ITDept(['doosh', 'bag', 'leroy'], []);
IT.addEmployees('Dingus');
IT.addEmployees('bach');
IT.addReport('shitters clogged');
IT.addReport('HR blows');
IT.addReport('Hr sucks');
//IT.removeReport = 2
//setters take the parameter like the above; cant use method(param) syntax
//console.log(IT.lastReport)
//getters are called by classInst.methodName without ()
const message = ITDept.createNotice('we need to dev');
//console.log(message)
//console.log(IT)
const accountingDept = AccountingDept.getInstance();
const accountingAudits = AccountingDept.getInstance();
//console.log(accountingDept, accountingAudits)
//ON ABSTRACT CLASSES
// use abstract classes when you want derived classes to inherit methods that will have unique implementations 
//Abstract classes need to be extended by derived class, you cannot make instances of them
