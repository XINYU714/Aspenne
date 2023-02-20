let imgArr = [];
for (let i = 0; i < 22; i++) {
  imgArr.push(`src/h${i + 1}.webp`);
}
gsap.registerPlugin(ScrollTrigger);
let index = 0;
function prebntEvent() {
  index--;
  if (index < 0) {
    index = imgArr.length - 1;
  }
  herbimg.src = imgArr[index];
}
function nextbtnEvent() {
  index++;
  if (index > imgArr.length - 1) {
    index = 0;
  }
  herbimg.src = imgArr[index];
  gsap.fromTo(
    ".herbct",
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: Power2.easeOut }
  );
}
document.querySelector(".prebtn").onclick = () => prebntEvent();
document.querySelector(".nextbtn").onclick = () => nextbtnEvent();
