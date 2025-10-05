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






    // Smooth scroll for "списки глав" links (desktop and mobile)
const chapterLinks = mobileMenu.querySelectorAll('a[href*="#link-to-four-chapters-mobile"]');
const desktopChapterLink = document.querySelector('a[href*="#link-to-four-chapters-desktop"]');

// Combine mobile and desktop links
const allChapterLinks = [...chapterLinks];
if (desktopChapterLink) allChapterLinks.push(desktopChapterLink);

allChapterLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      // If the target element is not on this page, navigate to index.html with hash
      window.location.href = `index.html#${targetId}`;
      return;
    }

    // If the element exists, smooth scroll
    e.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth" });

    // Close mobile menu if open
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("scale-y-100");
      line1.classList.remove("rotate-45", "translate-y-[6px]");
      line2.classList.remove("opacity-0");
      line3.classList.remove("-rotate-45", "-translate-y-[6px]");
    }
  });
});






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
