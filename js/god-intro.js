gsap.registerPlugin(ScrollTrigger);

gsap.from(".intro-wrapper > div ", {
  opacity: 0,
  y: "20%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".intro-wrapper > div",
    toggleActions: "play none restart reset",
  },
});
gsap.to(".libra", {
  bottom: "0%",
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".libra",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
//   fire
gsap.from(".fire-wrapper", {
  opacity: 0,
  ease: Power2.easeOut,
  y: "20%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".fire-wrapper",
    scrub: 1,
    toggleActions: "play none restart reset",
  },
});
// tear
gsap.from(".tear-wrap", {
  opacity: 0,
  ease: Power2.easeOut,
  y: "20%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".tear-wrap",
    scrub: 1,
    toggleActions: "play none restart reset",
  },
});
// pin
gsap.from(".pin-wrapper", {
  opacity: 0,
  ease: Power2.easeOut,
  y: "20%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".pin-wrapper",
    scrub: 1,
    toggleActions: "play none restart reset",
  },
});
// weight
gsap.from(".weight-wrapper", {
  opacity: 0,
  ease: Power2.easeOut,
  y: "20%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".weight-wrapper",
    scrub: 1,
    toggleActions: "play none restart reset",
  },
});
// water
gsap.from(".water-wrapper", {
  opacity: 0,
  ease: Power2.easeOut,
  y: "20%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".water-wrapper",
    start: "top bottom",
    scrub: 0.5,
    toggleActions: "play none restart reset",
  },
});
//tear
let frame_count = 4,
  offset_value = 306.5;
gsap.to(".tearbg", {
  backgroundPosition: -offset_value * frame_count * 2 + "px 50%",
  ease: "steps(" + frame_count + ")",
  scrollTrigger: {
    trigger: ".tear",
    start: "top top",
    end: "center top",
    scrub: 0.5,
  },
});

// attack

gsap.to(".attack", { duration: 1.5, yoyo: true, repeat: -1, rotation: 15 });
const attackChange = window.matchMedia("(max-width: 768px)");
const attacklabtop = window.matchMedia("(max-width: 1440px)");
function myFunction(attackChange) {
  if (attackChange.matches) {
    gsap.fromTo(
      ".attack",
      {
        top: "30%",
        right: "-10%",
      },
      {
        top: "70%",
        right: "50%",
        scrollTrigger: {
          trigger: ".pin",
          start: "top center",
          end: "center top",
          scrub: 0.3,
        },
      }
    );

    gsap.fromTo(
      ".attackhand",
      {
        xPercent: 0,
        yPercent: 0,
        bottom: "0%",
        left: "-25%",
      },
      {
        xPercent: 0,
        yPercent: 0,
        bottom: "5%",
        left: "-15%",
        scrollTrigger: {
          trigger: ".pin",
          start: "top center",
          end: "center top",
          scrub: 0.3,
        },
      }
    );
  } else if (attacklabtop.matches) {
    gsap.fromTo(
      ".attack",
      {
        top: "30%",
        right: "-10%",
      },
      {
        top: "50%",
        right: "50%",
        scrollTrigger: {
          trigger: ".pin",
          start: "top top",
          end: "center top",
          scrub: 0.3,
        },
      }
    );

    gsap.fromTo(
      ".attackhand",
      {
        xPercent: 0,
        yPercent: 0,
        bottom: "0",
        left: "-25%",
      },
      {
        xPercent: 0,
        yPercent: 0,
        bottom: "10%",
        left: "-15%",
        scrollTrigger: {
          trigger: ".pin",
          start: "top top",
          end: "center top",
          scrub: 0.3,
        },
      }
    );
  } else {
    gsap.fromTo(
      ".attack",
      {
        top: "30%",
        right: "-10%",
      },
      {
        top: "40%",
        right: "50%",
        scrollTrigger: {
          trigger: ".pin",
          start: "top top",
          end: "center top",
          scrub: 0.3,
        },
      }
    );

    gsap.fromTo(
      ".attackhand",
      {
        xPercent: 0,
        yPercent: 0,
        bottom: "0",
        left: "-25%",
      },
      {
        xPercent: 0,
        yPercent: 0,
        bottom: "0",
        left: "-15%",
        scrollTrigger: {
          trigger: ".pin",
          start: "top top",
          end: "center top",
          // pinSpacing: true,
          scrub: 0.3,
        },
      }
    );
  }
}
myFunction(attackChange);
