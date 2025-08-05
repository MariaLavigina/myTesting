// Load mobile footer
fetch("footer-mobile.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder-mobile").innerHTML = data;
  })
  .catch(console.error);

// Load desktop footer
fetch("footer-desktop.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder-desktop").innerHTML = data;
  })
  .catch(console.error);
