/*let entry = document.querySelector(".upload-text-area");
let uploadInput = document.querySelector(".upload-input");
let uploadBtn = document.querySelector(".upload-btn");
let main = document.querySelector("main");

function createCard(text, imageSrc) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("card");

    let newImage = document.createElement("img");
    newImage.classList.add("card-image");
    newImage.src = imageSrc;

    let newParagraph = document.createElement("p");
    newParagraph.classList.add("card-text");
    newParagraph.textContent = text;

    newDiv.appendChild(newImage);
    newDiv.appendChild(newParagraph);
    main.appendChild(newDiv);
}

uploadBtn.addEventListener("click", () => {
    if (entry.value === "" || uploadInput.value === "") {
        return;
    }

    createCard(entry.value, uploadInput.value);
    

    entry.value = "";
    uploadInput.value = "";
});

//Closure
function createCounter(){
    let count = 0;

    return function (){
        count ++
        console.log(count);
    }
}

let newCounter = createCounter()

newCounter();
newCounter();
newCounter();

//Call back function 

function processNumber(number, callBack){
    let result = number * 2;
    callBack(result)
}

function callBack(result) {
    return console.log(result);
}

processNumber(5, callBack);


function createAccount(){
    let balance = 0;

    return {
        deposit: function(amount){
            balance += amount;
            return balance;
            
        },
        withdraw: function (amount){
            balance -= amount;
            return balance;
        }
    }
}

const myAccount = createAccount()

console.log(myAccount.deposit(500));

console.log(myAccount.withdraw(200));



function greetUser(name) {

    return function time(timeOfDay){
        return `Good ${timeOfDay}, ${name}`
    }
    
}

let newgreet = greetUser("John");

console.log(newgreet("morning"));


function calculate(a, b, callBack) {
    return callBack(a, b)
}

function callBack (a,b) {
    return a * b;
}

let result = calculate(2,4, callBack)

console.log(result);


function createCount(){
    let count = 0;
    return {
        increment: () => {
            count ++
            return count
        },
        decrement: () => {
            count--
            return count;
        }
    }
}

let newCount = createCount();

console.log(newCount);

console.log(newCount.increment());

console.log(newCount.increment());

console.log(newCount.increment());

console.log(newCount.decrement());

function loginUser(userName, callback) {
    setTimeout(() => {
        console.log("Logging in...");
        const result = callback(userName);
        console.log(result);
    }, 2000);
}

function allBack(userName) {
    if (!userName) {
        return "Login failed";
    } else {
        return `Welcome ${userName}`;
    }
}

loginUser("Tom", allBack);

function delayedMessages(messages){
    for(let message of messages){
        setTimeout(() => {
            console.log(message);
        }, 1000);
    }
}


let hey = delayedMessages(["Hello", "How are you?", "Goodbye"]);

console.log(hey);

let counts = 10;

let timer = setInterval(() => {
    console.log(counts);

    if (counts===0){
        console.log("time up");
        clearInterval(timer) 
    }

    counts --;
    
}, 1000);


fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
        console.log(data);
        data.forEach(user => {
            console.log(user.name, user.email);
        });
  })
  .catch(err => console.error(err));

  async function getUserData() {
    
  }

  function fakeApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Alex", age: 25 });
        }, 2000);
    });
}

async function getUserData() {
    try {
        const data = await fakeApi();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getUserData();*/

const even = [];

const odd = []; 

function arrr(numbers){
    for(let number of numbers){
        if(number%2 === 0){
            even.push(number);
        }else {
            odd.push(number);
        }
    }
    console.log(numbers);
    
}

arrr([1,2,3,4,5,6,7,8,9,9,10,11,21,12,24,31]);

console.log(even);

console.log(odd); 


//Given an array of student objects, return only the students who passed all subjects (score ≥ 50).

const students = [
    {name:"Thomas", score: 80},
    {name:"Alex", score: 60},
    {name:"Alisson", score: 70},
    {name:"Eke", score: 40},
    {name:"Isaac", score: 30},
    {name:"Lulu", score: 90},
    {name:"Manny", score: 20},
]

console.log(students);

console.log(students[0].score);

for(let student of students){
    if(student.score >= 50){
        console.log(student.name);
    }
}

let passStudents =  students.filter(student => {
    return student.score >= 50;    
})

console.log(passStudents);

/*OBJECT

Task 1:
Create an object representing a shopping cart with methods to:

add item

remove item

calculate total price*/



let shoppingCart = {
    items: {
        milk: 20,
        bread: 50,
        milo: 200,
    },

    addItems() {
        this.items.kuli = 400;
    },

    removeItems() {
        delete this.items.milk;
    },

    totalPrice() {
        let total = 0;

        for (let item in this.items) {
            total += this.items[item];
        }

        return total;
    }
};

console.log(shoppingCart.items);

shoppingCart.addItems();
console.log(shoppingCart.items);

shoppingCart.removeItems();
console.log(shoppingCart.items);

console.log(shoppingCart.totalPrice());

let prices = [10,20,40,500,300,400,100,200]

let vat = prices.map(price => price * 7.5/100);

console.log(prices);

console.log(vat);


let users = ["thomas", "isaac", "vero", "jumoke"]

let upperUser = users.map(user => user[0].toUpperCase());

let newUpperUser = users.map(user => user.toUpperCase());

console.log(users);

console.log(newUpperUser);

console.log(upperUser);


let values = [2,3,2,4,5,6,7,5,9,9];



let newSet = new Set(values);

console.log(newSet);

















