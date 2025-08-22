const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnHero = document.getElementById("btn-hero");
const color = document.querySelector(".color");
 

btnHero.addEventListener ("click", function(){
    let randomColor = getRandomNumber()

    document.body.style.backgroundColor=colors[randomColor]
    color.textContent = colors[randomColor]
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}

//console.log(getRandomNumber())