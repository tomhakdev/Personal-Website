/*window.addEventListener("scroll", function () {
  const icons = document.querySelectorAll(".scroll-link i");

  icons.forEach((icon) => {
      const sectionId = icon.parentNode.getAttribute("href");
      const section = document.querySelector(sectionId);
      const rect = section.getBoundingClientRect();

      // Check if the section is currently filling the entire viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          icon.classList.add("icon-active");
      } else {
          icon.classList.remove("icon-active");
      }
  });
});*/