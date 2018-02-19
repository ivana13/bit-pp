function Person(firstname, surname, yearofbirth) {
    this.firstname = firstname
    this.surname = surname
    this.yearofbirth = yearofbirth
    this.fullname = firstname + " " + surname

    this.calculateage = function () {
        var date = new Date();

        return date.getFullYear() - this.yearofbirth;
    }
    this.yearsOld = function (fullDate) {
        var date = new Date(fullDate);

        console.log(date.getFullYear(), date.getMonth() + 1, date.getDay());
        
        
    }
}


var Dejan = new Person("Dejan", "Jurisic", 1990);
var ivana = new Person('Ivana', 'Ziv', 1990);
ivana.yearsOld("03/13/1990")

console.log(Dejan.fullname);
console.log(ivana.fullname);
console.log(Dejan.calculateage());
