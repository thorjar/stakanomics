import { createLayout } from '../layout.js'

export function AboutPage() {
  return createLayout(`
    <section class="py-8">
      <h1 class="text-4xl font-bold mb-8">About Us</h1>
      
      <div class="grid-2">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Our Story</h2>
          <p class="text-gray-600 mb-4">
            We are a dedicated team of professionals committed to delivering exceptional results for our clients. 
            With years of experience in the industry, we have developed expertise that sets us apart.
          </p>
          <p class="text-gray-600 mb-4">
            Our mission is to provide innovative solutions that help businesses thrive in today's competitive landscape.
          </p>
          <a href="/contact" data-link class="btn">Work With Us</a>
        </div>
        
        <div class="color-div rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Our Values</h3>
          <ul class="space-y-3">
            <li>✓ Integrity in everything we do</li>
            <li>✓ Excellence in service delivery</li>
            <li>✓ Innovation in problem-solving</li>
            <li>✓ Partnership with our clients</li>
          </ul>
        </div>
      </div>
      
      <section class="py-12">
        <h2 class="text-2xl font-bold mb-6">Meet Our Team</h2>
        <div class="grid-3">
          <div class="card text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 class="font-semibold">John Doe</h3>
            <p class="text-gray-600 text-sm">CEO & Founder</p>
          </div>
          <div class="card text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 class="font-semibold">Jane Smith</h3>
            <p class="text-gray-600 text-sm">Head of Operations</p>
          </div>
          <div class="card text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 class="font-semibold">Mike Johnson</h3>
            <p class="text-gray-600 text-sm">Lead Developer</p>
          </div>
        </div>
      </section>
    </section>
  `, '/about')
}
