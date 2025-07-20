window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".main-title", {
    opacity: 0,
    y: -50,
    duration: 1.2,
    ease: "power2.out"
  });

  gsap.from(".main-subtitle", {
    opacity: 0,
    y: -80,
    duration: 1.2,
    delay: 0.5,
    ease: "power2.out"
  });

  gsap.to(".main-subtitle span", {
    y: 60,              
    repeat: -1,          
    yoyo: true,         
    ease: "power1.inOut", 
    duration: 1,
    stagger: 0.1         
  });

  gsap.from(".contact-info", {
    x: -150,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.from(".web-publisher", {
    x: 150,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.from(".about-image-wrap", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 68%",
      toggleActions: "play none none none",
    },
    x: -150,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });

  gsap.from(".about-text_wrap", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 68%",
      toggleActions: "play none none none",
    },
    x: 150,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".portfolio-skill-back", {
    scrollTrigger: {
      trigger: ".portfolio-skill-back",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "bounce.out", 
    onComplete: () => {
      gsap.to(".portfolio-skill-back", {
        y: "+=10",
        repeat: 3,
        yoyo: true,
        duration: 0.2,
        ease: "power1.inOut"
      });
    }
  });

  gsap.from(".contact-main-title", {
    scrollTrigger: {
      trigger: ".contact-main-title",
      start: "top 60%",
      toggleActions: "play none none none",
    },
    y: -150,          
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.utils.toArray(".card-contents").forEach((card, i) => {
    gsap.to(card, {
      scale: 0.98,
      duration: 1.2,
      repeat: -1,        
      yoyo: true,       
      ease: "power1.inOut",
      delay: i * 0.4   
    });
  });

});