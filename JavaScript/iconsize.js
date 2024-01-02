window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section'); // Change this selector to match your section elements
    var scrollPosition = window.scrollY;
  
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop + 1000; // Adjust this value as needed
      var sectionBottom = sectionTop + section.offsetHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        resetActiveIcons();
        var linkId = section.getAttribute('id') + '-link';
        document.getElementById(linkId).classList.add('active-icon');
      }
    });
  });
  
  function resetActiveIcons() {
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.classList.remove('active-icon');
    });
  }