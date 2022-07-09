const email = document.getElementById("email")
const btn = document.getElementById("btn")
const small = document.querySelector("small")


btn.addEventListener('click', function(event){
    event.preventDefault()
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regex.test(email.value)){
        small.classList.add("hide")
        email.style.border ="2px solid hsl(0, 0%, 59%)"
    }else{
        email.style.border = "2px solid red"
        small.classList.remove("hide")
        small.innerHTML = "Please provide a valid email address"
        error.classList.remove("hide")
    }
})