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
      xPercent: 0,
    })
      .to(transitionElement, {
        xPercent: 100,
        duration: 0.8,
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: "50vh",
          borderBottomLeftRadius: "50vh",
          duration: 0.4,
        },
        "<"
      );
    }
};

export const animatePageOut = (href, router, label) => {
  const animationWrapper = document.getElementById("transition-element");
  const history = window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE[1].children[1].children[0];
  const routesNotDouble = history !== label.toLowerCase();
  const hrefAlreadyInHomePage = (window.location.pathname === '/en' || window.location.pathname === '/it') && label === 'Home';

  if (animationWrapper && routesNotDouble && !hrefAlreadyInHomePage) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      xPercent: -100,
      borderTopRightRadius: "50vh",
      borderBottomRightRadius: "50vh",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    })
      .to(animationWrapper, {
        xPercent: 0,
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