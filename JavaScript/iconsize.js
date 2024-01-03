window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section'); 
    var scrollPosition = window.scrollY;
  
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 100; 
      var sectionBottom = sectionTop + section.offsetHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        resetActiveIcons();
        var linkId = section.getAttribute('id') + '-link';
        document.getElementById(linkId).classList.add('active-link');
      }
    });
  });
  
  function resetActiveIcons() {
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.classList.remove('active-link');
    });
  }