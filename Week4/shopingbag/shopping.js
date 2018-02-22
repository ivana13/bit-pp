'use strict';

(function () {

    function Product(productID, name, price, expirionDate) {
        this.productID = productID
        this.name = name
        this.price = price
        this.expirionDate = expirionDate

        this.getInfo = function () {
            var firstLetter = name.charAt(0);
            var lastLetter = name.charAt(name.length - 1)
            var result = firstLetter + lastLetter
            return result + this.productID + ", " + this.name + ", " + this.price


        }
    }

    function ShoppingBag() {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            this.listOfProducts.push(product)
        }
        this.getTotalPrice = function () {
            var totalPrice = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                var product = this.listOfProducts[i];
                totalPrice += product.price;
            }
            return totalPrice.toFixed(3);
        }

        this.getAveragePrice = function () {
            var totalPrice = 0;


            for (var i = 0; i < this.listOfProducts.length; i++) {
                var product = this.listOfProducts[i];
                totalPrice += product.price;
            }

            var averagePrice = totalPrice / this.listOfProducts.length;

            return averagePrice;
        }

        this.mostExpencive = function () {
            var mostExpensive = 0;
            var output = {};

            for (var i = 0; i < this.listOfProducts.length; i++) {
                var product = this.listOfProducts[i];
                
                if (product.price > mostExpensive) {
                    mostExpensive = product.price;
                    output = product;
                }

            }


       return output;
        }
    }

    function PaymentCard(acountBalance, status, date) {
        this.acountBalance = acountBalance
        this.status = status
        this.date = date
    }

    var pro1 = new Product(12345, "Banana", 12.33);
    var pro3 = new Product(43234, "Mango", 59.15);
    var pro2 = new Product(33334, "Ananas", 13.13);

    var sb = new ShoppingBag()
    var sb2 = new ShoppingBag();
    sb.addProduct(pro1)
    sb.addProduct(pro3)
    sb.addProduct(pro2)

     console.log(pro1.getInfo());
    console.log(sb.getTotalPrice());
     console.log(sb.getAveragePrice());
    console.log(sb.mostExpencive());
    



    // console.log("sb\n", sb.listOfProducts);
    // console.log("sb2\n", sb2.listOfProducts);




})()