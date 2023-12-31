document.addEventListener("DOMContentLoaded", function () {
    var contactSection = document.getElementById("Contact");
    var contactSectionBottom = contactSection.offsetTop + contactSection.offsetHeight;

    function handleScroll() {
        var scrollPosition = window.scrollY;

        // Disable scrolling down if the user is at or below the bottom of the contact section
        if (scrollPosition >= contactSectionBottom - window.innerHeight) {
            // Manually adjust the scroll position to the bottom of the contact section
            window.scrollTo(0, contactSectionBottom - window.innerHeight);
        }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener("scroll", handleScroll);
});