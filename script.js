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

const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");
const envelope = document.querySelector(".envelope");
const continueBtn = document.getElementById("continueBtn");

openBtn.addEventListener("click",()=>{

    overlay.classList.add("active");

    setTimeout(()=>{

        envelope.classList.add("open");

        typePopupLetter();

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
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closeImage = document.getElementById("closeImage");

document.querySelectorAll(".photo img").forEach(img=>{

    img.addEventListener("click",()=>{

        popup.style.display="flex";
        popupImg.src=img.src;

    });

});

closeImage.addEventListener("click",()=>{

    popup.style.display="none";

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});
// ===============================
// Final Surprise
// ===============================

const lastBtn = document.getElementById("lastBtn");
const finalPopup = document.getElementById("finalPopup");
const finalText = document.getElementById("finalText");
const closeFinal = document.getElementById("closeFinal");

const finalMessage = `Dear Mahi ❤️

Thank you for being one of the most beautiful chapters of my life.

No matter what happens in the future, I'll always smile whenever I remember these moments.

You are truly special.

Keep smiling... Always. 🌸`;

function typeFinalMessage() {

    finalText.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        if (i < finalMessage.length) {

            if (finalMessage.charAt(i) === "\n") {
                finalText.innerHTML += "<br>";
            } else {
                finalText.innerHTML += finalMessage.charAt(i);
            }

            i++;

        } else {

            clearInterval(typing);

        }

    }, 40);

}

lastBtn.addEventListener("click", () => {
lastBtn.addEventListener("click", () => {

    alert("Final Button Clicked");

    finalPopup.style.display = "flex";

    typeFinalMessage();

});
    finalPopup.style.display = "flex";

    typeFinalMessage();

});

closeFinal.addEventListener("click", () => {

    finalPopup.style.display = "none";

});
