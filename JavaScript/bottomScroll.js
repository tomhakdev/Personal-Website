document.addEventListener("DOMContentLoaded", function () {
    var contactSection = document.getElementById("Contact");
    var contactSectionBottom = contactSection.offsetTop + contactSection.offsetHeight;

    function handleScroll() {
        var scrollPosition = window.scrollY;
        if (scrollPosition >= contactSectionBottom - window.innerHeight) {
            window.scrollTo(0, contactSectionBottom - window.innerHeight);
        }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener("scroll", handleScroll);
});