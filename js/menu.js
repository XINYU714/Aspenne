const show = gsap.timeline();
show
  .fromTo(
    ".fly",
    {
      opacity: 0,
      xPercent: -100,
      yPercent: -50,
      left: "0%",
      top: "50%",
      ease: Expo.easeOut,
    },
    {
      opacity: 1,
      duration: 0.8,
      xPercent: -100,
      yPercent: -50,
      left: "100%",
      top: "50%",
    }
  )
  .to(".push", {
    left: "0%",
    duration: 1,
  })
  .to(".push", {
    background: "#0000004d",
  })
  .to(
    ".overlay-content a",
    {
      opacity: 1,
      stagger: {
        amount: 1,
        each: 0.5,
        from: "start",
        ease: "power2.inOut",
      },
    },
    "<"
  );

show.pause();
document.querySelector("#menu").onclick = () => show.play();
document.querySelector("#close").onclick = () => show.reverse();

// function hiddenScroll() {
//   document.body.style.overflow = "hidden";
// }
// function openScroll() {
//   document.body.style.overflow = "auto";
// }
