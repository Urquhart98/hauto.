// =========================
// MOBILE MENU TOGGLE
// =========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isActive = mobileMenu.classList.toggle('active');
    // Sync accessibility state
    hamburger.setAttribute('aria-expanded', isActive);
  });

  // Close menu when clicking a link (important for single-page nav)
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// =========================
// FEATURED PROPERTY CAROUSEL + SWOOP
// =========================
const properties = [
  {
    img: 'images/property1.png',
    title: 'Luxury House Upgrade',
    desc: 'For this stunning property, we delivered a full smart home transformation, installing intelligent lighting, advanced heating controls, and centralized panels.',
    cost: '£5,500'
  },
  {
    img: 'images/property2.jpeg',
    title: 'Small Semi-Detached Upgrade',
    desc: 'For this charming semi-detached home, we installed a complete smart lighting system, both indoors and outdoors, along with a sleek touch-screen control unit.',
    cost: '£1,200'
  }
];

let currentIndex = 0;
const featuredCard = document.querySelector('.featured-card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function showProperty(index) {
  if (!featuredCard) return;

  const prop = properties[index];

  // Reset Animation (Force restart by reflow)
  featuredCard.classList.remove('swoop-in');
  void featuredCard.offsetWidth; 

  // Update Content
  const img = featuredCard.querySelector('img');
  const title = featuredCard.querySelector('h3');
  const descPara = featuredCard.querySelector('p:not(.cost)');
  const costPara = featuredCard.querySelector('.cost');

  if (img) {
    img.src = prop.img;
    img.alt = prop.title;
  }
  if (title) title.textContent = prop.title;
  if (descPara) descPara.textContent = prop.desc;
  if (costPara) costPara.textContent = `Project Cost: ${prop.cost}`;

  // Re-trigger the Swoop animation
  featuredCard.classList.add('swoop-in');
}

if (leftArrow && rightArrow) {
  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + properties.length) % properties.length;
    showProperty(currentIndex);
  });
  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % properties.length;
    showProperty(currentIndex);
  });
}

// Initialize the first property view
if (featuredCard) {
  showProperty(currentIndex);
}

// =========================
// SMOOTH SCROLLING
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId !== "#" && targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});
