// Floating heart animation
const container = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '💕';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '0px';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Auto-play audio on first user interaction (mobile fix)
window.addEventListener('touchstart', () => {
  const music = document.getElementById('bgMusic');
  if (music.paused) music.play();
}, { once: true });
// Surprise reveal handler
const button = document.getElementById("revealButton");
const message = document.getElementById("surpriseMessage");

button.addEventListener("click", () => {
  button.style.display = "none";
  message.classList.remove("hidden");

  // Add bonus floating hearts for the surprise
  for (let i = 0; i < 10; i++) {
    setTimeout(() => createHeart(), i * 150);
  }
});
