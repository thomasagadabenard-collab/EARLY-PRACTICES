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