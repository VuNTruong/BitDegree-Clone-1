// The function to open dropdown menu when user clicks it
function onClickOpenDropdownMenu() {
  // Toggle the menu
  document.getElementById("drop-down-menu").classList.toggle("show");
}

// The function to open hamburger menu when user clicks it
function onClickOpenHamburgerMenu() {
  // Toggle the menu
  document.getElementById("hamburger-menu").classList.toggle("show-1");
}

// The function to handle event of when width of the window is greater than 768px
function checkMediaQuery() {
  // If the inner width of the window is greater than 768px
  if (window.innerWidth < 768) {
    // Get the dropdown menu element based on id
    var dropdownMenu = this.document.getElementById("drop-down-menu");

    // Close the menu by removing it out of the view
    dropdownMenu.classList.remove("show");
  }
}

// The function to close dropdown menu when user clicks anywhere outside of it
window.onclick = function (event) {
  // Check to see if clicked area is outside of the button or not
  if (
    !event.target.matches(".category-filter") &&
    !event.target.matches(".hamburger-menu-button")
  ) {
    // Get the dropdown menu element based on id
    var dropdownMenu = this.document.getElementById("drop-down-menu");

    // Get the hamburger menu element based on id
    var hamburgerMenu = this.document.getElementById("hamburger-menu");

    // Close the dropdown menu by removing it out of the view
    dropdownMenu.classList.remove("show");

    // Close the hamburger menu by removing it out of the view
    hamburgerMenu.classList.remove("show-1");
  }
};

// Add a listener for when the window resizes
window.addEventListener("resize", checkMediaQuery);
