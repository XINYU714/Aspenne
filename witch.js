gsap.registerPlugin(ScrollTrigger);
let mainbg = [".mainbg", ".front", ".bktree"];
let second = [".fttree", ".midtree"];
const ani = gsap.timeline();
ani
  .from(".moon", { opacity: 0, duration: 1.2, ease: Circ.easeOut })
  .from(mainbg, { opacity: 0, duration: 1.2, ease: Power1.easeOut }, 1.5)
  .to(".maintext", { opacity: 1, duration: 2, y: "+=20" }, 1.5)
  .from(second, { opacity: 0, duration: 1.5 }, 2.5)
  .fromTo(
    ".witchgirl",
    { opacity: 0, xPercent: -50, yPercent: -10, top: "10%", right: "0%" },
    {
      opacity: 1,
      xPercent: -50,
      yPercent: -10,
      top: "10%",
      right: "39%",
      duration: 4.5,
    },
    "<"
  );

gsap.to(second, {
  x: "+=35",
  ease: Sine.easeOut,
  scrollTrigger: {
    trigger: ".fttree",
    start: "top center",
    scrub: 0.5,
  },
});
gsap.to(".bktree", {
  x: "-=25",
  ease: Sine.easeOut,
  scrollTrigger: {
    trigger: ".bktree",
    start: "top center",
    scrub: 0.5,
  },
});
gsap.from(".overview", {
  ease: Expo.easeOut,
  opacity: 0,
  y: "30%",
  duration: 2,
  scrollTrigger: {
    trigger: ".overview",
    start: "top center",
    end: "top center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".placetext", {
  scrollTrigger: {
    trigger: ".placetext",
    toggleActions: "play none restart reset",
  },
  y: "10%",
  opacity: 0,
  duration: 1.5,
});

gsap.from(".closeeyeTitle", {
  opacity: 0,
  y: "40%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".closeeyeTitle",
    start: "top center",
    toggleActions: "play none restart none",
    // markers:true,
  },
});
gsap.fromTo(
  ".lefthand",
  {
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "0%",
  },
  {
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "20%",
    duration: 2.5,
    scrollTrigger: {
      trigger: ".lefthand",
      start: "top center",
      toggleActions: "play none restart reset",
    },
  }
);

gsap.fromTo(
  ".righthand",
  {
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "100%",
  },
  {
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "80%",
    duration: 2.5,
    scrollTrigger: {
      trigger: ".righthand",
      start: "top center",
      toggleActions: "play none restart reset",
    },
  }
);
/*book*/
gsap.from(".bookphoto", {
  opacity: 0,
  y: "20%",
  duration: 1.5,
  ease: Power2.easeOut,
  scrollTrigger: {
    trigger: "#book",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".booktext", {
  opacity: 0,
  ease: Power2.easeOut,
  y: "20%",
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#book",
    toggleActions: "play none restart reset",
  },
});
