(function () {
    function Genre(name) {
        this.name = name;
    }
    Genre.prototype.getData = function () {
        var acronym = name.charAt(0) + name.charAt(name.length - 1);
        return acronym.toUpperCase();
    }




    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre.name;
        this.length = length;
    }
    
    Movie.prototype.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre;

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
        var programLength = 0;
        var moviesData = "";
        this.listOfMovies.forEach(function (movie) {
            programLength += movie.length;
            moviesData += "\t\t" + movie.getData() + "\n";
        })

        return this.date + ", " + programLength + "min" + "\n" + moviesData;
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
        var allMoviesNumber = 0;
        var allProgramsData = "";
        this.listOfPrograms.forEach(function (program) {
            allMoviesNumber += program.totalMovieNumber;
            allProgramsData += "\t" + program.getData() + "\n";
        })
        return this.name + " festival has " + allMoviesNumber + " movie titles" + "\n" + allProgramsData;
    }



    var action = new Genre("action");
    var drama = new Genre("drama");
    var movie1 = new Movie("Birdman", action, 130);
    var movie2 = new Movie("Spiderman", drama, 200);
    var movie3 = new Movie("Mary and Max", drama, 200);
    var prog1 = new Program("21 Feb 2018");
    var prog2 = new Program("22 Feb 2018");
    var festival = new Festival("Weekend");

    prog1.addMovie(movie1);
    prog1.addMovie(movie2);
    prog1.addMovie(movie3);
    prog2.addMovie(movie1);

    festival.addProgram(prog1);
    festival.addProgram(prog2);
    console.log(festival.getData());








})();