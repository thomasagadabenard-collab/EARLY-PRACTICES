let [name, age] = ["Thomas", 30];

console.log(name);

console.log(age);

let bestFood = "My best food are rice, beans and swallow"
 
let [best0ne, bestTwo, bestThree] = ["rice", "beans", "swallow"];

let oj = `My name is ${name}, I am ${age} years old and I love ${best0ne}, ${bestTwo} and ${bestThree}`;
console.log(oj);

let score = 20;

if(score >= 70){
    console.log("Excellent");
} else if(score >= 50 && score <70){
    console.log("Good");
} else{
    console.log("needs improvement");
}

let day = "Sunday";

if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
    console.log("Weekday");
} else{
    console.log("Weekend");
}

switch (day) {
    case "Monday":
        console.log("Weekday");        
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wedmesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");        
        break;
    default:
        console.log("Weekend");
        break;
}


for( let i = 1; i <= 20; i++){
    console.log(i); 
}

for( let i = 1; i <= 30; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

let sm = 1;

for( let i = 0; i < 100; i++){
    console.log(i + sm);
}

function calculateArea(length, width){
    let area = length * width;
    return area;
}

let rect = calculateArea(20, 30);

console.log(rect);

let arr = [3,2,4,5,30,20, 40,33, 55, 30, 90];

console.log(arr);


arr.push = 100;

console.log(arr);

arr.pop();

console.log(arr);

let grt = arr.filter(ar => ar > 10);
console.log(grt);

let dub = arr.map(ar => ar * 2);
console.log(dub);

let student = {
    name: "Thomas",
    age: 30,
    scores: [50,40,20,90,80,60],
    average(){
        let sum = this.scores.reduce(
            (a, b) => {
            return a + b
        },0)
        return (sum/this.scores.length)  
        }
}
let store =student.average();
console.log(store);

let para = document.querySelector(".para");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    para.textContent = "Hello dear friend, welcome to learning Javascript DOM manipulation!"
    para.style.color = "red";
    btn.innerHTML = "Clicked"
})

let input = document.querySelector(".input");
let live = document.querySelector(".live");

input.addEventListener("input",() => {
    live.textContent = input.value;
})

let formBtn = document.querySelector(".form-btn");
let nameField = document.querySelector(".name");
let email = document.querySelector(".email");

let emailBlank = document.querySelector(".email-blank");
let nameBlank = document.querySelector(".name-blank");

formBtn.addEventListener("click", (e) => {
    e.preventDefault();

    nameBlank.classList.remove("active");
    emailBlank.classList.remove("active");

    if (nameField.value.trim() === "") {
        nameBlank.classList.add("active");
        return;
    }

    if (email.value.trim() === "") {
        emailBlank.classList.add("active");
        return;
    }
    
    console.log("Form submitted");
});


