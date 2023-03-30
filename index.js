const email = document.querySelector("#email");
const formSubmit = document.querySelector("#form-submit");

formSubmit.addEventListener("click", function() {
	alert("I appreciate the email you sent " + email.value + " regarding to your question. Have a wonderful day!")
})