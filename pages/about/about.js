import { Video,cursorMove,Menu,init } from "../../utils.js"


const cursor = document.querySelector('.cursor')
const main = document.querySelector('.main')
const hamburger = document.querySelector('.hamburger')
const bottomNav = document.querySelector('.bottom-nav')
const Media = document.querySelectorAll('.our-studio-container video')

init()

cursorMove(main,cursor)

Menu(hamburger,bottomNav)

Video(Media,cursor)



// animation 



var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page-heading h1",
        scroller: ".main",
        markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3,
    },
});


t1.from('#about-main', {
   width : "50%"
},"anim")

t1.from('.about-second  div', {
    y : 200
},"anim")


var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".our-team h1",
        scroller: ".main",
        markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 2,
    },
});

t1.from('.team-container .team-card', {
    y : 500
},"anim")
t2.from('.our-studio-container div', {
    y : 50
},"anim")

