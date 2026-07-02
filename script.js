// 🌸 Falling Flower Petals

const petals = document.querySelector(".petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
    (6 + Math.random()*4) + "s";

    petal.style.opacity =
    (0.4 + Math.random()*0.6);

    petal.style.transform =
    `rotate(${Math.random()*360}deg)`;

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },10000);

}

setInterval(createPetal,350);


// ❤️ Button Animation

const btn = document.querySelector("button");

btn.addEventListener("mouseenter",()=>{

    btn.style.transform="translateY(-6px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

    btn.style.transform="translateY(0) scale(1)";

});
