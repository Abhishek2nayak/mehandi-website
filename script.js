import {
  hideLoader,
  redirectToAnotherPage,
  viewMoreEvent,
  cursorMove,
  Menu,
} from "./utils.js";

const loader = document.querySelector(".loader");
const cursor = document.querySelector(".cursor");
const main = document.querySelector(".main");
const serviceCard = document.querySelectorAll(".card-container");
const hamburger = document.querySelector(".hamburger");
const bottomNav = document.querySelector(".bottom-nav");
const images = document.querySelectorAll(".img");

redirectToAnotherPage(serviceCard, "pages/our work/our-work.html");
redirectToAnotherPage(images, "pages/gallery/gallery.html");
viewMoreEvent(serviceCard, cursor); //to apply hover effect on service card
viewMoreEvent(images, cursor); // to apply hover effect on images
cursorMove(main, cursor); // for cursor movement
Menu(hamburger, bottomNav); // to open menu or close

hideLoader(loader);
