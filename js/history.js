let timeHeight = document.getElementById("time").style.height;
let myvalue = [".timesub", ".timecontent"];
let showtime = [".timecontent", ".timesub", ".clock"];
let breadtext = [".breadtl", ".breadsub"];
let herbimg = document.getElementById("herbImg");
let houseMix = [".town", ".rural"];

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.refresh();
gsap.to(".maintl", {
  duration: 2,
  opacity: 1,
  ease: Power3.easeOut,
  y: "-=10%",
});
gsap.to(".mainobj", { duration: 2, opacity: 1, ease: Power2.easeOut });
gsap.to(".mainobj-mob", { duration: 2, opacity: 1, ease: Power2.easeOut });
gsap.to(".hour", {
  rotation: 152,
  scrollTrigger: {
    trigger: ".time",
    pin: true,
    start: "top top",
    end: timeHeight,
    snap: true,
    scrub: true,
  },
});
gsap.to(".time", {
  background:
    " linear-gradient(rgba(43,43,43,1) 0%, rgba(43,43,43,1) 95%, rgba(236,237,232,1) 100%)",
  scrollTrigger: {
    trigger: ".time",
    pin: true,
    start: "top top",
    pinspacing: true,
    snap: true,
    scrub: true,
  },
});
gsap.to(myvalue, {
  color: "#fff",
  scrollTrigger: {
    trigger: ".time",
    pin: true,
    start: "top top",
    end: timeHeight,
    snap: true,
    scrub: 1,
  },
});
/*show*/
gsap.from(showtime, {
  ease: Power2.easeOut,
  opacity: 0,
  y: "60%",
  duration: 2,
  scrollTrigger: {
    trigger: ".timecontent",
    toggleActions: "play none restart restart",
  },
});
gsap.from(breadtext, {
  ease: Power1.easeOut,
  opacity: 0,
  y: "80%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".bread",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".rich", {
  ease: Power2.easeOut,
  opacity: 0,
  y: "30%",
  duration: 2,
  scrollTrigger: {
    trigger: ".bread",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".poor", {
  ease: Power2.easeOut,
  opacity: 0,
  y: "30%",
  duration: 2,
  scrollTrigger: {
    trigger: ".bread",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".herbtl", {
  ease: Power2.easeOut,
  opacity: 0,
  stagger: 0.1,
  y: "-20%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".herb",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".herbbox", {
  ease: Power2.easeOut,
  opacity: 0,
  duration: 2.5,
  scrollTrigger: {
    trigger: ".herbbox",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".herbsub span", {
  ease: Power2.easeOut,
  opacity: 0,
  stagger: 0.1,
  y: "-15%",
  duration: 2,
  scrollTrigger: {
    trigger: ".herbsub",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none restart reset",
  },
});

/*衣服*/
gsap.from(".clothgp", {
  ease: Power2.easeOut,
  opacity: 0,
  y: "-15%",
  duration: 2.5,
  scrollTrigger: {
    trigger: ".clothgp",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".richcloth img", {
  ease: Power2.easeOut,
  opacity: 0,
  y: "-20%",
  duration: 2,
  scrollTrigger: {
    trigger: ".richimg",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".clothct", {
  ease: Power2.easeOut,
  opacity: 0,
  y: "20%",
  duration: 2,
  scrollTrigger: {
    trigger: ".clothct",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".poorcloth img", {
  ease: Power2.easeOut,
  opacity: 0,
  y: "20%",
  duration: 2,
  scrollTrigger: {
    trigger: ".poorcloth",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".housetl", {
  opacity: 0,
  y: "-30%",
  duration: 2,
  scrollTrigger: {
    trigger: ".housetl",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(houseMix, {
  ease: Power2.easeOut,
  opacity: 0,
  y: "20%",
  stagger: 0.5,
  duration: 2.5,
  scrollTrigger: {
    trigger: ".compare",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".trafficgp", {
  opacity: 0,
  y: "-30%",
  duration: 2,
  scrollTrigger: {
    trigger: ".trafficgp",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});

gsap.from(".traffica", {
  ease: Power2.easeOut,
  opacity: 0,
  x: "20%",
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".traffica",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
gsap.from(".trafficpa", {
  ease: Power2.easeOut,
  opacity: 0,
  x: "-20%",
  duration: 2,
  scrollTrigger: {
    trigger: ".trafficpa",
    start: "top center",
    toggleActions: "play none restart reset",
  },
});
