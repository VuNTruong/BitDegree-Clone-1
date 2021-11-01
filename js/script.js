// The function to open dropdown menu when user clicks it
function onClickOpenDropdownMenu() {
  // Toggle the menu
  document.getElementById("drop-down-menu").classList.toggle("show");
  document.getElementById("drop-down-menu-modal").classList.toggle("show");
}

// The function to open hamburger menu when user clicks it
function onClickOpenHamburgerMenu() {
  // Get the hamburger menu element based on id
  var hamburgerMenu = this.document.getElementById("hamburger-menu");

  hamburgerMenu.classList.add("animate-right");

  // Toggle the menu
  document.getElementById("hamburger-menu").classList.toggle("show-1");
  document.getElementById("hamburger-menu-modal").classList.toggle("show-1");
}

// The function to handle event of when there is a change in layout
function checkMediaQuery() {
  // If the inner width of the window is less than 768px while the drop down menu
  // is open, close it first
  if (window.innerWidth < 768) {
    // Get the dropdown menu element based on id
    var dropdownMenu = this.document.getElementById("drop-down-menu");

    // Close the menu by removing it away from the view
    dropdownMenu.classList.remove("show");
  }

  // If the inner width of the window is greater than 768px while the hamburger menu
  // is open, close it first
  if (window.innerWidth > 768) {
    // Get the hamburger menu element based on id as well as its modal
    var hamburgerMenu = this.document.getElementById("hamburger-menu");
    var hamburgerMenuModal = this.document.getElementById("hamburger-menu-modal");

    // Close the menu by removing it away from the view
    hamburgerMenu.classList.remove("show-1");
    hamburgerMenuModal.classList.remove("show-1");
  }
}

// The function to close dropdown menu when user clicks anywhere outside of it
function closeMenu () {
  // Get the dropdown menu element based on id
  var dropdownMenu = this.document.getElementById("drop-down-menu");
  var dropdownMenuModal = this.document.getElementById("drop-down-menu-modal");

  // Get the hamburger menu element based on id
  var hamburgerMenu = this.document.getElementById("hamburger-menu");
  var hamburgerMenuModal = this.document.getElementById("hamburger-menu-modal");

  // Close the dropdown menu by removing it out of the view
  dropdownMenu.classList.remove("show");
  dropdownMenuModal.classList.remove("show");

  // Remove the go right animation and start the go left animation to close the hamburger menu
  // only if the hamburger menu is being shown
  if (hamburgerMenu.classList.contains("show-1")) {
    hamburgerMenu.classList.remove("animate-right");
    hamburgerMenu.classList.add("animate-left");
  }

  // When the go left animation is ended (menu is closed), remove every animation class
  // and hide the menu
  hamburgerMenu.addEventListener("animationend", (event) => {
    if (event.animationName === "go-left") {
      hamburgerMenu.classList.remove("show-1");
      hamburgerMenuModal.classList.remove("show-1");
      hamburgerMenu.classList.remove("animate-left");
    }
  }, false);
};

// Add a listener for when the window resizes
window.addEventListener("resize", checkMediaQuery);
