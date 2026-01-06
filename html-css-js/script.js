function sum(a,b){
    console.log(a+b);
    
}
 sum(3,6)
let ab = sum(2,5);

console.log(ab);


function addd(a,b){
    return(a+b);
}

let summ = addd(4,9);
console.log(summ);


function Person(name, age){
    this.age = age;
    this.name = name;
}

const person1 = new Person("Thomas", 30);
const person2 = new Person("Bola", 72);

console.log(person1);
console.log(person1.age);
console.log(person1.name);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}

const p1 = new Person("Alex", 28);
p1.greet();

let prices = [200,400,50,600,900];

let total = prices.reduce((sum,pre) => sum + pre,0);

console.log(total);

let pricess = [200,400,50,600,900];

let totals = prices.reduce((sum,pres) => sum - pres,0);

console.log(totals);

