// Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  this.querySelectorAll("img").forEach((img) => {
    img.classList.toggle("current");
  });
  document.querySelector(".menu").classList.toggle("active");
});
document.querySelectorAll(".menu .menu-item:has(.sub-menu)").forEach((item) => {
  item.addEventListener("click", function () {
    item.querySelector(".sub-menu").classList.toggle("active");
  });
});

document.querySelectorAll(".search-toggle").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".search-panel").classList.toggle("active");
  });
});
