const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
        jump();
    }
});

function jump () {
    if  (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        alreadyJump = true;
        setTimeout(() => {
            dino.classList.remove("jump");
            alreadyJump = false;
        }, 1100);
    }
}

setInterval(()  => {
    let dinoBottom = parseInt(
        window.getComputedStyle(dino).getPropertyValue("bottom")
    );
    let cactoLeft = parseInt(
        window.getComputedStyle(cacto).getPropertyValue("left")
    )
    if (cactoLeft > 40 && cactoLeft < 270 && dinoBottom <= 50 && !alreadyJump) {
        alert(`Game Over! Seu SCORE foi: ${count}`);
}

    count++;
    score.innerHTML = `SCORE: ${count}`
}, 10);