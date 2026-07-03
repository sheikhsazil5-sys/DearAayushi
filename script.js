/* ===========================
   Dear Mahi
   Script.js
=========================== */
// Falling Petals
const popupMessage = `Before you continue...

Thank you for opening this little corner of my heart.

I hope this little surprise brings a smile to your face.

❤️`;

const petals = document.querySelector(".petals");
function typePopupLetter(){

    const letter = document.getElementById("popupLetter");
const btn = document.getElementById("continueBtn");

btn.style.opacity = "0";
btn.style.transform = "translateY(15px)";
    letter.innerHTML = "";

    let i = 0;

    const typing = setInterval(()=>{

        if(i < popupMessage.length){

            if(popupMessage.charAt(i) === "\n"){

                letter.innerHTML += "<br>";

            }else{

                letter.innerHTML += popupMessage.charAt(i);

            }

            i++;

        }else{

            clearInterval(typing);
           letter.innerHTML = popupMessage.replace(/\n/g,"<br>");
           btn.style.opacity = "1";
btn.style.transform = "translateY(0)";

        }

    },80);

}

function createPetal(){

    const petal=document.createElement("div");

    petal.classList.add("petal");

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(8+Math.random()*5)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },13000);

}

setInterval(createPetal,500);


// Envelope

const openBtn=document.getElementById("openBtn");
const overlay=document.getElementById("overlay");
const envelope=document.querySelector(".envelope");
const continueBtn=document.getElementById("continueBtn");
openBtn.addEventListener("click",()=>{

    alert("Open Button Clicked");

    overlay.classList.add("active");

    setTimeout(()=>{

        envelope.classList.add("open");

        typePopupLetter();
       letter.innerHTML =
popupMessage.substring(0,i).replace(/\n/g,"<br>") +
'<span class="cursor"></span>';

    },800);

});

continueBtn.addEventListener("click",()=>{

overlay.classList.remove("active");

envelope.classList.remove("open");

document.querySelector(".story").scrollIntoView({

behavior:"smooth"

});

});


// Scroll Reveal

const sections=document.querySelectorAll(".story,.timeline,.gallery,.special,.letter,.music,.ending");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});
