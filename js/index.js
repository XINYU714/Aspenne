gsap.registerPlugin(ScrollTrigger);
/*starani*/
gsap.from(" .mbg", { duration: 2, opacity: 0 }, 1);
gsap.from(".mainrole", { duration: 2, opacity: 0 }, 3);
var start = gsap.timeline();
start
  .from(".title", { y: -50, duration: 2, opacity: 0 }, 2)
  .fromTo(
    ".mainrole",
    { y: -10, xPercent: -50, yPercent: -50 },
    { duration: 1.2, y: 10, yoyo: true, repeat: -1 },
    -1
  );

/*download*/
var dlBtn = document.querySelector(".download");

dlBtn.onmouseover = () => changeDl();
dlBtn.onmouseleave = () => leaveDl();

function changeDl() {
  dlBtn.src = "./src/dl_down.png";
}
function leaveDl() {
  dlBtn.src = "./src/dl.png";
}
/*anne say*/
var introText = document.querySelector(".gameintro");
function showintro() {
  gsap.from(".gameintro", { opacity: 0, duration: 1.2 });
  introText.style.display = "block";
}
function closeintro() {
  introText.style.display = "none";
}
document.querySelector(".gameintro").onclick = () => closeintro();
document.querySelector(".mainrole").onclick = () => showintro();
