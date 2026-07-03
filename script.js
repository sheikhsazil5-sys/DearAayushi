/* ===========================
   Dear Mahi
   Script.js
=========================== */

// 🌸 Falling Petals

const petals = document.querySelector(".petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
    (8 + Math.random()*5) + "s";

    petal.style.opacity =
    (0.4 + Math.random()*0.6);

    petal.style.transform =
    `rotate(${Math.random()*360}deg)`;

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },13000);

}
const overlay = document.getElementById("overlay");
const envelope = document.querySelector(".envelope");
const continueBtn = document.getElementById("continueBtn");

if(openBtn){

openBtn.addEventListener("click",()=>{

overlay.classList.add("active");

setTimeout(()=>{

envelope.classList.add("open");

},500);

});

}

if(continueBtn){

continueBtn.addEventListener("click",()=>{

overlay.classList.remove("active");

envelope.classList.remove("open");

document.querySelector(".story").scrollIntoView({
behavior:"smooth"
});

});

}



/* ===========================
   Scroll Reveal
=========================== */

const sections = document.querySelectorAll(

".story,.timeline,.gallery,.special,.letter,.music,.ending"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.style.opacity="1";

entry.style.transform="translateY(0)";

}

});

},

{

threshold:.15

}

);

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});


/* ===========================
   Button Hover
=========================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

}

