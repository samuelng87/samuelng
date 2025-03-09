export default function initSkillsAnimation() {
  // Make sure the skills slider is visible
  const skillsSlider = document.querySelector('.skills-slider');
  if (skillsSlider) {
    skillsSlider.style.visibility = 'visible';
    skillsSlider.style.opacity = '1';
    
    const container = skillsSlider.querySelector('.skills-slider__container');
    if (container) {
      container.style.visibility = 'visible';
      container.style.opacity = '1';
    }
  }
} 