var topBtn = document.querySelector(".topbtn");
function goTop() {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    // document.querySelector(".topbtn").classList.add("show");
    gsap.to(topBtn, {
      opacity: 1,
      visibility: "visible",
      right: "0%",
      duration: 1,
    });
  } else {
    gsap.to(topBtn, {
      opacity: 0,
      visibility: "hidden",
      right: "-10%",
      duration: 0.8,
    });
  }
}
window.onscroll = () => goTop();

function movetop() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.querySelector(".topbtn").onclick = () => movetop();
