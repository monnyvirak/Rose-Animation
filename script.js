const wishButton = document.querySelector("#wish-button");
const wishNote = document.querySelector("#wish-note");
const petalBurst = document.querySelector("#petal-burst");

wishButton.addEventListener("click", () => {
  wishNote.textContent = "Your birthday wish is on its way. ✨";
  wishButton.querySelector("span").textContent = "Wish sent!";
  wishButton.disabled = true;

  for (let index = 0; index < 24; index += 1) {
    const petal = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 24 + Math.random() * 0.3;
    const distance = 90 + Math.random() * 150;
    const duration = 1.4 + Math.random() * 1.3;

    petal.className = "burst-petal";
    petal.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    petal.style.setProperty("--y", `${Math.sin(angle) * distance - 50}px`);
    petal.style.setProperty("--rotation", `${Math.random() * 560 - 280}deg`);
    petal.style.setProperty("--duration", `${duration}s`);
    petal.style.animationDelay = `${Math.random() * 180}ms`;
    petalBurst.append(petal);
    window.setTimeout(() => petal.remove(), duration * 1000 + 250);
  }
});
