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

gsap.fromTo(
    ".concept-first .column-right",
    2,
    {
        x: 100,
        opacity: 0
    },
    {
        x: 0,
    opacity: 1,
    delay: 0.5,
    scrollTrigger:{
        trigger: ".concept-first .column-right",
        start: "top center",
        // markers: true
    }
    }
)





gsap.fromTo(
    ".concept-second .column-left",
    2,
    {
        x: -100,
        opacity: 0
    },
    {
        x: 0,
    opacity: 1,
    delay: 0.5,
    scrollTrigger:{
        trigger: ".concept-second .column-left",
        start: "top center",
        // markers: true
    }
    }
)

gsap.fromTo(
    ".concept-second .column-right",
    2,
    {
        x: 100,
        opacity: 0
    },
    {
        x: 0,
    opacity: 1,
    scrollTrigger:{
        trigger: ".concept-second .column-right",
        start: "top center",
        // markers: true
    }
    }
)
