let styleHeight = document.head.appendChild(document.createElement("style"));
getHeight();
window.onresize = () => getHeight();
function getHeight() {
  let indexbgHeight = document.querySelector("img.mbg").clientHeight;
  styleHeight.innerHTML =
    ".linear::after {top: calc(" +
    indexbgHeight +
    "px " +
    "-" +
    " 120px" +
    ");};";
}

gsap.registerPlugin(ScrollTrigger);
let start = gsap.timeline();
start
  .from(" .mbg", { duration: 1.5, opacity: 0 })
  .fromTo(
    ".title",
    { xPercent: -50, yPercent: -50, y: -50, opacity: 0 },
    { xPercent: -50, yPercent: -50, y: 0, duration: 1.5, opacity: 1 },
    "<"
  )
  .from(".mainrole", { opacity: 0, duration: 0.8 })
  .fromTo(
    ".mainrole",
    { y: -10, xPercent: -50, yPercent: -50 },
    { duration: 1.2, y: 10, yoyo: true, repeat: -1 }
  );

/*DownLoad Btn*/
let dlBtn = document.querySelector(".download");
dlBtn.onmouseover = () => changeDl();
dlBtn.onmouseleave = () => leaveDl();

function changeDl() {
  dlBtn.src = "./src/dl_down.png";
}
function leaveDl() {
  dlBtn.src = "./src/dl.png";
}
/*Tab Open*/
let introText = document.querySelector(".gameintro");
function showIntro() {
  gsap.to(".gameintro", { opacity: 1, duration: 0.5 });
  introText.style.display = "block";
}
function closeIntro() {
  gsap.to(".gameintro", { opacity: 0 });
  introText.style.display = "none";
}
document.querySelector(".gameintro").onclick = () => closeIntro();
document.querySelector(".mainrole").onclick = () => showIntro();
