const btn = document.querySelector(".generate")
let randNumber = document.querySelector(".randNumber")


const randomNumber = () => {
    let number = Math.floor(Math.random()*1000);
    return number
}


const afficheNombre = () => {
    randNumber.innerHTML = randomNumber();
    console.log("Bouton cliqué")
}


btn.addEventListener('click', afficheNombre);