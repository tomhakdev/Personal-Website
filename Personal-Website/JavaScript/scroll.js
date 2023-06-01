document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('.scroll-link');
  
    scrollLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        const target = event.currentTarget.getAttribute('href');
        const section = document.querySelector(target);
  
        if (section) {
          const topOffset = section.offsetTop;
  
          window.scrollTo({
            top: topOffset - 10,
            behavior: 'smooth',
          });
        }
      });
    });
  
    const getClosestSection = () => {
      const sections = Array.from(document.querySelectorAll('section'));
      const buffer = 200; // Adjust the buffer value as needed
  
      return sections.reduce((closest, section) => {
        const topOffset = section.offsetTop - buffer;
        const distance = Math.abs(topOffset - window.pageYOffset);
  
        if (distance < closest.distance) {
          return { section, distance };
        }
  
        return closest;
      }, { section: null, distance: Infinity }).section;
    };
  
    const updateActiveLink = () => {
      const closestSection = getClosestSection();
  
      scrollLinks.forEach((link) => {
        const target = link.getAttribute('href');
        const section = document.querySelector(target);
  
        if (section === closestSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
  
    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', updateActiveLink);
  });





  document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('.main-scroll-link');
  
    scrollLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        const target = event.currentTarget.getAttribute('href');
        const section = document.querySelector(target);
  
        if (section) {
          const topOffset = section.offsetTop;
  
          window.scrollTo({
            top: topOffset - 10,
            behavior: 'smooth',
          });
        }
      });
    });
  
    const getClosestSection = () => {
      const sections = Array.from(document.querySelectorAll('section'));
      const buffer = 200; // Adjust the buffer value as needed
  
      return sections.reduce((closest, section) => {
        const topOffset = section.offsetTop - buffer;
        const distance = Math.abs(topOffset - window.pageYOffset);
  
        if (distance < closest.distance) {
          return { section, distance };
        }
  
        return closest;
      }, { section: null, distance: Infinity }).section;
    };
  
    const updateActiveLink = () => {
      const closestSection = getClosestSection();
  
      scrollLinks.forEach((link) => {
        const target = link.getAttribute('href');
        const section = document.querySelector(target);
  
        if (section === closestSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
  
    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', updateActiveLink);
  });