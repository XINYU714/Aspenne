let fire = [".fitl", ".firetext"];
let water = [".wttl", ".watertext"];
let tear = [".trtl", ".teartext "];
let pin = [".pintl", ".pintext"];
let weight = [".whtl", ".weighttext"];
gsap.registerPlugin(ScrollTrigger);
gsap.to(".path1", {
  repeat: -1,
  yoyo: true,
  skewY: 0.8,
  y: "-=12",
  x: "+=2",
  duration: 1.5,
  scrollTrigger: {},
});
gsap.to(".path2", {
  repeat: -1,
  yoyo: true,
  skewY: 0.5,
  y: "+=8",
  x: "-=2",
  duration: 1.2,
  scrollTrigger: {},
});
gsap.to(".path3", {
  repeat: -1,
  yoyo: true,
  skewX: 0.5,
  y: "-=15",
  x: "-=5",
  duration: 1.2,
  scrollTrigger: {},
});
let frame_count = 4,
  offset_value = 106.5;

gsap.to(".tearbg", {
  backgroundPosition: -offset_value * frame_count * 2 + "px 50%",
  ease: "steps(" + frame_count + ")",
  scrollTrigger: {
    trigger: ".tear",
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "+=" + frame_count * offset_value,
    scrub: true,
    snap: 1,
  },
});

gsap.to(".firebg", {
  ease: Power3.easeOut,
  x: "+=15",
  scale: 1.1,
  scrollTrigger: {
    trigger: ".fire",
    pin: false,
    pinSpacing: false,
    start: "top center",
    scrub: 1,
  },
});
/*text show*/
gsap.from(".introtext", {
  opacity: 0,
  y: "-20%",
  duration: 2,
  scrollTrigger: {
    trigger: ".introtext",
    toggleActions: "play none restart reset",
  },
});
gsap.from(fire, {
  opacity: 0,
  y: "-20%",
  duration: 2,
  scrollTrigger: {
    trigger: fire,
    toggleActions: "play none restart reset",
  },
});
gsap.from(water, {
  opacity: 0,
  y: "-20%",
  duration: 2,
  scrollTrigger: {
    trigger: water,
    toggleActions: "play none restart reset",
  },
});
gsap.from(tear, {
  opacity: 0,
  y: "-20%",
  duration: 2,
  scrollTrigger: {
    trigger: tear,
    toggleActions: "play none restart reset",
  },
});
gsap.from(pin, {
  opacity: 0,
  y: "-20%",
  duration: 2,
  scrollTrigger: {
    trigger: pin,
    toggleActions: "play none restart reset",
  },
});
gsap.from(weight, {
  opacity: 0,
  y: "-30%",
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: weight,
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
gsap.to(".libra", {
  bottom: "0%",
  duration: 2,
  scrollTrigger: {
    trigger: ".libra",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
const attack = gsap.timeline();
// const topbtn = gsap.timeline();
attack.to(".attack", { duration: 1.5, yoyo: true, repeat: -1, rotation: 15 });
const attackChange = window.matchMedia("(max-width: 768px)");
function myFunction(attackChange) {
  if (attackChange.matches) {
    attack.fromTo(
      ".attack",
      {
        xPercent: 0,
        yPercent: 0,
        top: "0%",
        right: "-10%",
      },
      {
        xPercent: 0,
        yPercent: 0,
        top: "60%",
        right: "50%",
        scrollTrigger: {
          trigger: ".pin",
          pin: true,
          pinSpacing: true,
          start: "top top",
          snap: true,
          scrub: true,
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
          snap: true,
          scrub: true,
        },
      }
    );
    gsap.to(".weightwitch", {
      opacity: 1,
      left: "40%",
      top: "45%",
      scale: "0.3",
      duration: 2.5,
      scrollTrigger: {
        trigger: ".weight",
        // start: "top top",
        toggleActions: "play none restart reset",
      },
    });
  } else {
    attack.fromTo(
      ".attack",
      {
        xPercent: 0,
        yPercent: 0,
        top: "0%",
        right: "-10%",
      },
      {
        xPercent: 0,
        yPercent: 0,
        top: "30%",
        right: "45%",
        scrollTrigger: {
          trigger: ".pin",
          pin: true,
          pinSpacing: true,
          start: "top top",
          snap: true,
          scrub: true,
          // markers: true,
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
          snap: true,
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.to(".weightwitch", {
      opacity: 1,
      left: "85%",
      top: "70%",
      scale: "0.4",
      duration: 2.5,
      scrollTrigger: {
        trigger: ".weight",
        start: "top top",
        toggleActions: "play none restart reset",
      },
    });
  }
}
myFunction(attackChange);

const weightwitchclcik = document.querySelector(".weightwitch");
const rootElement = document.documentElement;
function toTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
weightwitchclcik.onclick = () => toTop();
