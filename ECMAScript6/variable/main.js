

(function () {
    function Genre(name) {
        this.name = name;
    }


    Genre.prototype.getData = function () {
        let acronym = name.charAt(0) + name.charAt(name.length - 1);
        return acronym.toUpperCase();
    }


    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre.name;
        this.length = length;
    }
    
    Movie.prototype.getData = function () {
        return `${this.title}, ${this.length}min, ${this.genre}`;

    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.totalMovieNumber = 0;
    }

    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.totalMovieNumber++;
    }

    Program.prototype.getData = function () {
        let programLength = 0;
        let moviesData = "";
        this.listOfMovies.forEach(function (movie) {
            programLength += movie.length;
            moviesData += `${movie.getData()}
         `;
        })

        return `${this.date}, ${programLength}min, 
         ${moviesData}`;
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.totalProgramNumber = this.listOfPrograms.length;

    }
    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }
    Festival.prototype.getData = function () {
        let allMoviesNumber = 0;
        let allProgramsData = "";
        this.listOfPrograms.forEach(function (program) {
            allMoviesNumber += program.totalMovieNumber;
            allProgramsData +=`${program.getData()}  
        `;
        })
        return `${this.name} festival has ${allMoviesNumber} movie titles 
    ${allProgramsData}`;
    }



    const action = new Genre("action");
    const drama = new Genre("drama");
    const movie1 = new Movie("Birdman", action, 130);
    const movie2 = new Movie("Spiderman", drama, 200);
    const movie3 = new Movie("Mary and Max", drama, 200);
    const prog1 = new Program("21 Feb 2018");
    const prog2 = new Program("22 Feb 2018");
    const festival = new Festival("Weekend");

    prog1.addMovie(movie1);
    prog1.addMovie(movie2);
    prog1.addMovie(movie3);
    prog2.addMovie(movie1);

    festival.addProgram(prog1);
    festival.addProgram(prog2);
    console.log(festival.getData());








})();