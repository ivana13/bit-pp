"use strict";

(function App() {

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function () {
       // return this.title + ", " + this.length + "min, " + this.genre.getData();
        return (`${this.title}, ${this.length} min, ${this.genre.getData()}`);
        
         
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
    }

    Program.prototype.getNumOfMovies = function () {
        //return this.listOfMovies.length;
        return (`${this.listOfMovies.length}`);
    }

    Program.prototype.getData = function () {
        let programDuration = 0;
        let movieList = "";

        this.listOfMovies.forEach (function(e){
            programDuration += e.length;
            movieList += (`  
            ${e.getData()}`)
        })

        //return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", program duration " + programDuration + "min" + movieList;
        return (`${this.date.getDate()}. ${(this.date.getMonth() + 1)}. ${this.date.getFullYear()}, program duration ${programDuration} min ${movieList}`);
    }
    
    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMoviesAllProgram = 0;
    }
    Festival.prototype.getData = function () {
        let festivalProgram = "";

        this.listOfPrograms.forEach (function(el){
            festivalProgram += el.getData();
            el.numOfMoviesAllProgram += `
            ${el.getNumOfMovies()}`;
        })
        //for (let i = 0; i < this.listOfPrograms.length; i++) {
           // festivalProgram += "\n\t" + this.listOfPrograms[i].getData();
           // this.numOfMoviesAllProgram += this.listOfPrograms[i].getNumOfMovies();
        //}
       // return this.name + " festival has " + this.numOfMoviesAllProgram + " movie titles" + festivalProgram;
       return (`${this.name} festival has ${this.numOfMoviesAllProgram} movie titles ${festivalProgram}`)
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }


    const action = new Genre("action");
    const drama = new Genre("drama");
    const comedy = new Genre("comedy");

    function createMovie(movieTitle, movieLength, genre) {
        return new Movie(movieTitle, genre, movieLength);
    }

    function createProgram(date) {
        return new Program(date);
    }

    const p1 = createProgram("28 Oct 2017");
    const p2 = createProgram("29 Oct 2017");

    const m1 = createMovie("Spider-Man: Homecoming", 133, action);
    const m2 = createMovie("War for the Planet of the Apes", 140, drama);
    const m3 = createMovie("The Dark Tower", 95, comedy);
    const m4 = createMovie("Shooter island", 108, comedy);

    const festival = new Festival("Weekend");

    p1.addMovie(m1);
    p1.addMovie(m2);
    p1.addMovie(m3);
    p2.addMovie(m4);

    festival.addProgram(p1);
    festival.addProgram(p2);

    console.log(festival.getData());
})();
