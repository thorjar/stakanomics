import { createLayout } from '../layout.js'

export function ServicesPage() {
  return createLayout(`
    <section class="py-8">
      <h1 class="text-4xl font-bold mb-8">Our Services</h1>
      <p class="text-xl text-gray-600 mb-12">Comprehensive solutions for your business needs</p>
      
      <div class="grid-2">
        <div class="card">
          <h2 class="text-2xl font-semibold mb-4">Consulting</h2>
          <p class="text-gray-600 mb-4">
            Our expert consultants provide strategic advice to help you navigate complex business challenges.
            We work closely with you to understand your goals and develop actionable plans.
          </p>
          <ul class="text-gray-600 mb-6 space-y-2">
            <li>• Business Strategy</li>
            <li>• Process Optimization</li>
            <li>• Market Analysis</li>
            <li>• Risk Assessment</li>
          </ul>
          <a href="/contact" data-link class="btn">Request Consultation</a>
        </div>
        
        <div class="card">
          <h2 class="text-2xl font-semibold mb-4">Development</h2>
          <p class="text-gray-600 mb-4">
            We build custom software solutions that drive efficiency and growth.
            Our team uses the latest technologies to deliver robust, scalable applications.
          </p>
          <ul class="text-gray-600 mb-6 space-y-2">
            <li>• Web Applications</li>
            <li>• Mobile Apps</li>
            <li>• API Development</li>
            <li>• System Integration</li>
          </ul>
          <a href="/contact" data-link class="btn">Start a Project</a>
        </div>
        
        <div class="card">
          <h2 class="text-2xl font-semibold mb-4">Support</h2>
          <p class="text-gray-600 mb-4">
            Our dedicated support team is available around the clock to ensure your systems run smoothly.
            We provide proactive monitoring and rapid issue resolution.
          </p>
          <ul class="text-gray-600 mb-6 space-y-2">
            <li>• 24/7 Technical Support</li>
            <li>• System Monitoring</li>
            <li>• Maintenance & Updates</li>
            <li>• Training & Documentation</li>
          </ul>
          <a href="/contact" data-link class="btn">Get Support</a>
        </div>
        
        <div class="color-div rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Custom Solutions</h2>
          <p class="mb-4">
            Need something specific? We create tailored solutions to meet your unique requirements.
          </p>
          <a href="/contact" data-link class="btn bg-white text-gray-800">Discuss Your Needs</a>
        </div>
      </div>
    </section>
  `, '/services')
}
