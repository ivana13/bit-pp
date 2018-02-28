function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.length + " min"
}

document.querySelector(".create-movie").addEventListener("click", function (event) {
    createMovie();
})

function createMovie() {

    var title = document.querySelector("#movie-title").value;
    var length = document.querySelector("#movie-length").value;
    var select = document.querySelector("#genre-select");
    var genre = select.options[select.selectedIndex].text;

    var movie = new Movie(title, genre, length);
    document.querySelector(".m-list").innerHTML = "<p>" + movie.getData() + "<p>"
}

function Program(date) {
    this.date = date;
}

Program.prototype.getData = function () {
    return this.date;
}

document.querySelector("#create-date").addEventListener("click", function (event) {
    createProgram();
})

function createProgram() {
    var date = document.querySelector("#program-date").value;

    var programDate = new Program(date);
    document.querySelector(".d-list").innerHTML = "<p>" + programDate.getData() + "<p>"

}



