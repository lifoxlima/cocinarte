const form = document.querySelector("#info")
const name = document.querySelector("#name")
const nameHelp = document.querySelector("#nameHelp")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const checkbox = document.querySelector("#checkbox")

form.addEventListener("submit", (event) =>{
	event.preventDefault()
if (name.value ==="" || email.value ==="" || checkbox.value===""){
	if (name.value===""){
		nameHelp.innerText = "Completa este campo con tu nombre."
	}
	if (email.value===""){
		emailHelp.innerText="Completa este campo con tu dirección de email."
	}
}else {
	form.submit();
}
	})

