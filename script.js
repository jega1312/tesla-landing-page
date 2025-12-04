// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");

  if (navList.classList.contains("hidden")) {
    // Show with slide down
    navList.classList.remove("hidden", "animate__slideOutLeft");
    navList.classList.add("animate__animated", "animate__slideInLeft");
  } else {
    // Hide with slide up
    navList.classList.remove("animate__slideInLeft");
    navList.classList.add("animate__slideOutLeft");

    // After animation ends, hide element
    navList.addEventListener(
      "animationend",
      () => {
        if (navList.classList.contains("animate__slideOutLeft")) {
          navList.classList.add("hidden");
        }
      },
      { once: true }
    );
  }
});

// Close menu when a link is clicked (on small screens)
document.querySelectorAll(".nav-list .links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navList.classList.add("hidden");
      hamburger.classList.remove("open");
    }
  });
});

// Fade-in animation
const fadeEls = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100");
      } else {
        // reset when leaving viewport so it can replay later
        entry.target.classList.remove("opacity-100");
      }
    });
  },
  { threshold: 0.0 }
);

fadeEls.forEach((el) => observer.observe(el));
