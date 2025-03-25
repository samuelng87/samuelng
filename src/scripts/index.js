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

// Project descriptions Read More/Less functionality
document.addEventListener('DOMContentLoaded', function() {
  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const description = this.previousElementSibling;
      description.classList.toggle('expanded');
      
      if (description.classList.contains('expanded')) {
        this.textContent = 'Read Less';
      } else {
        this.textContent = 'Read More';
      }
    });
  });
  
  // About section Read More/Less functionality
  const aboutReadMoreButton = document.querySelector('.about-read-more-btn');
  if (aboutReadMoreButton) {
    aboutReadMoreButton.addEventListener('click', function() {
      const aboutText = this.previousElementSibling;
      aboutText.classList.toggle('expanded');
      
      if (aboutText.classList.contains('expanded')) {
        this.textContent = 'Read Less';
      } else {
        this.textContent = 'Read More';
      }
    });
  }
});
