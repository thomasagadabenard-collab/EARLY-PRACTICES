console.log("Hello, world!");

let a = 5;

let b = 12;

let sum = a + b;

console.log(`The sum of a and b is ${sum}`);


let [woman, man] = [30 , 24];

console.log(woman);


console.log(man);

[woman, man] = [24, 30];

console.log(woman);


console.log(man);


let num = 22;

if (num % 2 === 0){
console.log(`The number ${num} is an even number`);
} else{
    console.log(`The number ${num} is an odd number`);
}


let num1 = 4;

let num2 = 0;

let num3 = 10;

if (num1 > num2 && num1 > num3){
    console.log(`${num1} is the biggest number among the three number`);
} else if (num2 > num1 && num2 > num3){
    console.log(`${num2} is the biggest number among the three number`);
} else {
    console.log(`${num3} is the biggest number among the three number`);
}



let c = prompt("Put in a number in farenheight to convert into celsius");

let equation = (c * 9/5)/32;

console.log(equation);

let streen = "I am a man of my words";

let streen1 = streen.split("");

console.log(streen1);

let streen2 = streen1.reverse();

console.log(streen2);

let streen3 = streen2.join("");
console.log(streen3);

let rand = ((Math.random() * 9 ) +1)

console.log(Math.floor(rand));


let one = parseInt(prompt("Enter a number"));

let two = parseInt(prompt("Enter another number"));

let func = parseInt(prompt("Enter 1 for sum, 2 for addition, 3 for multiplication, 4 for division, 5 for exit"));

switch (func){
    case 1:
        sum = one + two
        console.log(sum);
        break;

    case 2:
        diff = one - two
        console.log(diff);
        break;
    
    case 3:
        mult = one * two;
        console.log(mult);
        break;
    
    case 4:
        div = one / two;
        console.log(div);
        break;

    case 5:
        console.log("Exiting program");
        break;
    
        default:
            console.log("Invalid entry");        
} 

let pali = prompt("Enter a word you want to check");

let pali1 = pali.split("");

console.log(pali);

let pali2 = pali1.reverse();

console.log(pali2);

let pali3 = pali2.join("");

console.log(pali3);

if (pali === pali3){
    console.log(`${pali} is a palindrome`);
    
} else{
    console.log(`${pali} is not a palindrome`);
    
}


let fac = parseInt(prompt("Enter a number to see it's factorial calculation"));

for (i = 0; i <= fac; i++){

    for(j = 0; j < fac; j++){        
    }
    console.log(`${i} x ${j} = ${i * j}`);
    
}


let fact = parseInt(prompt("Enter a number to see it's factorial"));

let result = 1;

for (i = 1; i <= fact; i++){
    result = result * i;  
    console.log(` ${result}`);
}


let arr = [30, 40, 50, 70, 80, 200];

let [a, b, c, d, e, f] = arr;

let sum = a + b + c + d + e + f;

console.log(sum);

let arr1 = [30, 40, 50, 70, 80, 200];
sum = 0;

for(j of arr1){
    sum += j;
}

console.log(sum);

let arr3 = [30, 40, 50, 70, 80, 200];
let summ = 0;

for (let i = 0; i < arr3.length; i++){
    summ += arr3[i];
}
console.log(summ);



const btn = document.querySelector(".btn");

let isBlue = false;
isClicked = false;

btn.addEventListener("click", () => {
    if (isBlue){
        document.body.style.backgroundColor = "white";
    } else{
        document.body.style.backgroundColor = "blue"
    }

    isBlue = !isBlue;

    btn.innerHTML = "button clicked";
});



let now = new Date();
console.log(now);



setInterval(function(){
    console.log("This man is on fire at all times");
    
}, 2000);


function showTime(){
    let now = new Date();

    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let period = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let timee = (`${hours}: ${min}: ${sec} ${period}`)

    document.getElementById("clock").textContent = timee;
    
}

showTime();

setInterval(showTime, 1000)


let boy = [30, 30, 30, 50, 40, 50, 40, 20];

boy = [...new Set(boy)];
console.log(boy);



let man = [];

for (let i = 0; i <= 6; i++){
    let num = parseInt(prompt("Enter a number"));
    man.push(num);
}
console.log(man);

let manny = [...new Set(man)]
console.log(manny);



let sortt = [20, 30, 3 ,50,60,80,100,2,60];

let sorrt1 = sortt.sort((a,b) => b-a);

console.log(sorrt1);

console.log(sorrt1[0]);


let uniqueSorrt = [...new Set(sorrt1)];

console.log(uniqueSorrt);



const input = document.getElementById("taskInput");
const add = document.getElementById("addTask");
const list = document.getElementById("taskList");

