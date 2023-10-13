document.addEventListener("DOMContentLoaded", function () {
    // Function to hide all content sections
    function hideAllSections() {

        const contentSections = document.querySelectorAll(".content");

        contentSections.forEach(function (section) {

            section.style.display = "none";
        });
    }

    // Initial setup: Hide all sections except the home section
    hideAllSections();


    // Display the "home-content" section
    document.getElementById("home-content").style.display = "block";


    const navItems = document.querySelectorAll(".nav-link.active");

    navItems.forEach(function (item) {

        item.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();

            const targetId = item.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {

                targetSection.style.display = "block";
            }
        });
    });
    var menuItemLinks = document.querySelectorAll('.nav-link');
    var navbarTogglerButton = document.getElementById('navbar-toggler-button');

    menuItemLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarTogglerButton.classList.contains('collapsed')) {
                return;
            }

            navbarTogglerButton.click();
        });
    });


    //navigate to division when button on card is clicked
    const buttons = document.querySelectorAll(".myButton");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const contentSections = document.querySelectorAll(".content");
                contentSections.forEach(function (section) {
                    section.style.display = "none";
                });
                targetSection.style.display = "block";
            }
        });
    });

    // Function to toggle division visibility in the footer
    function toggleDivision(id) {

        const divisions = document.querySelectorAll(".hidden-division");

        divisions.forEach(function (division) {

            division.style.display = "none";
        });

        // Display the clicked division
        const targetDivision = document.getElementById(id);
        if (targetDivision) {

            targetDivision.style.display = "block";
        }
    }


    const footerLinks = document.querySelectorAll(".text-right a");

    footerLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            hideAllSections();
            toggleDivision(targetId);
        });
    });
});
