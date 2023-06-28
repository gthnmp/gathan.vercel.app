export const observeSection = () => {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '100%';
      } else {
        entry.target.style.opacity = '20%';
      }
    });
  }, { threshold: [0.5, 1.0] });

  const sections = document.querySelectorAll('section');
  sections.forEach((s) => {
    sectionObserver.observe(s);
  });
};

export const observeCross = (setIsHoverImageVisible, setIsCrossVisible) => {
  const intro = document.querySelector('#introduction');

  const introObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.id === 'introduction') {
        setIsHoverImageVisible(false);
        setIsCrossVisible(false);
      } else {
        setIsCrossVisible(true);
      }
    });
  }, { threshold: [0.75, 0.9] });

  introObserver.observe(intro);
};
