// variables
let name1 = "Alice";   
const anme1 = "Alice";   // This will cause an error because 'name1' is already declared with 'let'
var job = "Engineer";
name1 = "Bob";         // Reassigning the value of 'name1'


// Data Types
let x = 10;               // Number
let y = 5;                // Number
let difference = x - y;  // Subtraction operation
let product = x * y;     // Multiplication operation
let quotient = x / y;    // Division operation
let reminder = x % y;    // Modulus operation


// Comparison Operators
let a = 10;
let b = 5;
console.log(a > b);   // True
console.log(a < b);   // False
console.log(a >= b);  // True
console.log(a <= b);  // False
console.log(a == b);  // False
console.log(a != b);  // True



// Logical Operators
let p = true;
let q = false;
console.log(p && q);
console.log(p || q);
console.log(!p);


// if-else Statement
let time = 20;
if (time < 12) {
    console.log("Good day");
} else if (time < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}


// switch Statement
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


// function
function callme(namenew) {
    console.log(`Hello ${name1}!`);
}

function add(a , b) {
    return a + b;
}

let sum = add(5, 10);
console.log(sum); // Output: 15


// objects
let person = {
name: "John",
age: 30,
job: "Developer",
greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
}
};

console.log(person.name); // John Accessing property
console.log(person.age);  // 30 Accessing property
console.log(person.job);  // Developer Accessing property
person.greet();          // Hello, my name is John. Calling method
console.log(job)

let car = {
make: "Toyota",
model: "Camry",
year: 2020,
drive: function() {
    console.log(`Driving a ${this.year} ${this.make} ${this.model}.`);
}
};

console.log(car.make);  // Toyota Accessing property
console.log(car.model); // Camry Accessing property
console.log(car.year);  // 2020 Accessing property
car.drive();           // Driving a 2020 Toyota Camry. Calling method
function example() {
    var x = 1;
    let y = 2;
    if (true) {
        var x = 3; // Same variable
        let y = 4; // Different variable
        console.log(x); // 3
        console.log(y); // 4
    }
    console.log(x); // 3
    console.log(y); // 2
}

example();

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const cube = function(x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


let result1 = '3' + 2; // '32' (string concatenation)
let num1 = '3';
let result2 = Number(num1) + 2; // 5 explicit conversion to number 
let num2 = "123"; // string
console.log(Number(num2)); // string

num2 = Number(num2); // explicit conversion to number
console.log(typeof num2); // number

let bool = 'True'; // string
console.log(Boolean(bool)); // true

bool = Boolean(bool); // explicit conversion to boolean
console.log(typeof bool); // boolean