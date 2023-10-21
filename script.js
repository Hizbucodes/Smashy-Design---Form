document.querySelectorAll('*').forEach(elem => {
    if (elem.offsetWidth > document.documentElement.offsetWidth) {
    console.log('Problem child: ', elem);
    }
    });

const successMessage = () => {
    const modal = document.createElement("div");
    const success_logo = document.createElement("img");
    const h1 = document.createElement("h1");
    const info = document.createElement("p");
    const button = document.createElement("button");
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
  
    success_logo.src="./assets/success-logo/checkmark.png";
    modal.style.width = "400px";
    modal.style.height = "200px"
    modal.style.position = "absolute";
    modal.style.top = "30%";
    modal.style.color = "#05253C"
    modal.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    modal.style.backgroundColor = "white";
    modal.style.display = "flex";
    modal.style.alignItems = "center"
    modal.style.justifyContent = "flex-start"
    modal.style.flexDirection = "column"
    modal.style.gap = "10px"
    info.textContent = "Your form has been successfully submitted.";
    h1.textContent = "Success!";
    button.textContent = "Ok";
    button.style.width = "20rem";
    button.style.fontSize = "1.1rem";
    button.style.backgroundColor = "#FFDC47";
    button.style.height = "2rem";
    button.style.outline = "none";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.zIndex="1"
    button.addEventListener("click", function () {
        modal.style.display = "none";
        const first_name = document.getElementById("first_name");
        const last_name = document.getElementById("last_name");
        const email = document.getElementById("email");
        const address = document.getElementById("address");
        first_name.value = "";
        last_name.value = "";
        email.value = "";
        address.value = "";
        
    });

    button.addEventListener("mouseover",function(){
        button.style.backgroundColor = "#05253C"
        button.style.color = "#FFDC47"
        button.style.transition = ".5s ease";
    })
    button.addEventListener("mouseout",function(){
        button.style.backgroundColor = "#FFDC47"
        button.style.color = "#05253C"
    })
    success_logo.style.position="relative";
    success_logo.style.width = "3rem"
    success_logo.style.top = "-1.5rem"
    modal.appendChild(success_logo)
    modal.appendChild(h1);
    modal.appendChild(info);
    modal.appendChild(button);
    document.body.append(modal);
    
    if(mediaQuery.matches){
        modal.style.width = "300px"
        h1.style.fontSize = "0.8rem";
        info.style.fontSize = "0.7rem"
        button.style.width = "10rem";
    }
};


var regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,20})$/;

let _email = document.getElementById("email");
let _fname = document.getElementById("fname");

_email.addEventListener("keyup",function(e){
      
    if(!regex.test(_email.value)){
        e.target.style.color = "red";
     }else if(regex.test(_email.value)){
         e.target.style.color = "black";
     }
});



document.querySelector('form').onsubmit = (e) => {

const error_fname = document.getElementById("error_fname");
const error_lname = document.getElementById("error_lname");
const error_email = document.getElementById("error_email");
const error_address = document.getElementById("error_address");

const first_name = document.getElementById("first_name").value;
const last_name = document.getElementById("last_name").value;
const email = document.getElementById("email").value;
const address = document.getElementById("address").value;


    if(first_name.trim() === "" || first_name.trim() === null){
        error_fname.style.visibility = "visible";
        error_fname.innerText = "This field is required.";
        return false;
    }else{
        error_fname.innerText = "";
    }

    if(last_name.trim() === "" || last_name.trim() === null){
        error_lname.style.visibility = "visible";
        error_lname.innerText = "This field is required."
        return false;
    }else{
        error_lname.innerText = "";
    }

    if(!regex.test(email)){
        error_email.style.visibility = "visible";
        error_email.innerText = "Invalid email address";
        return false;
    }else{
        error_email.innerText = "";
    }
    
    if(address.trim() === "" || address.trim() === null){
      error_address.style.visibility = "visible";
      error_address.innerText = "This field is required."
      return false;
    }else{
        error_address.innerText = "";
    }


    successMessage();
    e.preventDefault();        
};