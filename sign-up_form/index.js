const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + span.error")

const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector("#last-name + span.error")

const emailInput = document.getElementById("input-email");
const emailError = document.querySelector("#input-email + span.error");

const phoneNum = document.getElementById("phone-number");
const phoneNumError = document.querySelector("#phone-number + span.error");

const password = document.getElementById("input-password");
const passwordError = document.querySelector("#input-password + span.error");

const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password + span.error")
const submitBtn = document.getElementById("btn-submit");


emailInput.addEventListener("input", (event) =>{
	if(emailInput.validity.valid){
		emailError.textContent = "";
		emailError.className = "error";
	}else{
		showError();
	}
});

let showError = () => {
	if(emailInput.validity.valueMissing){
		emailInput.textContent = "Please enter a valid email address";
	}else if(emailInput.validity.typeMismatch){
		emailError.textContent = "Please enter a valid email address";
	}
	emailError.className = "error active";
};

firstName.addEventListener("input", (event) => {
	if(firstName.validity.valid){
		firstNameError.textContent = "";
		firstNameError.className = "error";
		firstName.style.backgroundColor = "green";

	}else{
		showFirstNameError();
	}
});

let showFirstNameError = () => {
	if(firstName.validity.tooShort){
		//firstName.textContent = `First name should be at least ${firstName.minLength} characters`;
		firstName.style.backgroundColor = "orange";

	}/*else if(firstName.validity.tooLong){
		firstName.textContent = `Maximum number of characters ${firstName.minLength}`;
	} */

	firstName.className = "error active";
};

lastName.addEventListener("input", (event) => {
	if(lastName.validity.valid){
		lastNameError.textContent = "";
		lastNameError.className = "error";
		lastName.style.backgroundColor = "green";

	}else{
		showFirstNameError();
	}
});


let showLastNameError = () =>{
	if(lastName.validity.tooShort){
		lastName.style.backgroundColor = "orange";
	}
	lastName.className = "error active";
};


phoneNum.addEventListener("input", (event) => {
	if(phoneNum.validity.valid){
		phoneNumError.textContent = "";
		phoneNumError.className = "error";
		phoneNum.style.backgroundColor = 'green';
	}else{
		showPhoneNumeError();
	}
});

let showPhoneNumeError = () => {
	if(phoneNum.validity.patternMismatch){
		phoneNum.style.backgroundColor = "orange";
		phoneNumError.textContent = "Enter in xxx-xxx-xxxx form";
	}
	phoneNum.className = "error active";
};

password.addEventListener("input", (event) => {

	if(password.validity.valid){
		passwordError.textContent = "";
		passwordError.className = "error";
		password.style.backgroundColor = "green";
	}else{
		showPasswordError();
	}
});

let showPasswordError = () => {
	if(password.validity.tooShort){
		password.style.backgroundColor = "orange";
	}
	password.className = "input error active";
};

confirmPassword.addEventListener("input", (event) =>{
	let passwordVal = password.value;
	let confirmPasswordVal = confirmPassword.value;
	console.log(passwordVal);
	console.log(confirmPasswordVal)
	if(passwordVal === confirmPasswordVal){
		confirmPassword.style.backgroundColor = "green"
		console.log("password match");
	}else{
		confirmPassword.style.background = "orange"
		console.log("passwords don't match");
	}
});