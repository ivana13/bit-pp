
"use strict";

(function(){

    function Country(name, odds, continent){
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
        this.currentDate = new Date();
        this.getData = function () {
            return this.name + " " + this.surname + ", " + this.dateOfBirth;
        }
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getData = function () {
            return  this.country.name + ", " + (this.betAmount * this.country.odds) + " eur" + ", " + this.person.name + " " + this.person.surname + ", " + (this.person.currentDate.getFullYear() - this.person.dateOfBirth.getFullYear()) + " years";
        }
    }

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getData = function () {
            return this.street + ", " + this.postalCode + " " + this.city + ", " + this.country;
        }
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
        this.getData = function () {
            return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", ";
        }

        this.addPlayer = function (player) {

            if(!player){
                throw new Error ("No new player added");
            }
            this.listOfPlayers.push(player);
        }

        this.houseBetAmount = function(){
            var houseBetAmount = 0;
            this.listOfPlayers.forEach(function(element){
                houseBetAmount += element.betAmount;
            })
            return houseBetAmount;
        }
    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];   
        this.addBettingPlaces = function (bettingPlace) {
            this.listOfBettingPlaces.push(bettingPlace);
        }

        this.betsCounter = function () {
            var numberOfPlayers = 0;
            this.listOfBettingPlaces.forEach(function(element) {
                numberOfPlayers += element.listOfPlayers.length;
            });
            return numberOfPlayers;
        }

        this.allBets = function (){
            var allbets = 0;
            this.listOfBettingPlaces.forEach(function(element){ 
                for (var i = 0; i < element.listOfPlayers.length; i++){
                    allbets += element.listOfPlayers[i].betAmount;
                }
                
            })
            return allbets;
        }
        

        this.sumOfBetts = function () {
            var output = "";
            this.listOfBettingPlaces.forEach(function(element,i){
                output += "\t" + element.getData() + "sum of all bets: " + element.houseBetAmount() + "eur" + "\n";
                element.listOfPlayers.forEach(function(element, i){
                    output += "\t\t" +element.getData() + "\n";
                })
               
            })
            return output;
        }

        this.mostBets = function(){
            var numOfBetts = 0;
           this.listOfBettingPlaces.forEach(function(element, i){
               element.listOfPlayers.forEach(function(element){
                   if(element.country.name === "SR"){
                       numOfBetts++;
                   }
               })
               
           })
                
           return numOfBetts; 
        }


        this.getData = function () {
            return this.competition + ", " + this.listOfBettingPlaces.length + " betting places" + ", " + this.betsCounter() + " bets" +"\n" + this.sumOfBetts() + "There are " + this.mostBets() + " beats on Serbia";
        }

       
    }

    const Continents = {
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORT_AMERICA: "NA",
        AUSTRALIA: "AU"
    }

    // Continents.freeze();

    function createPlayer(name, surname, dateOfBirth, countryName, odds, continent, betAmount) {
       var personObj = new Person (name, surname, dateOfBirth);
       var countryObj = new Country (countryName, odds, continent);

       return new Player(personObj, betAmount, countryObj)
    }

    function createBettingPlace(address) {
        return new BettingPlace(address);
    }

    var mozartKladionica = new BettingHouse("Football World Cup Winner");

    var ljuba = createPlayer("Ljubomir", "Trkulja", "25 Aug 1988", "SR", 2.5, Continents.EUROPE, 150);
    var jelena = createPlayer("Jelena", "Marjanovic", "15 Jun 1984", "SR", 3.0, Continents.EUROPE, 1250);
    var dejan = createPlayer("Dejan", "Jurisic", "20 Jul 1990", "BiH", 4.5, Continents.AFRICA, 100);
    var ivana = createPlayer("Ivana", "Zivanovic", "10 Aug 1991", "SLO", 5.0, Continents.NORT_AMERICA, 550);

    var nemanjina = new Address("SR", "Belgrade", 11000, "Nemanjina", 4);
    var vuk = new Address("SR", "Belgrade", 11000, "Vukov spomenik", 123);

    var mozzartNemanjina = new BettingPlace(nemanjina);
    var mozzartVuk = new BettingPlace(vuk);

    try{
    mozzartNemanjina.addPlayer(ljuba);
    mozzartNemanjina.addPlayer(jelena);
    mozzartVuk.addPlayer(dejan);
    mozzartVuk.addPlayer(ivana);
    } catch(err){
        console.log(err);
    }

    mozartKladionica.addBettingPlaces(mozzartNemanjina);
    mozartKladionica.addBettingPlaces(mozzartVuk);

    console.log(mozartKladionica.getData());
    
})();