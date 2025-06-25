gsap.fromTo(
    ".concept-first .column-left",
    2,
    {
        x: -100,
        opacity: 0
    },
    {
        x: 0,
    opacity: 1,
    scrollTrigger:{
        trigger: ".concept-first .column-left",
        start: "top center",
        // markers: true
    }
    }
)