let form =
document.getElementById("my form");

let passwordInput =
document.getElementById("password");
let error =
document.getElementById("error");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let password = passwordInput.value.trim();

    if(password === "")
    {
        error.style.color ="red";
        error.innerText ="password is required!";

    }else if (password.length < 6){
        error.style.color ="red";
        error.innerText ="password must be at least 6 characters!";
    }else {
        error.style.color = "green";
        error.innerText ="Form submitteed successfully!";
    }

});