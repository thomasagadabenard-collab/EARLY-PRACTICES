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


