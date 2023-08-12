
import {hideLoader,cursorMove,Menu ,init,Video} from "../../utils.js"

const loader = document.querySelector('.loader')

const cursor = document.querySelector('.cursor')
const main = document.querySelector('.main')
const hamburger = document.querySelector('.hamburger')
const bottomNav = document.querySelector('.bottom-nav')
const videos = document.querySelectorAll('video')

init()

cursorMove(main,cursor)

Video(videos,cursor)
Menu(hamburger,bottomNav)



gsap.from('.photo-gallery img',{
    y : 50,
    scrollTrigger: {
        trigger: ".page-heading h1",
        scroller: ".main",
        markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3,
    },
});

gsap.from('.photo-gallery video',{
    y : 50,
    scrollTrigger: {
        trigger: ".page-heading h1",
        scroller: ".main",
        markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3,
    },
});



hideLoader(loader)
