let add = document.querySelector(".add-btn");

let toDo = document.querySelector(".to-do");

let input = document.querySelector("input");


function creattodo(){
    let para = document.createElement("div");
    let del = document.createElement("button");
    del.innerHTML = "Delete";
    let paragraph = document.createElement("p");
    para.classList.add("tasks");
    del.classList.add("del");
    paragraph.innerText = input.value;
    toDo.appendChild(para);
    para.appendChild(paragraph);
    para.appendChild(del);
    del.addEventListener("click", () => {
    para.remove();
    });

    input.value = "";
}

function whether(){
    if (input.value === ""){
        return
    } else{
        creattodo();
    }
}

add.addEventListener("click", () => {
    whether();    
});


let shareBtn = document.querySelector(".share");
let shareTool = document.querySelector(".share-tool-container")

shareBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    shareTool.classList.toggle("active");

})


window.addEventListener("click",() => {
    shareTool.classList.remove("active");
})


const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 42 },
    { name: "Charlie", score: 73 },
    { name: "David", score: 90 },
];

const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;

console.log(averageScore);



let high = students.reduce((accumulator, currentValue) =>{
    return Math.max(accumulator, currentValue.score)

}, -Infinity)

console.log(high);


let min = students.reduce((accumulator, currentValue) =>{
    return Math.min(accumulator, currentValue.score)
}, Infinity)

console.log(min);


let filt = students.filter(student => student.score >= 50);
console.log(filt);


let mapp = students.map(student => {
    if(student.score >= 70){
        console.log("You got an A");
        

    } else if (student.score >= 60){
        console.log("You got a B");
    } else{
        console.log("Try again");
        
    };
})



const account = {
  name: "John Doe",
  balance: 1000,
  transactions: [],
  
  deposit: function() {
    let amount = 500;
    this.balance += amount;
    this.transactions.push(amount);
    return console.log(this.balance);
  },
  withdraw:function() {
    let amount =400;
    this.balance -= amount;
    this.transactions.push(amount);
    return console.log(this.balance);
    
  },
  checkBalance: function() {
    return console.log(this.balance);
  }

};

account.deposit();
account.withdraw();
account.checkBalance();
console.log(account.transactions);


let expenses = [];

function addExpense(amount, description){
    let popp = {amount, description};
    expenses.push(popp);
}

addExpense(500, "sugar");
addExpense(200, "bread");
addExpense(1000, "garri");
console.log(expenses);

function calculateTotal(){
    let total = expenses.reduce((accumulator, currentValue) => currentValue.amount + accumulator, 0)
    return console.log((total));
    
}

calculateTotal();

function monthlySavings(income){
    let totalExpenses = expenses.reduce((accumulator, currentValue) => currentValue.amount + accumulator, 0);
    let savings = income - totalExpenses;
    return console.log(savings);
}

monthlySavings(2000);

function formatCurrency(amount){
    let total = `$${amount.toLocaleString()}.00`;
    return total;
}

console.log(formatCurrency(3000));
 

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  BorrowBook(title){
    let available = !this.isAvailable;
    return available;
  }

  ReturnBook(title){
    this.isAvailable = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  AddBook(book){
    this.books += this.books;
    return this.books;
  }
}

