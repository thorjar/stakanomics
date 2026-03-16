import './style.css'
import { createRouter, route } from './router.js'
import { HomePage } from './pages/home.js'
import { AboutPage } from './pages/about.js'
import { ServicesPage } from './pages/services.js'
import { BlogsPage } from './pages/blogs.js'
import { CompanyPage } from './pages/company.js'
import { ContactPage } from './pages/contact.js'

// Initialize router
createRouter('#app')

// Define routes
route('/', () => {
  document.querySelector('#app').innerHTML = HomePage()
})

route('/about', () => {
  document.querySelector('#app').innerHTML = AboutPage()
})

route('/services', () => {
  document.querySelector('#app').innerHTML = ServicesPage()
})

route('/blogs', () => {
  document.querySelector('#app').innerHTML = BlogsPage()
})

route('/company', () => {
  document.querySelector('#app').innerHTML = CompanyPage()
})

route('/contact', () => {
  document.querySelector('#app').innerHTML = ContactPage()
})
