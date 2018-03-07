
var dataModule = (function(){

    function Movie (title, genre, length){
        this.title;
        this.genre;
        this.length;
    }
    Movie.prototype.getData = (function(){
        return this.title + ', ' + 'min. ' + this.genre;
    })
    


})();



var uaModule = (function(){
    

})();



var ctrlModule = (function(){


function setUpEventListeners(){
    document.querySelector('.create-movie').addEventListener('click', function(){
       
        
    })
}
return {
    init: function() {
        setUpEventListeners();
    }
}
})();