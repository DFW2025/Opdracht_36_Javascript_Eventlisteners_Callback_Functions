// Javascript

// LOOPS

// 1. WHILE Loop

let colors = [ "yellow", "blue", "red", "orange"];
let s = 0

while (s < colors.length ) {
                             console.log("color " + colors[s]);
                              s++;
                            };

console.log("All colors have been looped");



// 2. FOR Loop  - Array names output

let colors2 = ["yellow", "blue", "red", "orange"];

for (p = 0; p < colors2.length; p++) {
                                        console.log("color2 " + colors2[p]);  // <----
                                      };

console.log("All colors2 have been looped");


//  3. FOR Loop  - Array number output

for (i = 1; i <= colors2.length; i++) {
                                        console.log( "kleurnr." + i ); // <----
};


// 4. ARRAY Methods!!!!   - Array.prototype.forEach()

// ARRAY

let colors3 = ["yellow", "blue", "red", "orange"];

// Function 

const listColors = function (item) {
                                     console.log(item);
                                     };
// Loop with method "forEach"

colors3.forEach(listColors);


// -------------------------------------------------------------------------------------------

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// - While loop = 4 regels    -  For loop = 3 regels    

// Hoeveel regels neemt mijn forEach method in beslag?
// - forEach loop = 1 regel

// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// Een array method heeft als voordeel dat hij zelf bepaald hoelang de array is en daarna de loop stopt... in tegenstelling zoals bij een while/for loop die net zolang blijft doorlopen wanneer er geen goede stop conditie is ingebouwd, wat weer kan leiden tot "infinite" loops die de computer kunnen crashen.
// Ook is een array method makkelijker leesbaar omdat er minder condities in zitten.

// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Looping through the properties of an object.......hoe?
// Met de FOR...IN methode

const persoon = { 
                 haarkleur: "bruin", 
                 ogen: "blauw", 
                 geslacht: "man",
                 leeftijd: 46,
                 lengte: 180
               };

for (const eigenschap in persoon) {
                                    console.log(`${eigenschap}: ${persoon[eigenschap]}`);
                                  };

// Zijn we nu aan het itereren?  - Ik denk het wel, we loopen elke keer 1 eigenschap naar de console log.