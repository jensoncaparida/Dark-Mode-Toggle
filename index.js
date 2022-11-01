const toggle = document.querySelector(".toggle");
const h1 = document.querySelector("h1");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggle.src = "thumbnails/Light_Mode Toggle.svg";
    h1.textContent = "Dark Mode";
  } else {
    toggle.src = "thumbnails/Dark_Mode Toggle.svg";
    h1.textContent = "Light Mode";
  }
});
