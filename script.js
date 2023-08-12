
import {redirectToAnotherPage, viewMoreEvent,cursorMove,Menu } from "./utils.js"


const cursor = document.querySelector('.cursor')
const main = document.querySelector('.main')
const serviceCard = document.querySelectorAll('.card-container')
const hamburger = document.querySelector('.hamburger')
const bottomNav = document.querySelector('.bottom-nav')
const images = document.querySelectorAll('.img')

cursorMove(main,cursor) // for cursor movement
Menu(hamburger,bottomNav) // to open menu or close
viewMoreEvent(serviceCard,cursor); //to apply hover effect on service card
viewMoreEvent(images,cursor) // to apply hover effect on images 

redirectToAnotherPage(images,"pages/gallery/gallery.html")