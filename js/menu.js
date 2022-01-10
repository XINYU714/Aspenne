const show=gsap.timeline();
let menu=
show.fromTo(".fly", 
{opacity:0,xPercent:-100,yPercent:-50,left:"0%",top:"50%",ease:Expo.easeOut},
{opacity:1,duration:0.8,xPercent:-100,yPercent:-50,left:"100%",top:"50%"});
show.to('.push',{left:"0%",duration:1});
show.to(".overlay-content a", {
        opacity:1, 
        stagger:{
        amount:1,
        each:0.5,
        from:"start",
        ease: "power2.inOut",
        }
      });
      menu.pause();
document.querySelector("#menu").onclick = () => menu.play();
document.querySelector("#close").onclick = () => menu.reverse();
