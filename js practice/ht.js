console.log("Hello world");

console.log("%cHello World", "color: blue; font-size: 40px");


let firstName = "Thomas";

let surName = "Benard";

console.log("Thomas" + " Benard") 

let score = 8;

let num = score > 0 && score < 10;

console.log(num);

console.log("Mid-level skills: " + num);

let timeRemaining = 0;

let energy = 10;

if (timeRemaining == 0 || energy == 0){
    console.log("Game Over: " + "True");
}


let num1 = 2;

let num2 = 5;

let test1 = num1 % 2;

let test2 = num2 % 2;

let result1 = test1 == 0;

console.log("Is 2 an even number: " + result1);

let result2 = test2 == 0;

console.log("Is 5 an even number: " + result2);


let age = 10;

if (age >= 65){
    console.log("You get your income from your pension ");
}

else if ( age < 65 || age > 18){
    console.log("Each month you get a salary");
    
}

else if (age < 65) {
    console.log("You get an allowance");
    
}

else {
    console.log("The value of the age variable is not numerical");
}

let day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Wrong day");
        break;
        

    case "Tuesday": 
        console.log("Try again")
        break;

    case "Sunday":
        console.log("Go to church");
        break;

    default:
        console.log("nothing new")
        break;
}



for (let i = 1; i <= 5; i++){
    console.log(i);
}
console.log("Counting completed")

for (let i = 5; i >= 1; i-- ){
    console.log(i);
}
console.log("Countdown finished");

let i = 1;

while (i <= 5){
    console.log(i);
    i++
}
console.log("Counting completed")

i = 5;

while (i >= 1){
    console.log(i);
    i--
}
console.log("Countdown finished");

i = 2018;

while (i <= 2022){
    console.log(i);
    i++
}



let pass = "ABCDEGHEHD";

for (i = 0; i < pass.length; i++){
    console.log( pass[i]);
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (let i = 0; i < cubes.length; i++) {
    let styles = "font-size: 80px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}


for (let i = 1; i <= 10; i++){
    if (i == 1){
        console.log("Gold medal");
    }
    else if ( i == 2){
        console.log("Silver medal");
        
    }
    else if (i == 3){
        console.log("Bronze medal");
        
    }
    else{
        console.log(i);
        
    }
}

for (let i = 1; i <= 10; i++){

    switch (i) {
        case 1:
            console.log("Gold medal......");
            break;
        case 2:
            console.log("Silver medal......");
            break;
        case 3:
            console.log("Bronze medal.......");
            break    
        default:
            console.log(i)
            break;
    }
}



function letterFinder  (word, match){
    for (let i = 0; i < word.length; i++){
        console.log(word[i]);

         if (word[i] == match){
        console.log("Found the match at " + i);
        
        }
        else{
            "No match found at" + i;
        }
    }
}

letterFinder("test", "t");



let cloth = [];

cloth.push("Versace");
cloth.push("fendi");
cloth.push("lv");
cloth.push("burberry");
cloth.push("leo");

console.log(cloth);

cloth.pop()
console.log(cloth);

cloth.push("boosy");
console.log(cloth);

let favCar = [];
favCar.color = "blue";
favCar.style = "bus";
favCar.type = "convertible";
console.log(favCar);


// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
const diary = ["cheese", "sour cream", " milk", "youghurt", "ice cream", "milkshake"]

function logDiary() {
    for (dai of diary) {
        console.log(dai);
    }
}

logDiary();


// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties

const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

console.log(bird);

function birdCan(bird) {
  for (const [key, value] of Object.entries(bird)) {
    console.log(key, value);
  }
}

birdCan(bird);

// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones

function animalCan() {
    for (element in bird) {
        console.log(element +  Object.values(bird));
    }
}

animalCan();

// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];

const [first, second, third, ...remaining] = topSixRestaurants;

console.log(first);
console.log(second);
console.log(third);
console.log(remaining);

// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
    for (i = 0; i < args.length; i++)
        console.log(args[i]);
}

unknownArgs(1, 2, 3, 4, 5, 6, 7, 8, 9);
unknownArgs("a", "b", "c", "d", "e");

// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];

const [first, second, third, ...remaining] = topSixRestaurants;

console.log(first);
console.log(second);
console.log(third);
console.log(remaining);







