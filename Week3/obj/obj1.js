var ja = {
    name: "ivana",
    surname: "zivanovic",
    from: "Krupanj",
    yearofbirth: 1990,
    calculateage: function () {
        return 2018 - ja.yearofbirth;
    }
}

console.log(ja);
console.log(ja.calculateage());