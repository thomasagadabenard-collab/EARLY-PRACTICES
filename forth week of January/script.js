let entry = document.querySelector(".upload-text-area");
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

/*Closure*/
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

/*Call back function*/

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

