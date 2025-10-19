document.addEventListener('DOMContentLoaded', () => {
  const pagesWithScrollIcon = ['index.html', 'firstPage.html', 'forthPage.html', 'eightPage.html', 'ninePage.html'];
  const path = window.location.pathname.split('/').pop();

  const scrollDown = document.getElementById('scroll-down');
  if (!scrollDown) return;

  // Show only on listed pages
  if (!path || pagesWithScrollIcon.includes(path)) {
    scrollDown.style.display = 'flex';
  } else {
    scrollDown.style.display = 'none';
  }

  // Scroll down on click
  scrollDown.addEventListener('click', () => {
    window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
  });

  // Smooth fade when scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      scrollDown.style.opacity = '0';
      scrollDown.style.pointerEvents = 'none';
    } else {
      scrollDown.style.opacity = '1';
      scrollDown.style.pointerEvents = 'auto';
    }
  });
});
