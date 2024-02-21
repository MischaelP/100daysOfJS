const btn = document.querySelector(".generate");
const container = document.querySelector("#container");
const hexNumber = document.querySelector(".hexNumber")

hexNumber.innerHTML = ""
const randNumber = () => {
    let number = "#" + (Math.floor(Math.random()*100000)).toString(16).toUpperCase();
    console.log(number)
    return number
}

const colorChange = () => {
    const color = randNumber();
    hexNumber.innerHTML = color;
    container.style.backgroundColor = color;
}


btn.addEventListener('click', colorChange)