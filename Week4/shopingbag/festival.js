'use strict';
(function () {
    console.log('Weekend festival has 4 movie titles:');



    function Genre(name) {
        this.name = name

        this.getData = function () {
            var firstLetter = name.charAt(0);
            var lastLetter = name.charAt(name.length - 1)
            var result = firstLetter + lastLetter
            return result.toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        this.title = title
        this.genre = genre
        this.length = length

        this.getData = function () {
            return this.title + ", " + this.length + "min. " + this.genre.getData()
        }
    }

    function Program(date, movieList, numOfMovies) {
        this.date = new Date('28/10/2017')
        this.movieList = [];
        this.numOfMovies = numOfMovies
        this.addMovie = function (movie) {
            this.movieList.push(movie)
        }

        this.getNumOfMovies = function () {
            return this.movieList.length;
        };

        this.getProgramLength = function () {
            var length = 0;
            for (var i = 0; i < this.movieList.length; i++) {
                var movie = this.movieList[i];
                length += movie.length

            }
            return length;
        }

        this.getData = function () {
            var output = '';
            var myDate = this.date.getFullYear();
            output += myDate + 'festival duration' + this.getProgramLength() + 'min\n'
            for (var i = 0; i < this.movieList.length; i++) {
                var movie = this.movieList[i];
                output += '\t' + movie.getData() + '\n';

            }
            return output;
        }



        // Movie.getData = function () {
        //return this.date + ", " + "program duration" + ", " + function muviesLen ()

        //(mov1.length + mov2.length)



    }





    var gen1 = new Genre('omnibus');
    var gen2 = new Genre('Action');
    var gen3 = new Genre('Drama');


    var mov1 = new Movie("Relatos Salvajes", gen1, 133);
    console.log(mov1.getData());
    var mov2 = new Movie("Supermen", gen2, 133);
    console.log(mov2.getData());
    var mov3 = new Movie('Muke Isusove', gen3, 99);
    console.log(mov3.getData());


    var program1 = new Program('2008');
    program1.addMovie(mov1)
    program1.addMovie(mov2)
    console.log(program1.movieList);
    console.log(program1.getNumOfMovies());

    console.log(program1.getData());





})()