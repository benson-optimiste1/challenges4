function welcomeName(event){
event.preventDefault()
const name = event.target.firstName.value;
const h2 = document.querySelector('h2')
h2.innerText = " Welcome " + name
}

const form = document.querySelector('form')
form.addEventListener('submit', welcomeName)
