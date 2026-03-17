import { createLayout } from '../layout.js';

export function AboutPage() {
	return createLayout(
		`
    <!--
    <section class="py-[80px] md:py-[60px]">
      <div class="max-w-[1180px] mx-auto px-4 md:px-[40px]">
        <h1 class="text-[36px] md:text-[52px] font-semibold leading-[46px] md:leading-[60px] mb-[60px] text-[#1A1A1C]">About Us</h1>

        <div class="grid md:grid-cols-2 gap-[40px] mb-[60px]">
          <div>
            <h2 class="text-[32px] md:text-[42px] font-semibold mb-6 text-[#1A1A1C]">Our Story</h2>
            <p class="text-[15px] text-[#545454] mb-6">
              We are a dedicated team of professionals committed to delivering exceptional results for our clients.
              With years of experience in the industry, we have developed expertise that sets us apart.
            </p>
            <p class="text-[15px] text-[#545454] mb-8">
              Our mission is to provide innovative solutions that help businesses thrive in today's competitive landscape.
            </p>
            <a href="/contact" data-link class="inline-block bg-[#02ADA8] text-white font-['Outfit'] text-[13px] font-medium px-[40px] py-[15px] rounded-[33px] hover:bg-[#FF601A] transition">Work With Us</a>
          </div>

          <div class="bg-[#F9F9F9] rounded-[22px] p-[40px]">
            <h3 class="text-[26px] font-semibold mb-6 text-[#1A1A1C]">Our Values</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-[15px] text-[#1A1A1C] font-['Outfit'] font-[600]">
                <span class="text-[#02ADA8]">✓</span> Integrity in everything we do
              </li>
              <li class="flex items-center gap-3 text-[15px] text-[#1A1A1C] font-['Outfit'] font-[600]">
                <span class="text-[#02ADA8]">✓</span> Excellence in service delivery
              </li>
              <li class="flex items-center gap-3 text-[15px] text-[#1A1A1C] font-['Outfit'] font-[600]">
                <span class="text-[#02ADA8]">✓</span> Innovation in problem-solving
              </li>
              <li class="flex items-center gap-3 text-[15px] text-[#1A1A1C] font-['Outfit'] font-[600]">
                <span class="text-[#02ADA8]">✓</span> Partnership with our clients
              </li>
            </ul>
          </div>
        </div>

    -->

    <section class="hero py-[20px] md:py-[30px]">
      <div class="grid md:grid-cols-2 gap-[40px] mb-[60px] items-center">
        <div class="pr-0 md:pr-[20px]">
          <img src="https://stakanomics.com/wp-content/uploads/2025/08/High-Performance-Trading-Verified.-No-Promises-—-Just-Proof.jpg" alt="High Performance Trading Verified" class="w-full h-auto rounded-[22px]">
        </div>
        <div class="pl-0 md:pl-[20px]">
          <h2 class="text-[28px] md:text-[42px] font-semibold leading-[36px] md:leading-[50px] mb-4 text-[#1A1A1C]">High-Performance Trading, Verified. No Promises — Just Proof.</h2>
          <p class="text-[15px] text-[#545454] mb-5">Stakanomics is a precision-engineered algorithmic trading platform designed for qualified investors seeking transparency, efficiency, and measurable performance. Every dollar allocated works for you—tracked on-chain, independently verified, and governed by automated logic.</p>
          <p class="text-[15px] text-[#545454] mb-6">Our programmatic trading infrastructure removes emotional decision-making, replacing it with proven models and structured monthly cycles. If you're looking for a serious alternative to passive yield, speculative crypto, or fund managers charging fees regardless of outcome, Stakanomics offers a new path forward—one grounded in performance, not promises.</p>
          <a href="/contact" data-link class="inline-block bg-[#02ADA8] text-white font-['Outfit'] text-[13px] font-medium px-[40px] py-[15px] rounded-[33px] hover:bg-[#FF601A] transition">Learn More</a>
        </div>
      </div>
      <div class="max-w-[1180px] mx-auto px-4 md:px-[40px] text-center">
          <h5 class="text-[40px] font-semibold mb-4 text-[#1A1A1C]">How It Works</h5>
          <p class="text-[15px] text-[#545454] mb-8 max-w-[800px] mx-auto">At the core of Stakanomics is a performance-driven investment model powered by smart contracts and verified externally via MYFXBOOK. Investors purchase $STKN tokens, each representing participation in the platform's proprietary trading algorithm.</p>
      </div>
    </section>

        <section class="py-[60px]">
            <div class="grid md:grid-cols-2 gap-[40px] items-center">
              <div>
                <h2 class="text-[32px] md:text-[42px] font-semibold mb-6 text-[#1A1A1C]">Key Principles</h2>
                <ul class="space-y-4 mb-6">
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#FF601A] flex-shrink-0 mt-0.5" viewBox="0 0 512 512" fill="currentColor"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                    <span class="text-[15px] text-[#1A1A1C] font-['Outfit'] font-[400]">Fixed Entry Price: $10,000 per token, always.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#FF601A] flex-shrink-0 mt-0.5" viewBox="0 0 512 512" fill="currentColor"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                    <span class="text-[15px] text-[#1A1A1C] font-['Outfit'] font-[400]">Compounding Structure: Returns (if any) are automatically reflected in token price monthly.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#FF601A] flex-shrink-0 mt-0.5" viewBox="0 0 512 512" fill="currentColor"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                    <span class="text-[15px] text-[#1A1A1C] font-['Outfit'] font-[400]">Independent Validation: All trading results are made public via MYFXBOOK.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#FF601A] flex-shrink-0 mt-0.5" viewBox="0 0 512 512" fill="currentColor"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                    <span class="text-[15px] text-[#1A1A1C] font-['Outfit'] font-[400]">Locked Participation: A 12-month cycle ensures capital stability and compounding effectiveness.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#FF601A] flex-shrink-0 mt-0.5" viewBox="0 0 512 512" fill="currentColor"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                    <span class="text-[15px] text-[#1A1A1C] font-['Outfit'] font-[400]">Redemption & Reinvestment Options: At the end of each cycle, investors can choose to claim or roll over.</span>
                  </li>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-[#FF601A] flex-shrink-0 mt-0.5" viewBox="0 0 512 512" fill="currentColor"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                    <span class="text-[15px] text-[#1A1A1C] font-['Outfit'] font-[400]">No hype. Just a math-based model, built to deliver measurable results within clearly defined risk parameters.</span>
                  </li>
                </ul>
                <a href="/contact" data-link class="inline-block bg-[#02ADA8] text-white font-['Outfit'] text-[13px] font-medium px-[40px] py-[15px] rounded-[33px] hover:bg-[#FF601A] transition">Know More</a>
              </div>
              <div class="pr-0 md:pr-[20px]">
                <img src="https://stakanomics.com/wp-content/uploads/2025/08/KEY.png" alt="KEY Principles" class="w-full h-auto rounded-[22px]">
              </div>
            </div>
          </div>
        </section>

        <section class="py-[40px] md:py-[50px]">
          <div class="max-w-[1180px] mx-auto px-4 md:px-[40px]">
          <h5 class="text-[40px] font-semibold mb-4 text-[#1A1A1C]">Performance</h5>
            <div class="bg-[#02ADA8] border-4 border-[#FF601A] rounded-[22px] p-[30px] md:p-[40px]">
              <div class="grid md:grid-cols-5 gap-[30px] md:gap-[40px] items-center">
                <div class="md:col-span-1 text-white">
                  <ul class="space-y-4">
                    <li class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-[#FF601A] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"/></svg>
                      </div>
                      <div>
                        <span class="text-[20px] md:text-[22px] font-bold">9.93%</span>
                        <span class="text-[#FF601A] block text-sm">gained</span>
                      </div>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>
                      </div>
                      <div>
                        <span class="text-[20px] md:text-[22px] font-bold">0.22%</span>
                        <span class="text-white/80 block text-sm">daily</span>
                      </div>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
                      </div>
                      <div>
                        <span class="text-[20px] md:text-[22px] font-bold">9.12%</span>
                        <span class="text-white/80 block text-sm">monthly</span>
                      </div>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                      </div>
                      <div>
                        <span class="text-[20px] md:text-[22px] font-bold">6.96%</span>
                        <span class="text-white/80 block text-sm">drawdown</span>
                      </div>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-[#FF601A] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/></svg>
                      </div>
                      <div>
                        <span class="text-[20px] md:text-[22px] font-bold">$993.00</span>
                        <span class="text-[#FF601A] block text-sm">profit</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="md:col-span-4">
                  <img src="/sprites/trend.jpeg" alt="Trend" class="w-full h-auto rounded-[22px]">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-[60px]">
          <h2 class="text-[32px] md:text-[42px] font-semibold mb-[40px] text-[#1A1A1C]">Meet Our Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] text-center hover:shadow-lg transition">
              <div class="w-[120px] h-[120px] bg-[#F9F9F9] rounded-full mx-auto mb-6"></div>
              <h3 class="text-[20px] font-semibold text-[#1A1A1C]">John Doe</h3>
              <p class="text-[15px] text-[#545454]">CEO & Founder</p>
            </div>
            <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] text-center hover:shadow-lg transition">
              <div class="w-[120px] h-[120px] bg-[#F9F9F9] rounded-full mx-auto mb-6"></div>
              <h3 class="text-[20px] font-semibold text-[#1A1A1C]">Jane Smith</h3>
              <p class="text-[15px] text-[#545454]">Head of Operations</p>
            </div>
            <div class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] text-center hover:shadow-lg transition">
              <div class="w-[120px] h-[120px] bg-[#F9F9F9] rounded-full mx-auto mb-6"></div>
              <h3 class="text-[20px] font-semibold text-[#1A1A1C]">Mike Johnson</h3>
              <p class="text-[15px] text-[#545454]">Lead Developer</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  `,
		'/about',
	);
}
