
// Display today's date
const dateElement = document.getElementById('current-date');
const today = new Date();
dateElement.innerText = today.toLocaleDateString('en-US');

// Countdown Timer
const targetDate = new Date('2024-12-13T16:30:00');
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (difference < 0) {
    countdownElement.textContent = 'The event has started!';
  }
}

setInterval(updateCountdown, 1000);

// Generate Balloons
for (let i = 0; i < 10; i++) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * window.innerWidth + 'px';
  balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
  balloon.style.animationDuration = Math.random() * 5 + 7 + 's';

  const rope = document.createElement('div');
  rope.classList.add('rope');
  balloon.appendChild(rope);

  document.body.appendChild(balloon);
}

// Generate Stars
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.animationDelay = Math.random() * 3 + 's';
  document.body.appendChild(star);
}

// Generate Snowfall
for (let i = 0; i < 30; i++) {
  const snow = document.createElement('div');
  snow.classList.add('snow');
  snow.style.left = Math.random() * window.innerWidth + 'px';
  snow.style.animationDuration = Math.random() * 3 + 4 + 's';
  document.body.appendChild(snow);
}
