/* Put code for the task below */
const submit = document.getElementById("submit");
const fullName = document.getElementById("fullName");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const email = document.getElementById("email");


submit.addEventListener("click", my_function);
function my_function() {

    if (fullName.value === '') {
        fullName.style.backgroundColor = "red";
    } else {
        fullName.style.backgroundColor = 'white';
    }


    if (address.value === '') {
        address.style.backgroundColor = "red";
    } else {
        address.style.backgroundColor = 'white';
    }


    if (phone.value === '') {
        phone.style.backgroundColor = "red";
    } else {
        phone.style.backgroundColor = 'white';
    }


    if (email.value === '') {
        email.style.backgroundColor = "red";
    } else {
        email.style.backgroundColor = 'white';
    }
}