// To-Do Application 

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerHTML = `${inp.value}&nbsp;&nbsp;`;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("delete");

    if(li.innerText != "") {
        ul.appendChild(li);
        li.appendChild(dltBtn);
    }
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove(listItem);
    }
});
