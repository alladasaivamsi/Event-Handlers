let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let button = document.getElementById('submit-button');
let contentDiv = document.getElementById('content');

    emailInput.addEventListener("change",validate);
    passwordInput.addEventListener("change",validate);

let contentemaildiv=document.getElementById('contentemail');
let contentpassworddiv=document.getElementById('contentpassword');

    emailInput.onchange=validate();
    passwordInput.onchange=validate();

function validate() 
{
    let email = emailInput.value;
    let password = passwordInput.value;

    if(email !="" && email.includes("@") && email.length>3 && email.includes(".") && password != "" && password.length>8) 
    {
        contentDiv.innerText="All good to go!";
        contentDiv.style.color="green";
        contentemaildiv.innerText="";
        contentpassworddiv.innerText="";
        button.removeAttribute("disabled");    
    } 
      
    else
    {
        contentDiv.innerText="";
        contentemaildiv.innerText="Make sure email is more than 3 characters and has @ and a.";
        contentemaildiv.style.color="red";
        contentpassworddiv.innerText=" Make sure password is more than 8 characters.";
        contentpassworddiv.style.color="red";
    }    
}

function signup() 
{
    alert("successful signup!");
}