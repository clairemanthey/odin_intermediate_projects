const form = document.getElementById("form");
let inputs = document.querySelector(".input");
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


firstName.addEventListener("input", (event) => {
	if(firstName.validity.valid){
		firstNameError.textContent = "";
		firstNameError.className = "error";
		firstName.style.border = "1px solid #00B800";

	}else{
		showFirstNameError();
	}
});

let showFirstNameError = () => {
	if(firstName.validity.tooShort){
		firstName.style.border = "1px solid #EC323E";
	}
	firstName.className = "error active";
};

lastName.addEventListener("input", (event) => {
	if(lastName.validity.valid){
		lastNameError.textContent = "";
		lastNameError.className = "error";
		lastName.style.border = "1px solid #00B800";
	}else{
		showFirstNameError();
	}
});


let showLastNameError = () =>{
	if(lastName.validity.tooShort){
		lastName.style.backgroundColor = "1px solid red";
	}

	lastName.className = "error active";
};

emailInput.addEventListener("input", (event) =>{
	if(emailInput.validity.valid){
		emailError.textContent = "";
		emailError.className = "error";
		emailInput.style.border = "1px solid #00B800"
	}else{
		showError();
	}
});

let showError = () => {
	if(emailInput.validity.valueMissing){
		emailInput.style.border = "1px solid #EC323E";
	}else if(emailInput.validity.typeMismatch){
		emailInput.style.border = "1px solid #EC323E";
	}
	emailError.className = "error active";
};

phoneNum.addEventListener("input", (event) => {
	if(phoneNum.validity.valid){
		phoneNumError.textContent = "";
		phoneNumError.className = "error";
		phoneNum.style.border = '1px solid #00B800';
	}else{
		showPhoneNumeError();
	}
});

let showPhoneNumeError = () => {
	if(phoneNum.validity.patternMismatch){
		phoneNum.style.border = "1px solid #EC323E";
	}
	phoneNum.className = "input";
};

password.addEventListener("input", (event) => {
	if(password.validity.valid){
		passwordError.textContent = "";
		passwordError.className = "error";
		password.style.border = "1px solid #00B800";
	}else{
		showPasswordError();
	}
});

let showPasswordError = () => {
	if(password.validity.tooShort){
		password.style.border = "1px solid #EC323E";
	}
	password.className = "input error active";
};

confirmPassword.addEventListener("input", (event) =>{
	let passwordVal = password.value;
	let confirmPasswordVal = confirmPassword.value;
	if(passwordVal === confirmPasswordVal){
		confirmPassword.style.border = "1px solid #00B800"
	}else{
		confirmPassword.style.border = "1px solid #EC323E"
	}
});

submitBtn.addEventListener("click", () => {

})