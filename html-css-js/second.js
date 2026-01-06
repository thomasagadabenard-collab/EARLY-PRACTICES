let counterInput = document.querySelector(".counter-input");
let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");




add.addEventListener("click", () => {
    counterInput.textContent = Number(counterInput.textContent) + 1;
});

minus.addEventListener("click", () => {
    let currentValue = counterInput.textContent;

    if(currentValue > 0){
        counterInput.textContent = Number(currentValue) - 1;
        
    }
    
});

reset.addEventListener("click", () => {
    counterInput.textContent = 0;
});



let calculatorScreen = document.querySelector(".calculator-screen")

let one = document.querySelector(".one");

let two = document.querySelector(".two");

let three = document.querySelector(".three");

let four = document.querySelector(".four");

let five = document.querySelector(".five");

let six = document.querySelector(".six");

let seven = document.querySelector(".seven");

let eight = document.querySelector(".eight");

let nine = document.querySelector(".nine");

let zero = document.querySelector(".zero");

let resets = document.querySelector(".resets");

let sub = document.querySelector(".sub");

let plus = document.querySelector(".plus");

let times = document.querySelector(".times");

let divide = document.querySelector(".divide");

let equals = document.querySelector(".equals");



let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetScreen = false;

function appendNumber(number) {
    if (shouldResetScreen) {
        calculatorScreen.innerText = "";
        shouldResetScreen = false;
    }
    calculatorScreen.innerText += number;
}

function chooseOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstNumber = calculatorScreen.innerText;
    currentOperator = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetScreen) return;
    secondNumber = calculatorScreen.innerText;
    let result;
    switch(currentOperator) {
        case "+":
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case "-":
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case "*":
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case "/":
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }
    calculatorScreen.innerText = result;
    currentOperator = null;
}

one.addEventListener("click", () => appendNumber("1"));
two.addEventListener("click", () => appendNumber("2"));
three.addEventListener("click", () => appendNumber("3"));
four.addEventListener("click", () => appendNumber("4"));
five.addEventListener("click", () => appendNumber("5"));
six.addEventListener("click", () => appendNumber("6"));
seven.addEventListener("click", () => appendNumber("7"));
eight.addEventListener("click", () => appendNumber("8"));
nine.addEventListener("click", () => appendNumber("9"));
zero.addEventListener("click", () => appendNumber("0"));

// Operator buttons
plus.addEventListener("click", () => chooseOperator("+"));
sub.addEventListener("click", () => chooseOperator("-"));
times.addEventListener("click", () => chooseOperator("*"));
divide.addEventListener("click", () => chooseOperator("/"));

// Equals button
equals.addEventListener("click", evaluate);

// Reset button
resets.addEventListener("click", () => {
    calculatorScreen.innerText = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
});



let modal = document.querySelector(".modal");

let end = document.querySelector(".modal-x")

setTimeout(() => {
    modal.classList.add("show-modal");
}, 5000);


let wind = () => {
    window.addEventListener("click", () => {
        modal.classList.remove("show-modal");
    })
}
end.addEventListener("click", () => {
    modal.classList.remove("show-modal");
})



/*let clickable = document.querySelector(".tabs-div-head");
let para = document.querySelector(".tabs-div-paragraph")

let isClicked = false;

clickable.addEventListener("click", () => {
    isClicked = !isClicked;

    if(isClicked){
        para.classList.add("tab-open");
    } else{
        para.classList.remove("tab-open")
    }

});*/

let tabs = document.querySelectorAll(".tabs-div-head");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        let para = tab.nextElementSibling;
        para.classList.toggle("tab-open");
    });
});

let Pee = document.querySelector(".parag");

window.addEventListener("load", () => {
    Pee.innerText = "Welcome";
});



let spa = document.querySelector(".spa");

let spaBtn = document.querySelector(".spa-btn");

spaBtn.addEventListener("click", () => {
    spa.innerHTML = Number(spa.innerHTML) + 1; 
})


let toggle = document.querySelector(".toggle");

let isBlue = false;

toggle.addEventListener("click", () => {
    isBlue = !isBlue;
    
    if (isBlue){
        document.body.style.backgroundColor = "Blue";
    } else {
        document.body.style.backgroundColor = "white";

    }
})


let inp = document.querySelector(".inp");

let inpBtn = document.querySelector(".inp-btn");

let unordered = document.querySelector(".unordered");

inpBtn.addEventListener("click", () => {
    if(inp === ""){
        return;
    } else{
        let li = document.createElement("li");
        li.innerText = inp.value;
        unordered.appendChild(li);
        inp.value = "";
    }


})

let formInput = document.querySelector(".form-input");

console.log(formInput);


let formPara = document.querySelector(".form-paragraph");

console.log(formPara);


let formBtn = document.querySelector(".form-btn");

console.log(formBtn);


formBtn.addEventListener("click", () => {
    if (formInput.value.trim() === "") {
        formPara.classList.add("active");
    } else {
        formPara.classList.remove("active");
    }
});

let modalTwo = document.querySelector(".modal-two");

let modalOpen = document.querySelector(".modal-open");

let modalClose = document.querySelector(".modal-close");

modalOpen.addEventListener("click", () => {
    modalTwo.classList.add("active");
})

modalClose.addEventListener("click", () => {
    modalTwo.classList.remove("active");
})



let lca = document.querySelector("#live-count-area");

let lcp = document.querySelector(".live-count-para")

lca.addEventListener("input", () => {
    lcp.innerText = lca.value.length;
})


let disableInput = document.querySelector(".disable-input");
let disableBtn = document.querySelector(".disable-btn");

disableInput.addEventListener("input", () => {
    if (disableInput.value.trim() === "") {
        disableBtn.disabled = true;
    } else {
        disableBtn.disabled = false;
    }
});


let thumbs = document.querySelectorAll(".thumb"); // select all thumbs

thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        thumb.classList.toggle("active");
    });
});

let images = document.querySelectorAll(".image");
let forward = document.querySelector(".gallery-forward");
let backward = document.querySelector(".gallery-backward");

let currentIndex = 0;
let imageWidth = 330; // 300px image + 30px gap

function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }

    images.forEach(img => {
        img.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    });
}

forward.addEventListener("click", () => {
    showImage(currentIndex + 1);
});

backward.addEventListener("click", () => {
    showImage(currentIndex - 1);
});























