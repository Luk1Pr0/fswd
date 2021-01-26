const navIcon = document.getElementById('navIcon');
const navMenu = document.getElementById('navMenu');

// Close or open nav menu
const toggleNav = () => {
	navMenu.classList.toggle('nav__active');
	navIcon.classList.toggle('burger__cross');
}

// Event listeners
navIcon.addEventListener('click', toggleNav);