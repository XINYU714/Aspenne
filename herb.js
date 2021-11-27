let imgArr=["src/h1.png","src/h2.png","src/h3.png","src/h4.png","src/h5.png","src/h6.png","src/h7.png","src/h8.png","src/h9.png",
"src/h10.png","src/h11.png","src/h12.png","src/h13.png","src/h14.png","src/h15.png","src/h16.png","src/h17.png","src/h18.png","src/h19.png","src/h20.png","src/h21.png"];
gsap.registerPlugin(ScrollTrigger);
 let index=0;
 function prebntEvent()
 {
   index--;
   if (index < 0) {
       index = imgArr.length - 1;        
   }
   gsap.fromTo('.herbct',{opacity:0},{opacity:1,duration:1,ease:Power2.easeOut});
   herbimg.src = imgArr[index];
 }
 function nextbtnEvent()
 {
   index++;
   if (index > imgArr.length - 1) {
       index = 0;
   }
   gsap.fromTo('.herbct',{opacity:0},{opacity:1,duration:1.2,ease:Power2.easeOut});
   herbimg.src = imgArr[index];

 }
 document.querySelector('.prebtn').onclick=()=>prebntEvent();
 document.querySelector('.nextbtn').onclick=()=>nextbtnEvent();