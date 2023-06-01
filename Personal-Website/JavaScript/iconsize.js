window.addEventListener("scroll", function () {
    const icons = document.querySelectorAll(".scroll-link i");
  
    icons.forEach((icon) => {
      const sectionId = icon.parentNode.getAttribute("href");
      const section = document.querySelector(sectionId);
      const sectionOffset = section.offsetTop + 250; 
  
      if (window.scrollY >= sectionOffset) {
        icon.classList.add("icon-active");
      } else {
        icon.classList.remove("icon-active");
      }
    });
  });
