// Javascript

// Calling a function in a function

const scream = function () {
                                console.log("Aaaaaaa!");
                            };

// Calling scream outside of a function
scream();


// Here we call scream inside of a function
const makeNoise = function () {
                                scream();
                              };

makeNoise();


// Example 



const makePositive = function ( number ) { console.log ( "Entering makePositive.." );
                                           return Math.abs (number);
                                         };

const makeBigger = function (number) { console.log ( "Enterning makeBigger.. ");
                                        if (number < 10 ) {
                                        return 10 + number;
                                         }
                                        return number;
                                         };
                                         
const square = function ( number ) { console.log ("Entering Square.. " );
                                     return number * number;
                                   };
                                   
                                   
const doComplexCalculation = function ( number ) { console.log ( "Entering doComplexCalculation..");
                                                   const positiveNumber = makePositive ( number) ;
                                                   const bigNumber = makeBigger ( positiveNumber );
                                                   const squarenumber = square ( bigNumber);
                                                   return squarenumber;
                                         };

console.log (doComplexCalculation (-1));

// -----------------------------------------------------


// Exercise 1


const person = function (age) {
                                    if (age >= 18) 
                                    { return true; } 
                                    else { return false; }
                                };

const greeting = function (age) {
                                     if ( person (age) ) 
                                     { return "Hello there"; } 
                                     else { return "Hey kiddo"; }
                            };

console.log(greeting(34));
console.log(greeting(8));


// Exercise 2 VAT



const calculateVAT = function (basePrice, VATPercentage) { return basePrice * (VATPercentage / 100);
                                                         };

const calculatePriceIncludingVAT = function (basePrice, VATPercentage) { const VAT = calculateVAT(basePrice, VATPercentage);
                                                                         return basePrice + VAT;
                                                                        };

console.log(calculatePriceIncludingVAT(1000, 21));
console.log(calculatePriceIncludingVAT(2, 9));

// Exercise 3 VAT

const calculateBasePrice = function (priceIncludingVAT, VATPercentage) { const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
                                                                         return basePrice;
                                                                        };

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) { const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
                                                                               const VAT = priceIncludingVAT - basePrice;
                                                                                return [basePrice, VAT];
                                                                            };

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));