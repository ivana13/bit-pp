class Person {
    constructor(name, surname){
this.name = name;
this.surname = surname;
    }
   
        
    printPersonData(){
        return `${this.name} ${this.surname}`
    }

}

const person1 = new Person ("Jelena", "Milosavljevic");
const person2 = new Person("Ivana", "Zivanovic");

class Programmer extends Person {

constructor (name, surname, languages = []) {
super(name, surname);
this.languages = languages;
}

printProgrammerData (){
    return `${this.name} ${this.surname} knows: ${this.languages}`
}
learnedNewLanguage (newLanguage){
    this.languages.push(newLanguage);
}
}

const programmer1 = new Programmer ("Jelena", "Milosavljevic", ["java", "c++", "javaScript", "Python"]);
const programmer2 = new Programmer ("Ivana", "Zivanovic", ["Ne zna jos uvek ni JavaScript."]);

console.log(programmer1.printProgrammerData());
//console.log(programmer2.printProgrammerData());
programmer2.learnedNewLanguage("js");
console.log(programmer2.printProgrammerData());





