// Home page
const navIcon = document.getElementById('navIcon');
const navMenu = document.getElementById('navMenu');
const header = document.querySelector('header');

// Header
const headerTitle = document.querySelector('.header__container');
const headerText = document.querySelector('.header__text');
const scrollIcon = document.querySelector('.icon__container');

// Services page
const section1 = document.querySelector('.section--1');
const cardsContainer = document.querySelector('.section--services');

// Team page
const filterSelector = document.getElementById('filterMembers');
const members = document.querySelectorAll('.member__container');

// Contact page
const contactForm = document.getElementById('contactForm');
const clearFormBtn = document.getElementById('clearForm');
const msgInput = document.getElementById('msgInput');

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

// When the select input changes, display the user depending on their role
const displayFiltered = (e) => {
	// Value of the selected option
	let value = e.target.value;

	members.forEach(member => {
		// Role of each individual user
		let role = member.children[2].textContent.toLowerCase();

		// Set smooth transition
		member.style.transition = 'all 0.5s ease';

		// If role does not include the selected value then hide the member
		if (!role.includes(value)) {
			member.style.opacity = '0';
			member.style.transform = 'scale(0)';
			// Don't display the member after 500ms
			setTimeout(() => member.style.display = 'none', 500);
		} else {
			setTimeout(() => member.style.display = 'flex', 500);
			// Display member after the display is set to flex
			setTimeout(() => {
				member.style.opacity = '1';
				member.style.transform = 'scale(1)';
			}, 600);
		}
	});
}

// Delay the display of the certain elements
const delayDisplay = () => {

	// Show header on load for all pages
	setTimeout(() => {
		header.style.opacity = '1';
		navMenu.style.opacity = '1';
	}, 200);

	// If the page name does not include sitemap then do the below actions
	if (!window.location.pathname.includes('sitemap')) {
		setTimeout(() => {
			headerTitle.classList.add('resize');
		}, 600);
		setTimeout(() => {
			headerText.classList.add('resize');
		}, 1000);
		setTimeout(() => {
			scrollIcon.style.opacity = '1';
		}, 1400);
	}
}
// Sending form data to the backend
const getFormData = (e) => {
	e.preventDefault();
}

// Clear form data
const clearFormData = () => {
	msgInput.textContent = '';
}

// Event listeners
navIcon.addEventListener('click', toggleNav);
window.addEventListener('scroll', showNavMenu);

const checkPageName = () => {
	if (window.location.pathname.includes('team')) {

		// If page name includes team then add event listener
		filterSelector.addEventListener('change', displayFiltered);
	} else if (window.location.pathname.includes('contact')) {

		// If page name includes contact then add event listener
		contactForm.addEventListener('submit', getFormData);
		clearFormBtn.addEventListener('click', clearFormData);
	} else if (window.location.pathname.includes('sitemap')) {

		// If page name includes sitemap then add event listener
		window.removeEventListener('scroll', showNavMenu);
	}
}

// Run on load
delayDisplay();
checkPageName();