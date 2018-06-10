// Form Blur Event Listners 

document.getElementById('name').addEventListner('blur', validateName);
document.getElementById('zip').addEventListner('blur', validateZip);
document.getElementById('email').addEventListner('blur', validateEmail);
document.getElementById('phone').addEventListner('blur', validatePhone);


function validateName() {
	const validateName = document.getElementById('name');
	const re = /^[a-zA-Z]{2, 10}$/;

	if (!re.test(name.value)) {
		name.classList.add('is-invalid');
	} else {
		name.classList.remove('is-invalid');
	}
}

function validateZip() {
	const validateZip = document.getElementById('zip');
	const re = /^[0-9]{5}(-[0-9]{4})?$/;

	if (!re.test(zip.value)) {
		zip.classList.add('is-invalid');
	} else {
		zip.classList.remove('is-invalid');
	}
}

function validateEmail() {
	const validateName = document.getElementById('name');
	const re = /^[a-zA-Z]{2, 10}$/;

	if (!re.test(name.value)) {
		name.classList.add('is-invalid');
	} else {
		name.classList.remove('is-invalid');
	}
}

function validatePhone() {
	const validateName = document.getElementById('name');
	const re = /^[a-zA-Z]{2, 10}$/;

	if (!re.test(name.value)) {
		name.classList.add('is-invalid');
	} else {
		name.classList.remove('is-invalid');
	}
}