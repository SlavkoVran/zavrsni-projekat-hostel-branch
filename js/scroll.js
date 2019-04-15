const slika = document.getElementById("slika");
const prethodna = document.getElementById("prethodna");
const naredna = document.getElementById("naredna");

const slike = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg"
]

let i = 0;
function nazad(){
    i --;
    if(i < 0 ) i = slike.length- 1;
    slika.src=slike[i];
}

function napred(){
    i ++;
    if(i >= slike.length) i = 0;
  slika.src=slike[i];
}

prethodna.addEventListener("click", nazad)
naredna.addEventListener("click", napred )
setInterval(napred, 3000);
