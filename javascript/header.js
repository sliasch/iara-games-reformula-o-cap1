const navbar = document.getElementById("navbar");
const navbarSpace = document.createElement("div");

navbarSpace.style.display = "none";
navbar.parentNode.insertBefore(navbarSpace, navbar);

const navbarTop = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= navbarTop) {
    if (!navbar.classList.contains("fixed")) {
      navbarSpace.style.display = "block";
      navbarSpace.style.height = `${navbar.offsetHeight}px`;
      navbar.classList.add("fixed");
    }
  } else {
    if (navbar.classList.contains("fixed")) {
      navbar.classList.remove("fixed");
      navbarSpace.style.display = "none";
    }
  }
});