console.log('hello')

var crsr=document.querySelector("#cursor")
var crsrblur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+30+"px"
    crsr.style.top=dets.y+"px"
    crsrblur.style.left=dets.x -150 + "px"
    crsrblur.style.top=dets.y -150 + "px"
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11",
        scrub:"1"



    }
    
}


)
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:"true",
        start:"top -20%",
        end:"top -75%",
        scrub:2
    }


    
})

// nav bar 


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
gsap.from("#aboutus img,  #aboutin",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:3

    }

})

gsap.from(".card1",{
    scale:0.2,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }

})
gsap.from("#colon1",{
    
y:-70,
x:-70,
    scrollTrigger:{

        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }

})
   
gsap.from("#colon2",{
    
    y:70,
    x:70,
        scrollTrigger:{
    
            trigger:"#colon1",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 45%",
            scrub:4
        }
    
    })


    gsap.from("#page4 h1",{
    
        y:50,
      
            scrollTrigger:{
        
                trigger:"#page4 h1",
                scroller:"body",
                // markers:true,
                start:"top 75%",
                end:"top 70%",
                scrub:4
            }
        
        })