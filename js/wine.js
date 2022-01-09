let frame_count = 2,
  offset_value = 150;
let drinkingtext = [".drinkingtl", ".drinkingct"];
gsap.registerPlugin(ScrollTrigger);
gsap.to(".down", {
  backgroundPosition: -offset_value * frame_count * 2 + "px 0%",
  ease: "steps(" + frame_count + ")",
  scrollTrigger: {
    trigger: ".down",
    pin: true,
    pinspacing: true,
    toggleActions: "play none restart reset",
    start: "top center",
    end: "+=" + 0.5 * offset_value,
    scrub: true,
    snap: true,
  },
});

gsap.to(".drinking1", {
  repeat: -1,
  yoyo: true,
  y: "+=20",
  skewY: 1,
  duration: 2,
});
gsap.to(".drinking2", {
  repeat: -1,
  yoyo: true,
  y: "-=15",
  skewY: 1,
  duration: 1.5,
});
gsap.to(".drinking3", { repeat: -1, yoyo: true, y: "+=10", duration: 3 });
gsap.from(drinkingtext, {
  ease: Power0.easeOut,
  opacity: 0,
  y: "30%",
  duration: 1.2,
  scrollTrigger: {
    trigger: ".drinking",
    toggleActions: "play none restart reset",
    start: "top center",
    end: "bottom center",
    delay: 0.5,
  },
});
gsap.from(".drinkingt1", {
  ease: Power0.easeOut,
  opacity: 0,
  y: "50%",
  duration: 2,
  scrollTrigger: {
    trigger: ".drinkingt1",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none restart none",
    // markers: true,
    scrub: 0.8,
  },
});
gsap.from(drinkingtext, {
  ease: Power0.easeOut,
  opacity: 0,
  y: "40%",
  duration: 1.8,
  scrollTrigger: {
    trigger: drinkingtext,
    start: "top center",
    // end: "top center",
    toggleActions: "play none restart none",
    // markers: true,
  },
});

let dkshow = gsap.timeline();
const drinkingshow = window.matchMedia("(max-width: 768px)");
function drinkingTextChange(drinkingshow) {
  if (drinkingshow.matches) {
    dkshow.from(".drinkingt2", {
      ease: Power0.easeOut,
      opacity: 0,
      y: "40%",
      duration: 2,
      scrollTrigger: {
        trigger: ".drinkingt1",
        start: "top center",
        end: "top center",
        toggleActions: "play none restart reset",
        scrub: 0.8,
      },
    });
  } else {
    dkshow.from(".drinkingt2", {
      ease: Power0.easeOut,
      opacity: 0,
      y: "40%",
      duration: 2,
      scrollTrigger: {
        trigger: ".drinkingt2",
        start: "top center",
        end: "top center",
        toggleActions: "play none restart reset",
        scrub: 0.8,
      },
    });
  }
}
drinkingTextChange(drinkingshow);
