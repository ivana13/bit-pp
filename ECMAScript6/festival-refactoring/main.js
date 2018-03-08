class Genre {
    constructor(name) {
        this.name = name;
    }
    getData() {
        const acronym = this.name.charAt(0) + this.name.charAt(this.name.length - 1);
        return acronym.toUpperCase();
    }
}

class Movie{
constructor(title, genre, length) {
    this.title = title;
    this.genre = genre.getData();
    this.length = length;

}
getData(){
    return `${this.title}, ${this.length} min, ${this.genre}`;
}
}

class Program {
    constructor (date = new Date()){
        this.date = new Date (date);
        this.listOfMovies = [];
        this.totalMovieNumber = 0;

    }
addMovie (movie){
    this.listOfMovies.push(movie);
    this.totalMovieNumber++;
}
   
getData(){
    let programLength = 0;
    let moviesData = "";
    this.listOfMovies.forEach(movie => {
        programLength += movie.length;
        moviesData += `  ${movie.getData()}
        `;
    });
    return `${this.date}, ${programLength} min, 
    ${moviesData}`;
}
}

class Festival {
    constructor (name){
        this.name =name;
        this.listOfPrograms = [];
        this.totalProgramNumber = this.listOfPrograms.length;

    }
    addProgram (program) {
        this.listOfPrograms.push(program);
    }
    getData () {
        let allMoviesNumber = 0;
        let allMoviesData = "";
        this.listOfPrograms.forEach(program => {
            allMoviesNumber += program.totalMovieNumber;
            allMoviesData += `${program.getData()}
            `;
            
        })
        return `${this.name} festival has ${allMoviesNumber} movie titles
        ${allProgramData}`;
    }
}
const genre1 = new Genre ("Drama");
const movie1 = new Movie ("Agora", genre1, 134);
const movie2 = new Movie ("Birdman", genre1, 154);

console.log(movie1);


