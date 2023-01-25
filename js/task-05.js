const nameInput = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        output.textContent = "Anonymous";
    } else {        
        output.textContent = event.currentTarget.value;
    }
    
});



