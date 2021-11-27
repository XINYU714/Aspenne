const open=gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
const main=['.mbg','.title','#anne'];
const t1=gsap.timeline();

/*info*/
let info=
open.to('.introContent',{right:"0%",duration:1});
info.pause();
document.querySelector('.info').onclick=()=>info.play();
document.querySelector(".introClose").onclick = () => info.reverse();

/*main ani*/
gsap.to('#main',{opacity:1,duration:2});
t1.fromTo(".mbg", {scale:1.3,ease: 
  Back.easeOut.config(1.7) },{duration:1.2,scale:1});
t1.fromTo(".title",{y:-10,xPercent:-50, yPercent:-50},{duration:1.2,y:10});
gsap.fromTo('#anne',{y:-10,xPercent:-50, yPercent:-50},{duration:1.2,y:10,yoyo:true,repeat:-1})


const anneani = bodymovin.loadAnimation({
  container: document.getElementById('anne'), 
  path: 'anne.json', 
  renderer: 'svg', 
  loop: true,
  autoplay: true,
})
anneani.setSpeed(0.5);
/*anne say*/
function showintro()
{
  let annesay=gsap.timeline();
  annesay.to('.gameintro',{opacity:1,duration:1});
  annesay.to('.gameintro',{opacity:0,duration:2},2);
}
document.querySelector('#anne').onclick=()=>showintro();



