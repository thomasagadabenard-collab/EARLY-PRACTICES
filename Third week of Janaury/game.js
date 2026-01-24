let gameInput = document.querySelector(".game-input");

let gameButton = document.querySelector(".game-button");

let rightGuess = document.querySelector(".right-guess");

let wrongGuess = document.querySelector(".wrong-guess");

let closeButtons = document.querySelectorAll(".x");

let myGuess = (10 *(Math.random()) + 1);

let newGuesss = Math.floor(myGuess);

console.log(newGuesss);

function fnOne() {
    let userGuess = Number(gameInput.value); 
    if (userGuess === newGuesss) {
        rightGuess.classList.add("active");
    } else {
        wrongGuess.classList.add("active");
    }
}

function fnTwo(){
    rightGuess.classList.remove("active");
    wrongGuess.classList.remove("active");
}

gameButton.addEventListener("click", () => {   
    fnOne();   
});

closeButtons.forEach(btn => {
    btn.addEventListener("click", () =>{
        rightGuess.classList.remove("active");
        wrongGuess.classList.remove("active");
        gameInput.value = "";
    })
})
