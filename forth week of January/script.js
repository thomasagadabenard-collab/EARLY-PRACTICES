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
