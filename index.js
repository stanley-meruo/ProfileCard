const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

// TIME FORMAT
function updateUTCTime() {
  const now = new Date();
  const utcString = now.toUTCString();
  document.getElementById("utc-time").textContent = utcString;
}

// Update the time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);