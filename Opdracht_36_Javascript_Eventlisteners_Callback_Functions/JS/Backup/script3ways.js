// Javascript

// Part 1  --- 3 ways to write them

// Function Declarations

function Calculate1 (number1, number2) {
                                        return (((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2)));
                                       }

const Result1 = Calculate1 (3, 3);
console.log(Result1);


// Function Expressions

const Calculate2 = function (number1, number2 ) {
                                                return (((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2))) ;
                                                };

const Result2 = Calculate2 (3, 3);
console.log (Result2);


// Oplossing met constanten.

const doSquareCalculation = function (number1, number2) {
                                                          const number1Squared = number1 * number1;
                                                          const number2Squared = number2 * number2;
                                                          const sum = number1Squared + number2Squared;
                                                          const sumSquared = sum * sum;
                                                          return sumSquared;
                                                        };

const Result3 = doSquareCalculation(3, 3);
console.log(Result3);



// Arrow Functions

const Calculate3 = (number1, number2) => {
                                          return (((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2)));
                                          };

const Result4 = Calculate3(3, 3);
console.log(Result4);


