gsap.registerPlugin(ScrollTrigger);

let width=screen.width;
  
let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000"
    }
  });

//blue section
gsap.to(".typing_text", {x: 0,
  text:"Scroll down to animate horizontally &gt;",
  scrollTrigger: {
    trigger: ".container",
    pin: ".typing_text-heading",
    start: "center center",
    end: "center top",
    scrub: true,
    markers: true
  }
});

gsap.set(".box-1, .box-2", {y: 100});
ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

// red section
gsap.to(".box-1 .typing_text", {
  y: -130,
  duration: 2,
  ease: "elastic",
  text: "Fire an animation at a particular spot...",
  scrollTrigger: {
    trigger: ".box-1",
    pin: ".typing_text-heading",
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none reset",
    id: "1",
  }
});

if(width>=786){
gsap.from("#truck", {
  scrollTrigger: {
    scrub: true,
  },
  x: -1300,
  // y: 10,
  scale: 0.9,
});

gsap.to("#truck", {
  scrollTrigger: {
    scrub: true,
  },
  x: 500,
  // y: 10,
  scale: 0.9,
  duration:1
});
}
else{
  gsap.from("#truck", {
    scrollTrigger: {
      scrub: true,
    },
    x: -2000,
    // y: 10,
    scale: 0.9,
  });
  
  gsap.to("#truck", {
    scrollTrigger: {
      scrub: true,
    },
    x: -1000,
    // y: 10,
    scale: 0.9,
    duration:1
  });
}


// gray section
gsap.to(".box-2", {
  y: -120,
  backgroundColor: "#1e90ff",
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "2"
  }
});

// purple section
ScrollTrigger.create({
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 60%",
  id: "3"
});

// green section
ScrollTrigger.create({
  trigger: ".green",
  containerAnimation: scrollTween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: self => console.log("active", self.isActive),
  id: "4"
});

// only show the relevant section's markers at any given time
gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", {autoAlpha: 0});
["red","gray","purple","green"].forEach((triggerClass, i) => {
  ScrollTrigger.create({
    trigger: "." + triggerClass,
    containerAnimation: scrollTween,
    start: "left 30%",
    end: i === 3 ? "right right" : "right 30%",
    markers: false,
    onToggle: self => gsap.to(".marker-" + (i+1), {duration: 0.25, autoAlpha: self.isActive ? 1 : 0})
  });
});

// helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
// function directionalSnap(increment) {
//   let snapFunc = gsap.utils.snap(increment);
//   return (raw, self) => {
//     let n = snapFunc(raw);
//     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
//   };
// }

// making the code pretty/formatted.
PR.prettyPrint();