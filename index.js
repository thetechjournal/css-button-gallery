
var tl = gsap.timeline({defaults:{duration: 0.2}});

tl.from(".box", {y: 50, opacity: 0})
  .to("h1 span", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.7")
  .from(".item", {y: 50, opacity: 0, stagger: .3}, "-=.7")