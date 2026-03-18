import './style.css';
import { createRouter, route } from './router.js';
import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { ServicesPage } from './pages/services.js';
import { BlogsPage } from './pages/blogs.js';
import { CompanyPage } from './pages/company.js';
import { ContactPage } from './pages/contact.js';

// Initialize router
const router = createRouter('#app');

// Define routes
route(
	'/',
	() => {
		document.querySelector('#app').innerHTML = HomePage();
	},
	'Home',
);

route(
	'/about',
	() => {
		document.querySelector('#app').innerHTML = AboutPage();
	},
	'About',
);

route(
	'/services',
	() => {
		document.querySelector('#app').innerHTML = ServicesPage();
	},
	'Services',
);

route(
	'/blogs',
	() => {
		document.querySelector('#app').innerHTML = BlogsPage();
	},
	'Blog',
);

route(
	'/company',
	() => {
		document.querySelector('#app').innerHTML = CompanyPage();
	},
	'Company',
);

route(
	'/contact',
	() => {
		document.querySelector('#app').innerHTML = ContactPage();
	},
	'Contact',
);

// Start router after all routes are registered
router.start();
