const petals=document.querySelector(".petals");

function createPetal(){

const petal=document.createElement("div");

petal.classList.add("petal");

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petal.style.opacity=Math.random();

petals.appendChild(petal);

setTimeout(()=>{
petal.remove();
},11000);

}

setInterval(createPetal,300);
