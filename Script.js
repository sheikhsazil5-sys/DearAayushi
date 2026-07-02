window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").classList.add("loader-hide");

    }, 2500);

});
// Smooth button effect
const button = document.getElementById("openBtn");

button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.08)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
});

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

setInterval(createHeart, 700);
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
