const counter = document.querySelector(".counter");
const counterSpan = document.querySelector(".counter-span");

const MAX_LENGTH = 200;

function inputfn() {
    const currentLength = counter.value.length;
    const remaining = MAX_LENGTH - currentLength;

    counterSpan.textContent = remaining;

    if (remaining < 0) {
        counterSpan.style.color = "red";
    } else {
        counterSpan.style.color = "black";
    }
}

counter.addEventListener("input", inputfn);


console.log("hello world");

function fn(name, age){
    return `my name is ${name} and I am ${age} years old`
}

let age = fn("Thomas", 30);

console.log(age);


function Grade (name, score) {
    this.name = name;
    this.score = score;

    this.gettGrade = function () {
        return `The grade of ${this.name} is ${this.score}`
    }
    
}

let cee = new Grade("Thomas", 300);

console.log(cee);

console.log(cee.gettGrade());

class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;        
    }

    getAge(){
        return `My car is ${this.brand} and was manufactured in the year ${this.year}`
    }
}

let newCar = new Car("Toyota", 2024);

console.log(newCar);

console.log(newCar.getAge());


class ElectricCar extends Car {
    constructor(brand, year, maker){
        super(brand, year);
        this.maker = maker;
    }

    getAge(){
        return `My car, ${this.brand} is an electric car made by ${this.maker} in the year ${this.year}`
    }
}

let newElectric = new ElectricCar("Tesla", 2024, "Elon Musk");

console.log(newElectric);

console.log(newElectric.getAge());

function studentGrade(name, score){
    if (score < 0 || score > 100){
        return "Invalid score";
    }
    if (score >= 70){
       return `${name} scored ${score} and that is and A`;  
    } else if (score >= 60) {
        return `${name} scored ${score} and that is and B`;
    } else if (score >= 50){
        return `${name} scored ${score} and that is and C`;
    } else if (score >= 40){
        return `${name} scored ${score} and that is and D`;
    } else{
        return `${name} scored ${score} and has Failed`;
        
    }
}

let he = studentGrade("Isaac", -1);

console.log(he);


class Lorry {
    constructor(brand, year){
        this.brand = brand;
        this.year = year;        
    }

    getInfo(){
        return `${this.brand} was made in the ${this.year}`
    }
}

let newLorry = new Lorry("Truck", 1998);

console.log(newLorry);


console.log(newLorry.getInfo());

class ElectricLorry extends Lorry {
    constructor(brand, year, batteryCapacity){
        super(brand,year);
        this.batteryCapacity = batteryCapacity;
    }

    getInfo(){
        return `${this.brand} was made in the year ${this.year} and has a battery cappacity of ${this.batteryCapacity} KWH`
    }
}

let newElectricLorry = new ElectricLorry("Syon", 2004, 50000)

console.log(newElectricLorry);

console.log(newElectricLorry.getInfo());



let guess = (10 *(Math.random()) + 1);

let newGuess = Math.floor(guess);

let arr = [];

console.log(newGuess);

for (let i = 0; i < 3; i++){

    const enter = parseInt(prompt("You have only three tries - Enter a number"));
    arr.push(enter);

    if(enter === newGuess){
        console.log("You guessed right");
        break        
    } else if (enter > newGuess){
        console.log("Too high, try again");
        
    } else{
        console.log("Too low, try again");
        
    } 
}

console.log("Your guesses:" + arr);










