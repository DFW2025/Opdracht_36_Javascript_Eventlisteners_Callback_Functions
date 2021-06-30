
// VERANDEREN VAN ITEMS

// DOT.Notation

let person = {
               name: "Dennis" ,
               age: 30 ,
               evaluations:[7,8,9]
             };

person.name = "John";
console.log(person.name);

// BRACKET.Notation

person["name"] = "Peter";
console.log(person.name);



// TOEVOEGEN VAN ITEMS

// Array items toevoegen via de PUSH methode of  INDEX methode

// Push 

let colors = ["red", "blue"];
colors.push ("yellow");

console.log(colors);


// Index

let kleuren = ["red", "blue"];
kleuren[2] = "green" ;

console.log(kleuren);