// Home page
const navIcon = document.getElementById('navIcon');
const navMenu = document.getElementById('navMenu');
const header = document.querySelector('header');

// Services page
const section1 = document.querySelector('.section--1');
const cardsContainer = document.querySelector('.section--services');

// Team page
const filterSelector = document.getElementById('filterMembers');
const members = document.querySelectorAll('.member__container');

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

// Event listeners
navIcon.addEventListener('click', toggleNav);
window.addEventListener('scroll', showNavMenu);
const checkPageName = () => {
	if (window.location.pathname.includes('team')) {
		filterSelector.addEventListener('change', displayFiltered);
	}
	return;
}

// Run on load
checkPageName();