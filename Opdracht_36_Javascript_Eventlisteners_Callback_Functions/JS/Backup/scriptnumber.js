// Javascript

// Part 1 Check if a number is big

const numbercheck = function (number) { if ( number > 100 ) { return "true" ; }  {return "false" } };

// Adding the code to call the function

const check = numbercheck (5) ;
console.log (check) ;

const check2 = numbercheck(105);
console.log(check2);

const check3 = numbercheck(250);
console.log(check3);

const check4 = numbercheck(80);
console.log(check4);

// This example above is a function which produces something...


// Part 2 Brenda the AI bouncer

const bouncer = function (maxnumber, realnumber, age) { if (realnumber >= maxnumber && age >= 18 ) { return "it's too busy now, come back later" }
                                                        else if ( realnumber <= maxnumber && age >= 18) { return "come in"} 
                                                        {return "this is a club for adults"}}

// Adding the code to call the function

const check5 = bouncer (100, 120, 20);
console.log(check5);

const check6 = bouncer(100, 80, 20);
console.log(check6);

const check7 = bouncer(100, 120, 17);
console.log(check7);

const check8 = bouncer(100, 80, 17);
console.log(check8);

// This example above is a function which produces something...

// Part 3 Calculating the average

const calculateAverage0 = function (number1, number2, number3, number4, number5) { const calculate = ( number1 + number2 + number3 + number4 + number5 ) / 5  ;
                                                                                   return calculate;
                                                                                };

// Adding the code to call the function

const average1 = calculateAverage0 (2,2,2,2,2);
console.log (average1);

const average2 = calculateAverage0(2, 3, 5, 7, 2);
console.log(average2);

// Bonus

const average3 = calculateAverage0(2, 3, 5, 7, 2);
console.log(Math.round (average3));

// This example above is a function which produces something...




// ------------------------------------------------------------------------ //

// Part 4 Test --- "Producerende" Functie en een Functie die iets "doet"

// Functie die iets "produceert"

const Stap1CalculateAverage = function (number1, number2, number3, number4, number5) {
                                                                                        return (number1 + number2 + number3 + number4 + number5) / 5;
                                                                                        
};

const average = Stap1CalculateAverage(2, 3, 5, 7, 2);


// Functie die iets "doet" ( Input hiervan komt van de output van de producerende functie ) 

const Stap2UserOuput = function (average) { console.log("Uw gemiddelde cijfer wat u afgelopen jaar hebt behaald is " + average); };


// Adding the code to call the function

Stap2UserOuput(average);

