const counter = document.querySelector(".counter");
const counterSpan = document.querySelector(".counter-span");

const MAX_LENGTH = 200;

function inputfn() {
    const currentLength = counter.value.length;
    const remaining = MAX_LENGTH - currentLength;

    counterSpan.textContent = remaining;

    if (remaining < 0) {
        counterSpan.style.color = "red";
    } else {
        counterSpan.style.color = "black";
    }
}

counter.addEventListener("input", inputfn);
