// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select the "Network" link in the top menu
    const networkLink = document.querySelector(".top-menu a:nth-child(2)");

    // Add a click event listener
    networkLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.location.href = "network.html"; // Redirect to network.html
    });
});