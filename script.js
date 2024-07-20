const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  const navBar = document.querySelector(".right");
  navBar.classList.toggle("active");
};
