
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.getElementById("contactButton");
const close = document.getElementById("closemodal");
const btnClose = document.querySelector(".btn-close");
//DOM FORM Elements 
const firstName = document.getElementById("first"); // prenom
const lastName = document.getElementById("last"); // nom
const mail = document.getElementById("email");// mail
const btnSubmit = document.querySelector("btn-submit");
//const formValid = document.querySelector(".formValid"); // modal form valid


// launch modal event
//modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn.addEventListener("click", launchModal);


// display modal form
function launchModal() {
  document.querySelector(".bground").style.display = "block";
}

//console.log(launchModal());
//close modal form
function closeModal(){
  modalbg.style.display = "none";
}

// close modal event
close.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

//verify email 
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validateEmail(){
  if (!mail.value.match(mailformat)){ 
  return false;
    }
  return true;
}

//console.log(btnSubmit)
//btnSubmit.addEventListener("click",validate);

//check if FORM is valid
function validate(){

  if (firstName.value.length < 2 || !firstName.value.match(/^([a-zA-Z]+)$/)) {  // verify first name input has more than 2 characters 
    document.getElementById('errorFirstName').style.display='block'; //display error message
    firstName.focus(); // focus on input
    return false; 
  }else{
    console.log('prenom :', firstName.value); 
    document.getElementById('errorFirstName').style.display="none";
  }

  if (lastName.value.length < 2 || !lastName.value.match(/^([a-zA-Z]+)$/)) {  //verify last name input has more than 2 characters
    document.getElementById('errorLastName').style.display='block'; //display error message
    lastName.focus(); 
    return false;
  }else{ 
    console.log('nom:' , lastName.value);
    document.getElementById('errorLastName').style.display="none"; 
  }
  
  if(!validateEmail(mail)){  //verify mail format
    document.getElementById('errorMail').style.display="block"; //display error message
    mail.focus();
    return false;
  } else{
    console.log('email:' , mail.value);
    document.getElementById('errorMail').style.display="none";
  }

  alert('Votre message a été envoyé');
  modalbg.style.display = "none";
}



/*
if(window.location.href.indexOf("?first=") > 1){ //verify get method on submit
  formValid.style.display = "block"; //display validation message
}

*/
