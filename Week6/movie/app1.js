var dataModule = (function () {

    var movieList = []
    

 


})();
var dataModul = (function() {
    var data = {
        movieList: []
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }



Movie.prototype.getData = (function(){
    return this.title + ', ' + 'min. ' + this.genre;
})

var uiModul = (function () {

    function createMovie() {
        var titleElement = document.querySelector('.movie-title');
        var lengthElement = document.querySelector('.movie-length');
        var genreSelectElement = document.querySelector('.genre-select');
        var genreOptionElement = genreSelectElement.options[genreSelectElement.selectedIndex]
        var errorElement = document.querySelector('.movie-error');
        var moviesElement = document.querySelector('.movie-list');
        var moviesSelectElement = document.querySelector('.movie-select');

        var title = titleElement.value.trim();
        var length = parseInt(lengthElement.value.trim());
        var genre = genreOptionElement.value.trim();
    }

})();

var ctrlModul = (function () {
document.querySelector('create-movie').addEventListener('click', function(event){
    
})
})()