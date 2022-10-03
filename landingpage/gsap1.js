// arrow animations

let arrow = document.querySelector('.arrow');
let arrowRight = document.querySelector('.arrow-right');

if(arrow){
  gsap.to(arrow, {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});
}

if(arrowRight){
  gsap.to(arrowRight, {x: -12, ease: "power1.inOut", repeat: -1, yoyo: true});
}