add.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete">X</button>
    `;

    list.appendChild(li);
    input.value = "";
});

list.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.closest("li").remove();
    }
});

const nums = [12, 4, 7, 20, 33, 5, 1];

const nums1 = nums.filter(num => num >= 10);

console.log(nums1);

const num2 = nums.sort((a,b) => b - a);

console.log(num2[0]);

console.log(num2);


const student = {
  name: "Ayo",
  age: 19,
  scores: {
    math: 88,
    english: 92,
    chemistry: 95
  }
};

student.scores.physics = 90;

console.log(student);

student.age = 20;

console.log(student);

student.scores.chemistry = "";

console.log(student);


for (const e of Object.entries(student)){
    console.log(e);
};

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    get info (){
        console.log(`${this.brand}:${this.model}: ${this.year}`);
        
    }
}

const car1 = new Car("Toyota", "Corolla", 2025);

car1.info;



function countVowel(str){

   const vowelCount = 0;

   const vowels = ["a", "e", "i", "o", "u"];

   for (let i of str){
    if(vowels.includes(char)){
        vowelCount++;
    }
   }

   return vowelCount;

}

const sti = countVowel(bousdnus);

console.log(sti);



//counter app

const increase = document.querySelector(".increase");

const decrease = document.querySelector(".decrease");

const reset = document.querySelector(".reset");

const value = document.querySelector(".value");

let numm = 0;

increase.addEventListener("click", () => {
    numm += 1
    value.textContent = numm;
    console.log(numm);

    if (numm > 0){
        value.style.color = "green";
    }
    
} )

decrease.addEventListener("click", () => {
    numm -= 1
    value.textContent = numm;
    console.log(numm);

    if (numm < 0){
        value.style.color = "red";
    }
    
} )

reset.addEventListener("click", () => {
    numm = 0
    value.textContent = numm;
    console.log(numm);

    if (numm === 0){
        value.style.color = "black";
    }
    
} )

const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("open");
})


class Bankaccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Amount deposited is ${amount} and your balance is ${this.balance}`);
        
    }

    withdraw(amount){
        this.balance -= amount;
        console.log(`Amount withdrawn ${amount} and your balance is ${this.balance}`);
    }

    get Balance(){
        console.log(`Balance: ${this.balance}`);
        
    }
}

const David = new Bankaccount("David", 5000);

console.log(David);


David.deposit(3000);
David.withdraw(5000);
David.balance;


const inventory = {
  apples: 30,
  oranges: 10,
  bananas: 15
};

inventory.mangoes = 40;

console.log(inventory);

inventory.oranges += 20;

console.log(inventory);

inventory.bananas -= 5;

console.log(inventory);

for(let x in inventory){
    console.log(`you have ${inventory[x]} ${x}`)};



const people = [
  { name: "Ada", age: 22 },
  { name: "Kunle", age: 17 },
  { name: "Fatima", age: 30 },
  { name: "John", age: 15 }
];

const adults = [];

for (let x of people){

    if(x.age >= 18){
        adults.push(x)
    }
    console.log(adults);
    
    
}
    
for (let j of adults){
    console.log(j.name);
    
}

const oldest = [];

for(let i of people){
    oldest.push(i.age);
}
console.log(oldest);

let oldest1 = oldest.sort((a,b) => b-a);

console.log(oldest1);


console.log(oldest1[0]); 


function primeNumber (num){
    if (num < 2) {
    console.log(`${num} is not a prime number`);
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(`${num} is not a prime number`);
      return false;
    }
  }

  console.log(`${num} is a prime number`);
  return true;
}

primeNumber(2);



// Day 3

const start = document.querySelector(".start");

const textArea = document.querySelector(".text-area");

let count = 0;

textArea.addEventListener("input", () => {
    count += 1
    

    if(textArea.length === 0){
        start.textContent = "Start typing"
    } else{
        start.textContent = count;
    }

    if (count > 50){
        start.style.color = "red";
    } else{
        start.style.color = "black";
    }
})


const inputBox = document.querySelector(".input-box");

const checkBox = document.querySelector(".check-box");

checkBox.addEventListener("change", () => {

    const isChecked = checkBox.checked;

    if (isChecked){
        inputBox.type = "text"
    } else{
        inputBox.type = "password"
    }
})



class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;  
    }

    get average() {
        let sum = 0;

        for (let score of this.scores) {
            sum += score;
        }

        return sum / this.scores.length; 
    }

    get grade() {
        const avr = this.average;

        if (avr >= 70) {
            return 'A';
        } else if (avr >= 60) {
            return 'B';
        } else if (avr >= 50) {
            return 'C';
        } else if (avr >= 45) {
            return 'D';
        } else {
            return 'F';
        }
    }
}

const Chuks = new Student("Chuks", [80, 75, 60]);

console.log("Average:", Chuks.average);
console.log("Grade:", Chuks.grade);



const library = {
  name: "City Library",
  books: {
    fiction: 120,
    science: 80,
    history: 45
  },
  address: {
    street: "Independence Avenue",
    city: "Abuja"
  }
};

library.books.fiction += 30;

console.log(library.books.fiction);

library.books.technology = 60;

console.log(library.books.technology);

library.address.city = "Lagos";

console.log(library.address.city);

for(let q in library.books){
    console.log(`we have ${library.books[q]} amounts of ${q} books in books category`);
    
}


const nums = [2, 7, 10, 21, 14, 5, 18, 3];


let even = [ ];

let sqrt = [];

for(let g of nums){    
    if(g % 2 === 0){
        even.push(g);
        console.log(even);

    }

}

for(g of nums){
    sqrt.push(g**2);    
}
console.log(sqrt);

for(g of nums){
    if (g > 15){
        console.log(g);
        break;
        
    }
}

let summy = nums.reduce((a,b) => a + b, 0);

console.log(summy);

let summy1 = [...nums].sort((a,b) => a + b);

console.log(summy1);


function countWords(str) {
    const obj = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }

    return obj;
}

console.log(countWords("hello"));


let Picker = document.querySelector(".picker");

let color = document.querySelector(".color");

Picker.addEventListener("input", () => {
    color.style.backgroundColor = Picker.value;
})






class Car {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }

    accelerate(amount){
        this.speed = this.speed + 10;
        console.log(speed);
        

    }
    brake(amount){
        this.speed = this.speed - 10;
        console.log(speed);

    }
    status(){
        console.log(`${this.brand} ${this.model} is moving at ${this.speed} km/h`);
        
    }
}

let van = new Car("Toyota", "Hilux", 70);

van.status();

van.brake();

van.accelerate();

    
    
const service = document.querySelector(".service");
const serviceList = document.querySelector(".service-list");

service.addEventListener("click", () => {
    serviceList.classList.toggle("open"); 
});

