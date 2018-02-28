"use strict";

(function () {
    console.log("hi");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;


    }
    Person.prototype.getData = function () {
        return this.name + ", " + this.surname;
    }

    function Seat(number, category) {
        this.number = number || Math.round((Math.random() * (100 - 10) + 10));
        this.category = category || "e";

    }

    Seat.prototype.getData = function () {
        return this.number + ", " + this.category + ", ";
    }


    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

    }

    Passenger.prototype.getData = function () {

        if (this.seat.category === "e") {
            this.seat.category = "economy"
        } else if (this.seat.category === "b") {
            this.seat.category = "bussines";
        }
        return seat.getData() + person.getData();
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.passengerList = [];
    }

    Flight.prototype.bussinesCounterFlight = function () {
        var bussinesCounter = 0;
        this.passengerList.forEach(function (e) {

            if (e.seat.category === "b") {
                bussinesCounter++;
            }
        })
        return bussinesCounter;

    }
    Flight.prototype.getData = function () {
        var firstIndex = "";
        var lastIndex = "";
        var shortRelation = this.relation.split(" - ");
        var shortRelationFinal = "";

        shortRelation.forEach(function (element) {
            var city = element.split("");
            firstIndex = city.find(function (e) {
                if (e !== "a" && e !== "e" && e !== "i" && e !== "o" && e !== "u") {
                    return e;
                }
            })
            shortRelationFinal += firstIndex;

            city.reverse();
            lastIndex = city.find(function (e) {
                if (e !== "a" && e !== "e" && e !== "i" && e !== "o" && e !== "u") {
                    return e;
                }
            })
            shortRelationFinal += lastIndex + " - ";

        })

        shortRelationFinal = shortRelationFinal.toUpperCase();
        shortRelationFinal = shortRelationFinal.slice(0, shortRelationFinal.length - 2);

        return shortRelationFinal;
    }
    Flight.prototype.addPassenger = function (passenger) {

        if (this.passengerList.length === 100) {
            return "The flight is full";
        }

        for (var i = 0; i < this.passengerList.length; i++) {
            if (passenger.seat.number === this.passengerList[i].seat.number) {
                passenger.seat.number = Math.round((Math.random() * (100 - 10) + 10));
            }


            if (passenger.person.getData() === this.passengerList[i].person.getData()) {
                passenger.seat.number = Math.round((Math.random() * (100 - 10) + 10));

            }

        }

        this.passengerList.push(passenger);
    }

    function Airport() {
        this.name = "Nikola Tesla",
            this.flightList = [];
    }
    Airport.prototype.passCount = function () {
        var count = 0;
        this.flightList.forEach(function (element) {
            count += element.passengerList.length;
        });
        return count;
    }
    Airport.prototype.addFlight = function (flight) {
        this.flightList.push(flight);
    }
    Airport.prototype.printFlight = function () {
        var print = "";
        var bussinesCounter = 0;
        this.flightList.forEach(function (element, index) {
            print += "\t" + element.date.getDate() + "." + (element.date.getMonth() + 1) + "." + element.date.getFullYear() + ", " + element.getData() + "- Number of bussines passanger: " + element.bussinesCounterFlight() + "\n";
            for (var i = 0; i < element.passengerList.length; i++) {
                print += "\t\t" + element.passengerList[i].getData() + "\n";
                if (element.passengerList[i].seat.category === "bussines") {
                    bussinesCounter++;
                }
            }
        })
        return print + "Total number of bussines category for this Aeroport " + bussinesCounter;
    }

    Airport.prototype.getData = function () {
        return "Airport: " + this.name + "," + "total passengers: " + this.passCount() + "\n" + this.printFlight();
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(person, seat) {
        return new Passenger(person, seat);
    }

    var ariportTesla = new Airport();


    var bgdPar = createFlight("Belgrade - Paris", "25 Oct 2017");
    var parBgd = createFlight("Paris - Belgrade", "11 Nov 2017");
    var jagKar = createFlight("Jagodina - Karpatos", "2 Sep 2018");

    var john = new Person("John", "Snow");
    var johnSeat = new Seat(1, "b");
    var cersei = new Person("John", "Snow");
    var cerseiSeat = new Seat(2, "b");
    var daenerys = new Person("Daenerys", "Targaryen");
    var daenerysSeat = new Seat(14, "b");
    var tyrion = new Person("Tyrion", "Lannister");
    var tyrionSeat = new Seat();
    var jovana = new Person("Jovana", "Zivkovic");
    var jovanaSeat = new Seat(null, "b");

    var johnPassenger = createPassenger(john, johnSeat);
    var cerseiPassenger = createPassenger(cersei, cerseiSeat);
    var daenerysPassenger = createPassenger(daenerys, daenerysSeat);
    var tyrionPassenger = createPassenger(tyrion, tyrionSeat);
    var jovanaPessenger = createPassenger(jovana, jovanaSeat);

    bgdPar.addPassenger(johnPassenger);
    bgdPar.addPassenger(cerseiPassenger);
    jagKar.addPassenger(jovanaPessenger);

    parBgd.addPassenger(daenerysPassenger);
    parBgd.addPassenger(tyrionPassenger);

    ariportTesla.addFlight(bgdPar);
    ariportTesla.addFlight(parBgd);
    ariportTesla.addFlight(jagKar);

    console.log(ariportTesla.getData());



})();