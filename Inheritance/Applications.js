/*Create constructor functions with properties representing the following:
WebApp: name, url, technologies, licence, stars
MobileApp: name, platforms, licence, stars
 
All web applications should inherit methods: 
getData which prints out all the information
reactBased which checks if one of the used technologies is React
 
All mobile applications should inherit methods:
getData which prints out all the informations
forAndroid which checks if one of the platforms the application is developed for is Android

Both web and mobile applications should inherit methods:
isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
like which increases the number of stars by one
showStars which prints out the number of stars */

function WebApp (name, url, technologies, licence, stars){
this.name = name;
this.url =url;
this.technologies = technologies;
this.licence = licence;
this.stars = stars;
}

WebApp.prototype.getData = function () {
    
}

function MobileApp (name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}

