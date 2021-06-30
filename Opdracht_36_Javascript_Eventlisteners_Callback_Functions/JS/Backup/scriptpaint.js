// Javascript

// Part 1 Painting the wall

const painting = function () { console.log("Stap1: ", "The wall has been painted red..."); };

// Adding the code to call the function

painting();


// Part 2 Adding a single argument

const painting1 = function (color) { console.log("Stap2:", "The wall has been painted " +  color + "...."); };

// Adding the code to call the function

painting1("green");
painting1("blue");
painting1();

// Part 3 Adding multiple arguments

const painting2 = function (direction, color) { console.log("Stap3:", "The " + direction + " wall has been painted " + color + "...."); };

// Adding the code to call the function

painting2("north", "orange"); 


// Part 4 Does the order of the arguments matter when calling the function?  - Yes !!

const painting3 = function (direction, color) { console.log("Stap3:", "The " + direction + " wall has been painted " + color + "...."); };

// Adding the code to call the function

painting3("south-east", "grey");
painting3("grey", "south-east");


// Part 5 What happens if you switch them in the function definition?  - It's sill messed up!!

const painting4 = function (color, direction) { console.log("Stap3:", "The " + direction + " wall has been painted " + color + "...."); };

// Adding the code to call the function

painting4("south-east", "grey");

// Part 6 what happens if you change the order of the arguments in the function definition and when calling the function?  - It makes it correct again...

const painting5 = function (direction, color ) { console.log("Stap3:", "The " + direction + " wall has been painted " + color + "...."); };

// Adding the code to call the function

painting5("south-east", "grey");

