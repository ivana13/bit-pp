// Write a program to compute the sum and product of an array of integers.

var array = [1, 2, 3, 4, 5, 6],
       sum = 0,
       product = 1,
       i;

   for (i = 0; i < array.length; i += 1) {
       sum += array[i];
       product *= array[i];
   }
  
   console.log('Sum: ' + sum + ' Product: ' + product);