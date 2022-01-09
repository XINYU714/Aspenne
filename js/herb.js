let imgArr = [
  "src/h1.webp",
  "src/h2.webp",
  "src/h3.webp",
  "src/h4.webp",
  "src/h5.webp",
  "src/h6.webp",
  "src/h7.webp",
  "src/h8.webp",
  "src/h9.webp",
  "src/h10.webp",
  "src/h11.webp",
  "src/h12.webp",
  "src/h13.webp",
  "src/h14.webp",
  "src/h15.webp",
  "src/h16.webp",
  "src/h17.webp",
  "src/h18.webp",
  "src/h19.webp",
  "src/h20.webp",
  "src/h21.webp",
];
gsap.registerPlugin(ScrollTrigger);
let index = 0;
function prebntEvent() {
  index--;
  if (index < 0) {
    index = imgArr.length - 1;
  }
  gsap.fromTo(
    ".herbct",
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: Power2.easeOut }
  );
  herbimg.src = imgArr[index];
}
function nextbtnEvent() {
  index++;
  if (index > imgArr.length - 1) {
    index = 0;
  }
  gsap.fromTo(
    ".herbct",
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: Power2.easeOut }
  );
  herbimg.src = imgArr[index];
}
document.querySelector(".prebtn").onclick = () => prebntEvent();
document.querySelector(".nextbtn").onclick = () => nextbtnEvent();
