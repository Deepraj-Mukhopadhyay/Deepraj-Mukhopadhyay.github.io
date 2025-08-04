const toggleButton = document.getElementById("toggle-mode");
const icon = document.querySelector(".slider-icon i");

toggleButton.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.replace("fa-lightbulb", "fa-moon");
    icon.classList.remove("glow-bulb");
    icon.classList.add("glow-moon");
  } else {
    icon.classList.replace("fa-moon", "fa-lightbulb");
    icon.classList.remove("glow-moon");
    icon.classList.add("glow-bulb");
  }
});
