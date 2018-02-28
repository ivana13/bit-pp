function Worker(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
}

Worker.prototype.getData = function () {
    return this.name + "," + this.surname;
}

Worker.prototype.getSalary = function () {
    return this.salary;
}

Worker.prototype.increaseSalary = function () {
    return this.salary *= 1.1;
}

function Employee(name, surname, specialization, salary) {
    Worker.call(this, name, surname, salary);
    this.specialization = specialization;
}

function Manager(name, surname, department, salary) {
    Worker.call(this, name, surname, salary);
    this.department = department;  
}

Employee.prototype = Object.create(Worker.prototype);
Employee.prototype.constructor = Employee;

Manager.prototype = Object.create(Worker.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    return this.department;
}

Employee.prototype.getSpecialization = function () {
    return this.specialization;
}
Manager.prototype.changeDepartment = function (changedDepartment) {
    return this.department = changedDepartment;
}




var sava = new Employee("sava", "jankovic", "cetnik", 120000);
var ljuba = new Manager ("ljuba", "trkulja", "Departman za balansiranje", 250000);



sava.increaseSalary();
console.log(sava.salary);


console.log(ljuba.getDepartment());

ljuba.increaseSalary();

console.log(ljuba.salary);
ljuba.changeDepartment("prestolonaslednik")

console.log(ljuba.department);

// function User(name) {
//     this.name = name;
// }

// User.prototype.printName = function () {
//     console.log(this.name);
// }

// var u = new User("Ivana");
// var u = new User("Ivana");
// var u = new User("Ivana");
// var u = new User("Ivana");
// var u = new User("Ivana");

// console.log(u);


