const envelope = document.getElementById('envelope');
const openButton = document.getElementById('openButton');
const hint = document.getElementById('hint');
const music = document.getElementById('music');
const heartsContainer = document.getElementById('hearts');
let opened = false;

openButton.addEventListener('click', () => {
  opened = !opened;
  envelope.classList.toggle('open', opened);
  openButton.setAttribute('aria-expanded', String(opened));
  openButton.innerHTML = opened ? 'Cerrar mi cartita <span>♡</span>' : 'Abrir mi cartita <span>♡</span>';
  hint.textContent = opened ? 'un abrazo enorme, aunque sea a la distancia ♡' : 'toca el botoncito para descubrirla';
  music.classList.toggle('visible', opened);
  music.setAttribute('aria-hidden', String(!opened));
  if (opened) burstHearts(36);
});

const symbols = ['♡', '♥', 'ღ', '✧', '❥', '❣'];
function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 26}px`;
  heart.style.animationDuration = `${7 + Math.random() * 9}s`;
  heart.style.setProperty('--drift', `${-100 + Math.random() * 200}px`);
  heart.style.setProperty('--heart-opacity', `${.3 + Math.random() * .48}`);
  heart.style.color = ['#e6afc1','#d98fa6','#efc3d2','#c88da3','#f0b8cb'][Math.floor(Math.random()*5)];
  heart.style.animationDelay = `${Math.random() * .5}s`;
  heartsContainer.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove(), { once: true });
}
function burstHearts(amount) { for (let i = 0; i < amount; i++) setTimeout(createHeart, i * 35); }
// Dense, continuous hearts across the entire viewport, plus a scattered initial layer.
burstHearts(45);
setInterval(createHeart, 260);
