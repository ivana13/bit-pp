'use strict';

(function () {
    console.log("hi");


    function Product(name, price, expirationDate) {
        this.id = Math.floor(Math.random() * (99999 - 9999) + 9999);
        this.name = name;
        this.price = parseFloat(price);
        this.expirationDate = new Date(expirationDate);

    }

    Product.prototype.getInfo = function () {
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase() + this.id + ", " + this.name + ", " + this.price;
    }

    function ShoppingBag(product) {
        this.productList = [];

    }
    ShoppingBag.prototype.calc = function () {
        var avrg = 0;
        this.productList.forEach(function (element, i, arr) {
            avrg += element.price / arr.length;
        });
        return avrg.toPrecision(6);
    }
    ShoppingBag.prototype.addProduct = function (product) {
        var date = new Date();
        if (date.getTime() - product.expirationDate.getTime() < 0) {
            this.productList.push(product);
        }
    }

    ShoppingBag.prototype.getMostExpensive = function () {
        var sortedArr = this.productList.slice().sort(function (a, b) {
            return a.price - b.price;
        });
        var lastElement = sortedArr[this.productList.length - 1];

        return lastElement.getInfo();
    }

    ShoppingBag.prototype.calculateTotalPrice = function () {
        var sum = 0;
        this.productList.forEach(function (element) {
            sum += element.price;
        })
        return sum;
    }

    function PaymentCard(accountBalance, statusActive, validDAte) {
        this.accountBalance = parseFloat(accountBalance);
        this.statusActive = statusActive;
        this.validDAte = new Date(validDAte);
    }

    function checkoutAndBuy(shopingBag, paymaentCard) {
        if (paymaentCard.accountBalance >= shopingBag.calculateTotalPrice()) {
            return "Purchase is successful"
        }
        return "You are missing the amount of " + (parseInt(shopingBag.calculateTotalPrice() - paymaentCard.accountBalance));
    }

    var banana = new Product("banana", 129.31, "12 Aug 2018");
    var orange = new Product("orange", 162.23, "25 Aug 2018")

    var shoping = new ShoppingBag(banana);
    shoping.addProduct(banana);
    shoping.addProduct(orange);

    var card = new PaymentCard(500, true, "20 Aug 2018");



    console.log(checkoutAndBuy(shoping, card));



})();