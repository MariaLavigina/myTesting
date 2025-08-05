document.addEventListener("DOMContentLoaded", function () {
  // Load navbar
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      const hamburger = document.getElementById("hamburger");
      const line1 = document.getElementById("line1");
      const line2 = document.getElementById("line2");
      const line3 = document.getElementById("line3");
      const mobileMenu = document.getElementById("mobileMenu");

      if (hamburger) {
        hamburger.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
          mobileMenu.classList.toggle("scale-y-100");

          line1.classList.toggle("rotate-45");
          line3.classList.toggle("-rotate-45");
          line1.classList.toggle("translate-y-[6px]");
          line3.classList.toggle("-translate-y-[6px]");
          line2.classList.toggle("opacity-0");
        });
      }
    })
    .catch((error) => {
      console.error("Error loading navbar:", error);
    });

  // Load down button
  fetch("down-button.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("down-button-placeholder").innerHTML = data;

      const scrollArrow = document.getElementById("scroll-arrow");
      if (scrollArrow) {
        scrollArrow.style.display = "flex";

        scrollArrow.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector("#more-content");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });

        function handleScroll() {
          if (window.scrollY > 10) {
            scrollArrow.style.display = "none";
            window.removeEventListener("scroll", handleScroll);
          }
        }

        window.addEventListener("scroll", handleScroll);
      }
    })
    .catch((error) => {
      console.error("Error loading down button:", error);
    });
});
