// Variables
let name = "Danny Boy";
const age = 30;
var job = "Software Developer";

//Arithmetic Operations
let x = 10;
let y = 5;
let difference = x - y; // difference now equals 5
let product = x * y;    // product now equals 50
let quotient = x / y; // quotient now equals 2
let remainder = x % y; // remainder now equals 0

// Comparison Operators
let a = 10;
let b = 5;
console.log(a > b);  // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false
console.log(a == b); // false
console.log(a != b); // true

//logical Operators
let p = true;
let q = false;
console.log(p && q); // false
console.log(p || q); // true
console.log(!p); // false

// if elewse Statement
let time = 20;
if (time < 12) {
    console.log("Good morning");
} else if (time < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

//switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// Function Declaration
function callme(name) {
    console.log(`Hello, ${name}`);
}

function add(x, y) {
    return x + y;
}

let sum = add(5, 10);
console.log(sum); // Outputs: 15

// Object Creation
let person = {
    name: "Danny Boy",
    age: 30,
    job: "Software Developer",
    great: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // Danny Boy
console.log(person.age); // 30
console.log(person.job); // Software Developer
person.great(); // Hello, my name is Danny Boy
console.log(job)

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    drive: function() {
        console.log(`Driving a ${this.year} ${this.make} ${this.model}`);
    }
};

console.log(car.make); // Toyota
console.log(car.model); // Camry
console.log(car.year); // 2020
car.drive(); // Driving a 2020 Toyota Camry
function example() {
    var x = 1;
    let y = 2;
    if (true) {
        var x = 3;
        let y = 4;
        console.log(x); // Outputs: 3
        console.log(y); // Outputs: 4
    }
    console.log(x); // Outputs: 3
    console.log(y); // Outputs: 2
}

example();
