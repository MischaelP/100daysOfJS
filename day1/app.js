const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
let compteur = document.querySelector(".count")

//clics sur les boutons
function increaseScore() {
    compteur.innerHTML++;
    
}
function decreaseScore() {
    compteur.innerHTML--; 
}
function resetScore(){
    compteur.innerHTML = 0;
}


increase.addEventListener('click', increaseScore);
decrease.addEventListener('click', decreaseScore);
reset.addEventListener('click', resetScore);
