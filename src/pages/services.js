import { createLayout } from '../layout.js';

export function ServicesPage() {
	return createLayout(
		`
    <section class="py-[80px] md:py-[60px]">
      <div class="max-w-[1180px] mx-auto px-4 md:px-[40px]">
        <h1 class="text-[36px] md:text-[52px] font-semibold leading-[46px] md:leading-[60px] mb-4 text-[#1A1A1C]">Our Services</h1>
        <p class="text-[18px] text-[#545454] mb-[60px]">Comprehensive solutions for your business needs</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] hover:shadow-lg transition">
            <h2 class="text-[32px] font-semibold mb-6 text-[#1A1A1C]">Consulting</h2>
            <p class="text-[15px] text-[#545454] mb-6">
              Our expert consultants provide strategic advice to help you navigate complex business challenges.
              We work closely with you to understand your goals and develop actionable plans.
            </p>
            <ul class="text-[15px] text-[#545454] mb-8 space-y-3">
              <li>• Business Strategy</li>
              <li>• Process Optimization</li>
              <li>• Market Analysis</li>
              <li>• Risk Assessment</li>
            </ul>
            <a href="/contact" data-link class="inline-block bg-[#02ADA8] text-white font-['Outfit'] text-[13px] font-medium px-[40px] py-[15px] rounded-[33px] hover:bg-[#FF601A] transition">Request Consultation</a>
          </div>

          <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] hover:shadow-lg transition">
            <h2 class="text-[32px] font-semibold mb-6 text-[#1A1A1C]">Development</h2>
            <p class="text-[15px] text-[#545454] mb-6">
              We build custom software solutions that drive efficiency and growth.
              Our team uses the latest technologies to deliver robust, scalable applications.
            </p>
            <ul class="text-[15px] text-[#545454] mb-8 space-y-3">
              <li>• Web Applications</li>
              <li>• Mobile Apps</li>
              <li>• API Development</li>
              <li>• System Integration</li>
            </ul>
            <a href="/contact" data-link class="inline-block bg-[#02ADA8] text-white font-['Outfit'] text-[13px] font-medium px-[40px] py-[15px] rounded-[33px] hover:bg-[#FF601A] transition">Start a Project</a>
          </div>

          <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] hover:shadow-lg transition">
            <h2 class="text-[32px] font-semibold mb-6 text-[#1A1A1C]">Support</h2>
            <p class="text-[15px] text-[#545454] mb-6">
              Our dedicated support team is available around the clock to ensure your systems run smoothly.
              We provide proactive monitoring and rapid issue resolution.
            </p>
            <ul class="text-[15px] text-[#545454] mb-8 space-y-3">
              <li>• 24/7 Technical Support</li>
              <li>• System Monitoring</li>
              <li>• Maintenance & Updates</li>
              <li>• Training & Documentation</li>
            </ul>
            <a href="/contact" data-link class="inline-block bg-[#02ADA8] text-white font-['Outfit'] text-[13px] font-medium px-[40px] py-[15px] rounded-[33px] hover:bg-[#FF601A] transition">Get Support</a>
          </div>

          <div class="bg-[#FF601A] rounded-[22px] p-[40px]">
            <h2 class="text-[32px] font-semibold mb-6 text-white">Custom Solutions</h2>
            <p class="text-[15px] text-white mb-8">
              Need something specific? We create tailored solutions to meet your unique requirements.
            </p>
            <a href="/contact" data-link class="btn">Discuss Your Needs</a>
          </div>
        </div>
      </div>
    </section>
  `,
		'/services',
	);
}
