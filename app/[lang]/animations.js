import gsap from "gsap";

const handleClick = (e) => {
  if (e) {
    return
  }
  languageInput.removeEventListener("click", handleClick);
};

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  const languageInput = document.getElementById("language-input");
  languageInput.addEventListener("click", handleClick);
  
  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      yPercent: 10,
    })
      .to(transitionElement, {
        yPercent: -100,
        duration: 0.5,
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
          duration: 0.3,
        },
        "<"
      );
    }
};

export const animatePageOut = (href, router, label) => {
  const animationWrapper = document.getElementById("transition-element");
  const hrefAlreadyInHomePage = (window.location.pathname === '/en' || window.location.pathname === '/it') && label === 'Home';
  if (animationWrapper  && !hrefAlreadyInHomePage) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      yPercent: 100,
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    })
      .to(animationWrapper, {
        yPercent: 0,
        duration: 0.5,
        onComplete: () => {
          router.push(href);
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          duration: 0.3,
        },
        "<"
      );
    }
};