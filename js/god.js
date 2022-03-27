let fire = [".fitl", ".firetext"];
let water = [".wttl", ".watertext"];
let tear = [".trtl", ".teartext "];
let pin = [".pintl", ".pintext"];
let weight = [".whtl", ".weighttext"];
gsap.registerPlugin(ScrollTrigger);
// let eyeswidtth = document.querySelector();
let frame_count = 4,
  offset_value = 106.5;

gsap.to(".tearbg", {
  backgroundPosition: -offset_value * frame_count * 2 + "px 50%",
  ease: "steps(" + frame_count + ")",
  scrollTrigger: {
    trigger: ".tear",
    pin: true,
    start: "top top",
    end: "+=" + frame_count * offset_value,
    // scrub: true,
    scrub: true,
    // markers: true,
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
    // ScrollTrigger.refresh();
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
          // pinSpacing: true,
          start: "top top",
          // snap: true,
          end: "+=" + "300px",
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
          // pinSpacing: true,
          // snap: true,
          scrub: true,
          // markers: true,
        },
      }
    );
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
        },
      }
    );
  }
}
myFunction(attackChange);

// const weightwitchclcik = document.querySelector(".weightwitch");
// const rootElement = document.documentElement;
// function toTop() {
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
// weightwitchclcik.onclick = () => toTop();
