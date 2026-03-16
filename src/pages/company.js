import { createLayout } from '../layout.js'

export function CompanyPage() {
  return createLayout(`
    <section class="py-8">
      <h1 class="text-4xl font-bold mb-8">Company</h1>
      
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
        <p class="text-gray-600 mb-4">
          To deliver exceptional value to our clients through innovative solutions and outstanding service.
          We strive to be the trusted partner that helps businesses achieve their full potential.
        </p>
      </div>
      
      <div class="grid-2 mb-12">
        <div class="color-div rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Quick Facts</h3>
          <ul class="space-y-3">
            <li>✓ Founded in 2020</li>
            <li>✓ 50+ Happy Clients</li>
            <li>✓ 100+ Projects Completed</li>
            <li>✓ 24/7 Support Available</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
          <ul class="space-y-3 text-gray-600">
            <li>📍 123 Business Street, City, State 12345</li>
            <li>📧 info@mysite.com</li>
            <li>📞 (555) 123-4567</li>
            <li>🕒 Mon-Fri: 9AM - 6PM</li>
          </ul>
        </div>
      </div>
      
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Our Partners</h2>
        <div class="grid-4 gap-6">
          <div class="card text-center py-8">
            <div class="text-gray-400 font-bold text-xl">Partner 1</div>
          </div>
          <div class="card text-center py-8">
            <div class="text-gray-400 font-bold text-xl">Partner 2</div>
          </div>
          <div class="card text-center py-8">
            <div class="text-gray-400 font-bold text-xl">Partner 3</div>
          </div>
          <div class="card text-center py-8">
            <div class="text-gray-400 font-bold text-xl">Partner 4</div>
          </div>
        </div>
      </section>
      
      <section class="color-div rounded-lg p-8 text-center">
        <h2 class="text-2xl font-bold mb-4">Ready to Work Together?</h2>
        <p class="mb-6">Let's discuss how we can help your business succeed</p>
        <a href="/contact" data-link class="btn bg-white text-gray-800">Get in Touch</a>
      </section>
    </section>
  `, '/company')
}
