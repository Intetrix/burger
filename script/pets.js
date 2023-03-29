//burger menu

const burgerButton = document.querySelector("#burger_button");
const navigation = document.querySelector("#burger__nav");
const body = document.querySelector("body");
const backdrop = document.querySelector(".backdrop");
const footerLink = document.querySelector(".footer-link");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
  body.classList.toggle("opened");
  backdrop.classList.toggle("active");
});

footerLink.addEventListener("click", () => {
  burgerButton.classList.remove("active");
  navigation.classList.remove("active");
  body.classList.remove("opened");
  backdrop.classList.remove("active");
});
