const navIcon = document.getElementById('navIcon');
const navMenu = document.getElementById('navMenu');
const header = document.querySelector('header');
const section1 = document.querySelector('.section--1');

const mobileScreen = 1024;

// Close or open nav menu
const toggleNav = () => {
	navMenu.classList.toggle('nav__active');
	navIcon.classList.toggle('burger__cross');
}

// Attach the nav menu to the window when user scrolls
const showNavMenu = () => {
	// If screen size is larger then mobileScreen than run code below
	if (window.innerWidth > mobileScreen) {
		const scrollPos = window.pageYOffset;
		const sectionOffset = section1.getBoundingClientRect().top;
		const navHeight = navMenu.getBoundingClientRect().height;
		// If scroll pos is more than 1px hide navbar
		if (scrollPos > 1) {
			navMenu.classList.add('nav__hidden');
			// Once section offset is less than the navHeight, stick the navbar
			if (sectionOffset < navHeight * 1.2) {
				navMenu.classList.add('nav__sticky');
			} else {
				navMenu.classList.remove('nav__sticky');
			}
		} else {
			navMenu.classList.remove('nav__hidden');
		}
	}
}

// Event listeners
navIcon.addEventListener('click', toggleNav);
window.addEventListener('scroll', showNavMenu);
