const goalInput = document.getElementById("goalInput");
const category = document.getElementById("category");
const goalList = document.getElementById("goalList");
const countdown = document.getElementById("countdown");
const quoteText = document.getElementById("quoteText");

const quotes = [
  "New year, new beginnings.",
  "Small steps every day.",
  "Consistency creates success.",
  "Focus. Work. Achieve.",
  "Make 2026 your breakthrough year."
];

// Load saved goals
window.onload = () => {
  const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
  savedGoals.forEach(displayGoal);
};

// Add Goal
function addGoal() {
  if (goalInput.value === "") return;

  const goal = {
    text: goalInput.value,
    category: category.value
  };

  displayGoal(goal);

  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(goal);
  localStorage.setItem("goals", JSON.stringify(goals));

  playSound();
  goalInput.value = "";
}

// Display Goal
function displayGoal(goal) {
  const div = document.createElement("div");
  div.className = "goal-card";
  div.innerHTML = `<p>${goal.text}</p><span>${goal.category}</span>`;
  goalList.appendChild(div);
}

// Clear all goals
function clearGoals() {
  localStorage.removeItem("goals");
  goalList.innerHTML = "";
}

// Countdown
function updateCountdown() {
  const newYear = new Date("Jan 1, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = newYear - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((gap / (1000 * 60)) % 60);

  countdown.innerText = `${days} Days ${hours} Hours ${minutes} Minutes to 2026 🎆`;
}
setInterval(updateCountdown, 1000);

// Quotes auto change
let i = 0;
setInterval(() => {
  quoteText.innerText = quotes[i];
  i = (i + 1) % quotes.length;
}, 3000);

// Button sound
function playSound() {
  const sound = new Audio("click.mp3");
  sound.play();
}
