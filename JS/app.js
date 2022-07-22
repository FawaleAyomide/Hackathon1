const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
   link.classList.toggle("fade");
  });
});

const number = "09011...., 07040...., ";
// const MTN = "";
// const Glo = "";
// const Etisalat = "";

// let numb = prompt('Input Number');
if (number === "09011....") {
  console.log('Airtel');
}