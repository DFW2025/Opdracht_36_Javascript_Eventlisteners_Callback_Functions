// Javascript

// DEEL 1 OBJECTS

 let person = {
                name: "Dennis" ,
                age: 30 ,
                evaluations:[7,8,9]
            };

console.log("Persoon Info:",person);
console.log("Persoon Naam:",person.name);
console.log("Persoon Leeftijd:",person.age);


// VERANDEREN van een item via DOT of BRACKET methode

// DOT.Notation  

person.name = "John";

console.log("Naamsverandering via Dot.notation:",person.name);


// BRACKET.Notation

person ["name"] = "Peter";

console.log("Naamsverandering via Bracket.notation:",person.name);


// Voeg een ARRAY "evaluations" toe aan het OBJECT en log alle items hiervan en het 1e item apart

console.log("Alle cijfers behaald afgelopen jaar:",person.evaluations);
console.log("Eerste cijfer behaald afgelopen jaar:",person.evaluations[0]);


// DEEL 2 ARRAYS

let colors = [ "groen" , "blauw", "rood" ];

console.log("Alle kleuren:",colors);
console.log("Hoeveelheid verschillende kleuren:",colors.length);
console.log("1e kleur:",colors[0]);
console.log("3e kleur:",colors[2]);


// TOEVOEGEN een item via PUSH of INDEX methode

// PUSH 

colors.push ("geel");

console.log("Kleur geel toegevoegd via push methode:",colors);

// INDEX 

colors[4] = 5 ;

console.log("Nummer 5 toegevoegd via index methode:",colors);


// Voeg een OBJECT "greeting" toe aan de ARRAY en log alle items en het item apart

colors.push({ greeting: "hi ik ben een object" })

console.log("Een object greeting toegevoegd aan een array:",colors);
console.log("Log dit object apart:",colors[5]);



// DEEL 3 - 1 ARRAY met daarin 3 "real-life" OBJECTEN opgemaakt uit variabelen met daarin sub-arrays en sub-objecten.

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_Friendly: 4,
    energy_Level: 5,
    life_Span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_Url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_Food: "fish",
        medium_Liked_Food: "dried fruits",
        disliked_Food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_Friendly: 4,
    energy_Level: 53,
    life_Span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_Url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_Food: "tuna",
        medium_Liked_Food: "canned food",
        disliked_Food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_Friendly: 5,
    energy_Level: 3,
    life_Span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_Url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_Food: "meaty things",
        medium_Liked_Food: "tuna",
        disliked_Food: "canned food"
    }
}
]

// Logs

console.log("Herkomst kat 1:", catBreeds[0].origin)
console.log("Laatste Kattenras:", catBreeds[2].name)
console.log("Energie Level 1e kat:", catBreeds[0].energy_Level)
console.log("1e Temperament 2e kat:", catBreeds[1].temperament [0])
console.log("Laatste Temperament 3e kat:", catBreeds[2].temperament[4])
console.log("Al het voedsel 3e kat:", catBreeds[2].food)
console.log("Favoriete voedsel 3e kat:", catBreeds[2].food.favourite_Food)

// Extra Toevoegen

// Push
catBreeds[0].temperament.push("test","test2");
// Index
catBreeds[0].temperament[7]="test3";

console.log("Test / Test2 / Test3 item toegevoegd aan 1e kat temperament",catBreeds[0].temperament)

// Extra Verwijderen

// Delete
delete catBreeds[0].temperament[5];

console.log("Test item verwijderd van 1e kat temperament", catBreeds[0].temperament)



