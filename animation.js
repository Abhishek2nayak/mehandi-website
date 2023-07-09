
// loader animation of landing page images 

gsap.from(" #img-1", {
     y : "50px",
     delay:1,
     duration : .5,
     opacity : 0,
     ease : Power4,

})
gsap.from(" #img-2", {
    x : "50px",
    delay:1,
    duration : .5,
    opacity : 0,
    ease : Power4,

})

gsap.from(" #img-3", {
    x : "-50px",
    delay:1,
    duration : .5,
    opacity : 0,
    ease : Power4,

})


// text animation 
gsap.from(".hero-container h1", {
    y: "50px",
    delay:2,
    duration : .5,
    opacity : 0,
    ease : Power4,

})
gsap.from(".hero-container .links", {
    y: "50px",
    delay:2.5,
    duration : .5,
    opacity : 0,
    ease : Power4,

})

