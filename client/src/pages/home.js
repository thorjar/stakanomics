import { createLayout } from '../layout.js'

export function HomePage() {
  return createLayout(`
    <section class="hero text-center py-16">
      <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p class="text-xl text-gray-600 mb-8">We provide excellent services to help your business grow</p>
      <a href="/contact" data-link class="btn">Get Started</a>
    </section>
    
    <section class="py-12">
      <h2 class="text-2xl font-bold mb-8 text-center">Our Services</h2>
      <div class="grid-3">
        <div class="card">
          <h3 class="text-xl font-semibold mb-2">Consulting</h3>
          <p class="text-gray-600 mb-4">Expert advice to help you make informed decisions</p>
          <a href="/services" data-link class="text-blue-500">Learn More →</a>
        </div>
        <div class="card">
          <h3 class="text-xl font-semibold mb-2">Development</h3>
          <p class="text-gray-600 mb-4">Custom solutions tailored to your needs</p>
          <a href="/services" data-link class="text-blue-500">Learn More →</a>
        </div>
        <div class="card">
          <h3 class="text-xl font-semibold mb-2">Support</h3>
          <p class="text-gray-600 mb-4">24/7 support to keep your business running</p>
          <a href="/services" data-link class="text-blue-500">Learn More →</a>
        </div>
      </div>
    </section>
    
    <section class="color-div text-center py-12">
      <h2 class="text-2xl font-bold mb-4">Ready to Get Started?</h2>
      <p class="mb-6">Contact us today and let's discuss how we can help you</p>
      <a href="/contact" data-link class="btn bg-white text-gray-800">Contact Us</a>
    </section>
  `, '/')
}
