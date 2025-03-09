import initScrollReveal from "./scrollReveal";
import initTiltEffect from "./tiltAnimation";
import initSkillsAnimation from "./skillsAnimation";
import { targetElements, defaultProps } from "../data/scrollRevealConfig";

// Add skills section to target elements
targetElements.push(
  {
    element: '.skills-wrapper',
    animation: {
      delay: 400,
      distance: '0px',
      origin: 'bottom'
    }
  }
);

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initSkillsAnimation();

// SKILLS
// sr.reveal('.skills-wrapper', srConfig());
