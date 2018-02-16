function brojac(a) {
    var broj = 0;
    var cifra;
    while (a > 0) {
        cifra = a % 10;
        broj++;
        a = (a - cifra) / 10;

    }
    return broj;
}

console.log(brojac(68));