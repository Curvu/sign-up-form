const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const phone = document.getElementById('phone-number')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

const errMessage = document.querySelector('.error-message')

const form = document.querySelector('form')

form.onsubmit = (e) => {
    e.preventDefault()

    const person = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    
    if (person.password !== person.confirmPassword) {
        // add new text saying that pw does not match
        password.classList.add('error')
        confirmPassword.classList.add('error')
        errMessage.style.display = 'flex'
    } else {
        password.classList.remove('error')
        confirmPassword.classList.remove('error')
        errMessage.style.display = 'none'
    };
}