window.onscroll = () => showTopbtn();
document.querySelector(".topbtn").onclick = () => movetop();

function showTopbtn() {
  if (document.documentElement.scrollTop > 450) {
    gsap.to(".topbtn", {
      opacity: 1,
      right: "0%",
      duration: 1,
    });
  } else {
    gsap.to(".topbtn", {
      opacity: 0,
      right: "-10%",
      duration: 1,
    });
  }
}
function movetop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
