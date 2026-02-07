// =========================
// INTRO ANIMATION - PLAY ONCE
// =========================

// Get DOM elements
const intro = document.getElementById('intro');
const site = document.getElementById('site');

// Function to show site immediately
function showSiteImmediately() {
  intro.style.display = 'none';
  site.style.opacity = '1';
}

// Check if intro animation has already been shown
if (!localStorage.getItem('hautoIntroShown')) {
  // Show intro and hide main site initially
  intro.style.display = 'flex';
  site.style.opacity = '0';

  // Start the logo animation (same as before)
  const logo = document.querySelector('.logo-text');
  logo.style.opacity = '0';
  logo.style.transform = 'scale(0.95)';

  setTimeout(() => {
    logo.style.animation = 'logoIn 1.3s ease forwards';
  }, 100); // slight delay to ensure CSS applies

  // Fade out intro after 2.3s
  setTimeout(() => {
    intro.style.animation = 'introFadeOut 1s ease forwards';
    site.style.animation = 'siteFadeIn 1s ease forwards';
  }, 2300);

  // When intro fade out ends, hide it and show site
  intro.addEventListener('animationend', () => {
    intro.style.display = 'none';
    site.style.opacity = '1';
  });

  // Mark animation as shown in localStorage
  localStorage.setItem('hautoIntroShown', 'true');

} else {
  // Already shown → skip animation
  showSiteImmediately();
}