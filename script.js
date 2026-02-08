// =========================
// INTRO ANIMATION
// =========================
const intro = document.getElementById('intro');
const site = document.getElementById('site');

function showSiteImmediately() {
  intro.style.display = 'none';
  site.style.opacity = '1';
}

// Logic to only show intro once per session
if (!localStorage.getItem('hautoIntroShown')) {
  intro.style.display = 'flex';
  site.style.opacity = '0';

  const logo = document.querySelector('.logo-text');
  logo.style.opacity = '0';
  logo.style.transform = 'scale(0.95)';

  setTimeout(() => {
    logo.style.animation = 'logoIn 1.3s ease forwards';
  }, 100);

  setTimeout(() => {
    intro.style.animation = 'introFadeOut 1s ease forwards';
    site.style.animation = 'siteFadeIn 1s ease forwards';
  }, 2300);

  intro.addEventListener('animationend', () => {
    intro.style.display = 'none';
    site.style.opacity = '1';
  });

  localStorage.setItem('hautoIntroShown', 'true');
} else {
  showSiteImmediately();
}

// =========================
// MOBILE MENU
// =========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// This matches the .active class we defined in your CSS
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close menu when a link is clicked (prevents menu staying open on anchor jumps)
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// =========================
// FEATURED PROPERTY CAROUSEL
// =========================
const properties = [
  {
    img: 'property1.jpeg',
    title: 'Luxury House Upgrade',
    desc: 'For this stunning property, we delivered a full smart home transformation, installing intelligent lighting, advanced heating controls, and centralized panels for effortless management of lighting, climate, and multimedia. We enhanced security with smart locks, cameras, and motion sensors, ensuring peace of mind.',
    cost: '£5,500'
  },
  {
    img: 'property2.jpeg',
    title: 'Small Semi-Detached Upgrade',
    desc: 'For this charming semi-detached home, we installed a complete smart lighting system, both indoors and outdoors, along with a sleek touch-screen control unit for effortless management. Every light can be customized with ease, combining convenience, energy efficiency, and modern style.',
    cost: '£1,200'
  },
  {
    img: 'property3.jpeg',
    title: 'Country Villa Upgrade',
    desc: 'At this countryside villa, we installed advanced smart lighting, heating, and entertainment systems. The centralized control panel enables full management of the house at your fingertips. A comprehensive security setup was also integrated for peace of mind.',
    cost: '£7,800'
  },
  {
    img: 'property4.jpeg',
    title: 'Beachfront Mansion',
    desc: 'This beachfront mansion was completely modernized with smart lighting, heating, advanced control panels for full house management, and a cutting-edge security system. The upgrades allow the homeowners to control everything from their phone.',
    cost: '£9,300'
  }
];

let currentIndex = 0;
const featuredCard = document.querySelector('.featured-card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function showProperty(index) {
  const prop = properties[index];

  // Update Image
  const img = featuredCard.querySelector('img');
  img.src = prop.img;
  img.alt = prop.title;

  // Update Title
  featuredCard.querySelector('h3').textContent = prop.title;

  // Update Description and Cost
  const paragraphs = featuredCard.querySelectorAll('p');
  if (paragraphs.length >= 2) {
    paragraphs[0].textContent = prop.desc; 
    paragraphs[1].textContent = `Project Cost: ${prop.cost}`;
  }
}

// Event Listeners for Arrows
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + properties.length) % properties.length;
  showProperty(currentIndex);
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % properties.length;
  showProperty(currentIndex);
});

// Initialize the first property on load
showProperty(currentIndex);
