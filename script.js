const wishButton = document.querySelector("#wish-button");
const loveNote = document.querySelector("#love-note");
const heartBurst = document.querySelector("#heart-burst");

wishButton.addEventListener("click", () => {
  loveNote.hidden = false;
  wishButton.querySelector("span").textContent = "Surprise opened";
  wishButton.disabled = true;

  for (let index = 0; index < 22; index += 1) {
    const heart = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 22 + Math.random() * 0.35;
    const distance = 70 + Math.random() * 120;
    const duration = 1.2 + Math.random() * 1.1;

    heart.className = "burst-heart";
    heart.textContent = "♥";
    heart.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    heart.style.setProperty("--y", `${Math.sin(angle) * distance - 55}px`);
    heart.style.setProperty("--rotation", `${Math.random() * 100 - 50}deg`);
    heart.style.setProperty("--size", `${12 + Math.random() * 12}px`);
    heart.style.setProperty("--duration", `${duration}s`);
    heartBurst.append(heart);
    window.setTimeout(() => heart.remove(), duration * 1000 + 100);
  }
});
