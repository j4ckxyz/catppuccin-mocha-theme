const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-item a");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  // Close menu when pressing Escape key
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && navMenu.classList.contains("active")) {
      closeMenu();
      hamburger.focus(); // Return focus to hamburger button
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      closeMenu();
    }
  });
}

function mobileMenu() {
  const isActive = hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  
  // Update ARIA attributes for accessibility
  hamburger.setAttribute("aria-expanded", isActive);
  
  // Trap focus in mobile menu when open
  if (isActive) {
    // Focus first menu item
    const firstNavLink = navMenu.querySelector("a");
    if (firstNavLink) {
      firstNavLink.focus();
    }
  }
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
}