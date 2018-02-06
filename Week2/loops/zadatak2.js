var sum = 0;
// sabrao sam dva sa sumom
// hocu da sum === 7

//sum = sum + 2;
// console.log(sum)

for (var i = 1; i < 1000; i++) {
    if (i%3===0 && i%5===0) {
        sum = sum + i;
    }
} console.log(sum);