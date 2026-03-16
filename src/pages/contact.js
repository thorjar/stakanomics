import { createLayout } from '../layout.js'

export function ContactPage() {
  return createLayout(`
    <section class="py-8">
      <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
      <p class="text-xl text-gray-600 mb-12">Get in touch with our team</p>
      
      <div class="grid-2">
        <div class="card">
          <h2 class="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form class="space-y-4" onsubmit="event.preventDefault(); alert('Message sent! We will get back to you soon.');">
            <div>
              <label for="name" class="block text-sm font-medium mb-1">Name *</label>
              <input type="text" id="name" required class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[rgb(91,209,215)]" placeholder="Your name" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email *</label>
              <input type="email" id="email" required class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[rgb(91,209,215)]" placeholder="you@example.com" />
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium mb-1">Subject</label>
              <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[rgb(91,209,215)]" placeholder="How can we help?" />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-1">Message *</label>
              <textarea id="message" required rows="5" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[rgb(91,209,215)]" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" class="btn w-full">Send Message</button>
          </form>
        </div>
        
        <div>
          <div class="card">
            <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
            <ul class="space-y-4 text-gray-600">
              <li class="flex items-start gap-3">
                <span>📍</span>
                <span>123 Business Street<br/>City, State 12345</span>
              </li>
              <li class="flex items-center gap-3">
                <span>📧</span>
                <span>info@mysite.com</span>
              </li>
              <li class="flex items-center gap-3">
                <span>📞</span>
                <span>(555) 123-4567</span>
              </li>
              <li class="flex items-center gap-3">
                <span>🕒</span>
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
          
          <div class="color-div rounded-lg p-6 mt-6">
            <h3 class="text-xl font-semibold mb-2">Need Urgent Help?</h3>
            <p class="mb-4">Our support team is available 24/7</p>
            <a href="tel:5551234567" class="btn bg-white text-gray-800">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  `, '/contact')
}
