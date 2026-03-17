import { createLayout } from '../layout.js';

export function CompanyPage() {
	return createLayout(
		`
    <section class="py-[80px] md:py-[60px]">
      <div class="max-w-[1180px] mx-auto px-4 md:px-[40px]">
        <h1 class="text-[36px] md:text-[52px] font-semibold leading-[46px] md:leading-[60px] mb-[60px] text-[#1A1A1C]">Company</h1>

        <div class="mb-[60px]">
          <h2 class="text-[32px] md:text-[42px] font-semibold mb-6 text-[#1A1A1C]">Our Mission</h2>
          <p class="text-[15px] text-[#545454] mb-6">
            To deliver exceptional value to our clients through innovative solutions and outstanding service.
            We strive to be the trusted partner that helps businesses achieve their full potential.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-[40px] mb-[60px]">
          <div class="bg-[#F9F9F9] rounded-[22px] p-[40px]">
            <h3 class="text-[26px] font-semibold mb-6 text-[#1A1A1C]">Quick Facts</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-[15px] text-[#1A1A1C] font-['Outfit'] font-[600]">
                <span class="text-[#02ADA8]">✓</span> Founded in 2020
              </li>
              <li class="flex items-center gap-3 text-[15px] text-[#1A1A1C] font-['Outfit'] font-[600]">
                <span class="text-[#02ADA8]">✓</span> 50+ Happy Clients
              </li>
              <li class="flex items-center gap-3 text-[15px] text-[#1A1A1C] font-['Outfit'] font-[600]">
                <span class="text-[#02ADA8]">✓</span> 100+ Projects Completed
              </li>
              <li class="flex items-center gap-3 text-[15px] text-[#1A1A1C] font-['Outfit'] font-[600]">
                <span class="text-[#02ADA8]">✓</span> 24/7 Support Available
              </li>
            </ul>
          </div>

          <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px]">
            <h3 class="text-[26px] font-semibold mb-6 text-[#1A1A1C]">Contact Information</h3>
            <ul class="space-y-4 text-[15px] text-[#545454]">
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
        </div>

        <section class="mb-[60px]">
          <h2 class="text-[32px] md:text-[42px] font-semibold mb-[40px] text-[#1A1A1C]">Our Partners</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
            <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] text-center hover:shadow-lg transition">
              <div class="text-[#999] font-bold text-[20px]">Partner 1</div>
            </div>
            <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] text-center hover:shadow-lg transition">
              <div class="text-[#999] font-bold text-[20px]">Partner 2</div>
            </div>
            <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] text-center hover:shadow-lg transition">
              <div class="text-[#999] font-bold text-[20px]">Partner 3</div>
            </div>
            <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] text-center hover:shadow-lg transition">
              <div class="text-[#999] font-bold text-[20px]">Partner 4</div>
            </div>
          </div>
        </section>

        <section class="bg-[#FF601A] rounded-[22px] p-[60px] text-center">
          <h2 class="text-[32px] font-bold mb-6 text-white">Ready to Work Together?</h2>
          <p class="text-[15px] text-white mb-8">Let's discuss how we can help your business succeed</p>
          <a href="/contact" data-link class="btn">Get in Touch</a>
        </section>
      </div>
    </section>
  `,
		'/company',
	);
}
