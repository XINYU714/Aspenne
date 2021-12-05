let frame_count  = 2,offset_value = 150;
let timeHeight=document.getElementById('time').style.height;
let myvalue=['.timesub','.timecontent'];
let showtime=['.timecontent','.timesub','.clock'];
let breadtext=['.breadtl','.breadsub'];
let drinkingtext=['.drinkingtl','.drinkingct'];
let herbimg=document.getElementById('herbImg');
let house=['.town','.rural'];
let herbct=['.herbbox','.btnbox'];

gsap.registerPlugin(ScrollTrigger);
gsap.to(".drinking1",{repeat:-1,yoyo:true,y:'+=20',skewY:1,duration:2});
gsap.to(".drinking2",{repeat:-1,yoyo:true,y:'-=15',skewY:1,duration:1.5});
gsap.to(".drinking3",{repeat:-1,yoyo:true,y:'+=10',duration:3});
gsap.to('.maintl',{duration:2,opacity:1,ease:Power3.easeOut,y:"-=10%"});
gsap.to('.mainobj',{duration:2,opacity:1,ease:Power2.easeOut});
gsap.to(".hour", {
  rotation:152,
  scrollTrigger: {
    trigger: ".time",
    pin: true,
    start: "top top",
    end: timeHeight,
    snap:true,
    scrub: true,
  }
});
gsap.to('.time', {
  background:' linear-gradient(rgba(43,43,43,1) 0%, rgba(43,43,43,1) 95%, rgba(236,237,232,1) 100%)',
  scrollTrigger: {
    trigger: ".time",
    pin: true,
    start: "top top",
    pinspacing:true,
    snap:true,
    scrub: true,
  }
});
gsap.to(myvalue, {
  color:'#fff',
  scrollTrigger: {
    trigger: ".time",
    pin: true,
    start: "top top",
    end:timeHeight,
    snap:true,
    scrub: 1,
  }
});
gsap.to(".down", {
    backgroundPosition: (-offset_value * frame_count * 2) + "px 0%",
    ease: "steps(" + frame_count + ")", 
    scrollTrigger: {
      trigger: ".down",
      pin: true,
      start: "top center",
      pinspacing:true,
      end: "+=" + (0.75* offset_value),
      scrub: 1.5,
      snap:true,
    }
  });
/*show*/
gsap.from(showtime,
  {
    ease:Power2.easeOut,
    opacity:0,
    y:"60%",
    duration:2,
    scrollTrigger:
    {
      trigger:".tiemcontent",
      toggleActions:"play none restart restart"
    }
  });
gsap.from(breadtext,
    {
      ease:Power1.easeOut,
      opacity:0,
      y:"80%",
      duration:1.5,
      scrollTrigger:
      {
        trigger:".bread",
        toggleActions:"play none restart reset",
      }
    });
gsap.from('.rich',
      {
        ease:Power2.easeOut,
        opacity:0,
        y:"30%",
        duration:2,
        scrollTrigger:
        {
          trigger:".bread",
          start:'top center',
          end:'bottom center',
          toggleActions:"play none restart reset",
        }
      });
gsap.from('.poor',
      {
        ease:Power2.easeOut,
        opacity:0,
        y:"30%",
        duration:2,
        scrollTrigger:
        {
          trigger:".bread",
          start:'top center',
          end:'bottom center',
          toggleActions:"play none restart reset",
        }
     }); 
 gsap.from(drinkingtext,
      {
        ease:Power0.easeOut,
        opacity:0,
        y:"30%",
        duration:1.2,
        scrollTrigger:
        {
          trigger:".drinkingtl",
          toggleActions:"play none restart reset",
          start:'top center',
          end:'bottom center',
          delay:0.5,
        }
      });
gsap.from('.drinkingt1',
        {
          ease:Power0.easeOut,
          opacity:0,
          y:"50%",
          duration:1.5,
          scrollTrigger:
          {
            trigger:'.drinkingt1',
            start:'top center',
            end:'bottom center',
            scrub:1,
            toggleActions:"play none restart reset",
          }
        });
gsap.from('.drinkingt2',
        {
          ease:Power0.easeOut,
          opacity:0,
          y:"40%",
          duration:1.5,
          scrollTrigger:
          {
            trigger:".drinkingt2",
            start:'top center',
            end:'top center',
            toggleActions:"play none restart reset",
            scrub:1,
          }
        });
    gsap.from('.herbtl',
        {
          ease:Power2.easeOut,
          opacity:0,
          stagger:0.1,
          y:"-20%",
          duration:1.5,
          scrollTrigger:
          {
            trigger:'.herb',
            start:'top center',
            end:'bottom center',
            toggleActions:"play none restart reset",            
          }
    });   
    gsap.from(herbct,
    {
      ease:Power2.easeOut,
      opacity:0,
      duration:2.5,
      scrollTrigger:
      {
        trigger:'.herbbox',
        toggleActions:"play none restart reset"
      }
});   
    gsap.from('.herbsub span',
        {
          ease:Power2.easeOut,
          opacity:0,
          stagger:0.1,
          y:"-15%",
          duration:2,
          scrollTrigger:
          {
            trigger:'.herbsub',
            start:'top center',
            end:'bottom center',
            toggleActions:"play none restart reset",
          }
    });
 /*衣服*/
    gsap.from('.clothgp',
      {
        ease:Power2.easeOut,
        opacity:0,
        y:"-15%",
        duration:2,
        scrollTrigger:
        {
          trigger:".clothgp",
          start:'top center',
          toggleActions:"play none restart reset",
        }
      });
      gsap.from('.richimg',
      {
        ease:Power2.easeOut,
        opacity:0,
        x:"-20%",
        duration:2,
        scrollTrigger:
        {
          trigger:".richimg",
          start:'top center',
          end:'bottom center',
          toggleActions:"play none restart reset",
        }
      });
      gsap.from('.clothct',
      {
        ease:Power2.easeOut,
        opacity:0,
        x:"20%",
        duration:2,
        scrollTrigger:
        {
          trigger:".clothct",
          start:'top center',
          toggleActions:"play none restart reset",
        }
      });
      gsap.from('.clothct2',
      {
        ease:Power2.easeOut,
        opacity:0,
        x:"-20%",
        duration:2,
        scrollTrigger:
        {
          trigger:".clothct2",
          start:'top center',
          toggleActions:"play none restart reset",
        }
      });
      gsap.from('.poorimg',
      {
        ease:Power2.easeOut,
        opacity:0,
        x:"20%",
        duration:2,
        scrollTrigger:
        {
          trigger:".poorimg",
          start:'top center',
          toggleActions:"play none restart reset",

        }
      });
      gsap.from('.housetl',
        {
          ease:Power2.easeOut,
          opacity:0,
          y:"-30%",
          duration:2.5,
          scrollTrigger:
          {
            trigger:".housetl",
            start:'top center',
            toggleActions:"play none restart reset",
          }
        });
      gsap.from(house,
      {
        ease:Power2.easeOut,
        opacity:0,
        y:"20%",
        stagger:.5,
        duration:2.5,
        scrollTrigger:
        {
          trigger:".compare",
          toggleActions:"play none restart reset",
          start:'top center',
        }
  
      });