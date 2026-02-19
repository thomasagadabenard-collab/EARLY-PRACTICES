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

function processNumber(number, callBack){
    return double(number);

}

function double(number) {
    return number * 2;    
}

let nummy = processNumber(4, double);
console.log(nummy);

function createCounter(){
    let count = 0;

    return function close(){
        count ++
        console.log(count);
        
    }
}

let closure = createCounter()

closure()
closure()
closure()
closure()
closure()

let load = "Loading..."

console.log(load);

setTimeout(() => {
    load = "Data Loaded succesfully";
    console.log(load);
    
}, 3000)


fetch("https://api.open-meteo.com/v1/forecast?latitude=9.08&longitude=7.49&current_weather=true")
  .then(res => res.json())
  .then(data => console.log(data));


  const url = "https://jsonplaceholder.typicode.com/users";

  async function placeholder(url){

    console.log("Loading...");
    
    try{
        const res = await fetch(url);
        if (!res.ok){
            throw new Error("could not fetch");            
        } else{
            const datas = await res.json();
            console.log(datas);   
            
            datas.forEach(data => {
                console.log(`${data.name} : ${data.email}`);
            })             
        }
          
    }
    catch(error){
        console.error(error.message)
    }
  }

  placeholder(url);



  async function searchGitHubUser(username){
    
    try{
        const res = await fetch (`https://api.github.com/users/${username}`);
        if(!res.ok){
            throw new Error("User can not be found")
        } else{
            const data = await res.json();
            console.log(data.name);
            console.log(data.bio);
            console.log(data.followers);
        }
    } catch(error){
        console.error(error.message)
    }
    
  }

  searchGitHubUser("Bernard");


/*async function posts(){
    
    try{
        const res = await fetch (`https://jsonplaceholder.typicode.com/posts`);

        if(!res.ok){
            throw new Error("No posts")
        } else{
            const datas = await res.json();
            console.log(datas);

           datas.forEach(data => {
            if(data.id >= 0 && data.id <= 10){
                console.log(data.body);
            }
            const mapping = datas.map(data => {
                console.log(data.title);
                
            })
           } )
        }
    } catch(error){
        console.error(error.message)
    }
    
  }

  posts();*/

  async function posts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Could not fetch posts");
    }

    const datas = await res.json();

    const firstTen = datas.slice(0, 10);


    const titles = firstTen.map(post => post.title);

    console.log(titles);

    return titles;

  } catch (error) {
    console.error(error.message);
  }
}

posts();



 








