const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const addRemove = () => {
  links.classList.toggle('show-links');
}

navToggle.addEventListener("click", addRemove);





















