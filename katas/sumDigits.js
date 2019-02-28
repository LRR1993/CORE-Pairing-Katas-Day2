/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18

  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
 //return num.toString().split('').map(string => +string).reduce((numOne, numTwo) => numOne + numTwo)

return num.toString().split('').filter(string => string != ".").map(string => +string).reduce((numOne, numTwo) => numOne + numTwo)

}

module.exports = sumDigits;
