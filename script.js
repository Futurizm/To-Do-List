const input = document.getElementById('row-input-text');
const listContainer = document.getElementById('list-container');

function addEvent() {
    if (input.value === "") {
        alert("You have to write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    input.value = "";
    dataSaver();
}


listContainer.addEventListener("click", function(clicked) {
    if (clicked.target.tagName == "LI") {
        clicked.target.classList.toggle("checked");
        dataSaver();
    }
    else if(clicked.target.tagName == "SPAN") {
        clicked.target.parentElement.remove();
        dataSaver();
    }
}, false);


function dataSaver() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function dataAfterClosing() {
    listContainer.innerHTML = localStorage.getItem("data");
}

dataAfterClosing();