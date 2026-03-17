import { createLayout } from '../layout.js';

export function ContactPage() {
	return createLayout(
		`
    <section class="py-[80px] md:py-[60px]">
      <div class="max-w-[1180px] mx-auto px-4 md:px-[40px]">
        <h1 class="text-[36px] md:text-[52px] font-semibold leading-[46px] md:leading-[60px] mb-4 text-[#1A1A1C]">Contact Us</h1>
        <p class="text-[18px] text-[#545454] mb-[60px]">Get in touch with our team</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px]">
            <h2 class="text-[32px] font-semibold mb-8 text-[#1A1A1C]">Send Us a Message</h2>
            <form class="space-y-6" onsubmit="event.preventDefault(); alert('Message sent! We will get back to you soon.');">
              <div>
                <label for="name" class="block text-[14px] font-[500] mb-2 font-['Outfit']">Name *</label>
                <input type="text" id="name" required class="w-full px-4 py-3 border border-[#E5E5E5] rounded-[8px] focus:outline-none focus:border-[#02ADA8] focus:ring-2 focus:ring-[#02ADA8]/10" placeholder="Your name" />
              </div>
              <div>
                <label for="email" class="block text-[14px] font-[500] mb-2 font-['Outfit']">Email *</label>
                <input type="email" id="email" required class="w-full px-4 py-3 border border-[#E5E5E5] rounded-[8px] focus:outline-none focus:border-[#02ADA8] focus:ring-2 focus:ring-[#02ADA8]/10" placeholder="you@example.com" />
              </div>
              <div>
                <label for="subject" class="block text-[14px] font-[500] mb-2 font-['Outfit']">Subject</label>
                <input type="text" id="subject" class="w-full px-4 py-3 border border-[#E5E5E5] rounded-[8px] focus:outline-none focus:border-[#02ADA8] focus:ring-2 focus:ring-[#02ADA8]/10" placeholder="How can we help?" />
              </div>
              <div>
                <label for="message" class="block text-[14px] font-[500] mb-2 font-['Outfit']">Message *</label>
                <textarea id="message" required rows="5" class="w-full px-4 py-3 border border-[#E5E5E5] rounded-[8px] focus:outline-none focus:border-[#02ADA8] focus:ring-2 focus:ring-[#02ADA8]/10" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" class="w-full bg-[#02ADA8] text-white font-['Outfit'] text-[13px] font-medium px-[40px] py-[15px] rounded-[33px] hover:bg-[#FF601A] transition">Send Message</button>
            </form>
          </div>

          <div>
            <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] mb-6">
              <h3 class="text-[26px] font-semibold mb-6 text-[#1A1A1C]">Contact Information</h3>
              <ul class="space-y-5 text-[15px] text-[#545454]">
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

            <div class="bg-[#FF601A] rounded-[22px] p-[30px]">
              <h3 class="text-[26px] font-semibold mb-3 text-white">Need Urgent Help?</h3>
              <p class="text-[15px] text-white mb-4">Our support team is available 24/7</p>
              <a href="tel:5551234567" class="btn">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
		'/contact',
	);
}
