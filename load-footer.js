// Load mobile footer
fetch("footer-mobile.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder-mobile").innerHTML = data;

    // Smooth scroll if hash exists (mobile)
    scrollToHash();
  })
  .catch(console.error);

// Load desktop footer
fetch("footer-desktop.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder-desktop").innerHTML = data;

    // Smooth scroll if hash exists (desktop)
    scrollToHash();
  })
  .catch(console.error);

// Function to smooth scroll if hash exists
function scrollToHash() {
  const hash = window.location.hash;
  if (hash) {
    const checkExist = setInterval(() => {
      const target = document.querySelector(hash);
      if (target) {
        clearInterval(checkExist);
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  }
}





// Load mobile footer
// fetch("footer-mobile.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.getElementById("footer-placeholder-mobile").innerHTML = data;
//   })
//   .catch(console.error);

// Load desktop footer
// fetch("footer-desktop.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.getElementById("footer-placeholder-desktop").innerHTML = data;
//   })
//   .catch(console.error);


