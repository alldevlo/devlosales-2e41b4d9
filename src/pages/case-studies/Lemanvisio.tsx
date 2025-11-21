import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Lemanvisio() {
  return (
    <>
      <Helmet>
        <title>Audiovisual Integrator - Case Study | devlo</title>
        <meta name="description" content="LEMANVISIO provides IT and conference tooling integrations, including modern audiovisual solutions for corporate office projects." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/en/case-studies" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>
            
            <img 
              src="/CS_devlo/Logo/Asset 51.webp" 
              alt="Lemanvisio Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Audiovisual Integrator
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              LEMANVISIO provides IT and conference tooling integrations, including modern audiovisual solutions for corporate office projects.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">89%</div>
                <div className="text-slate-600">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">69%</div>
                <div className="text-slate-600">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">6%</div>
                <div className="text-slate-600">Meeting Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">16</div>
                <div className="text-slate-600">Appointments</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        
        {/* About Section */}
        <section className="py-16 px-4 ">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">About</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                LEMANVISIO provides IT and conference tooling integrations, including modern audiovisual solutions for corporate office projects.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                ICP: Architecture and engineering firms specializing in office design and workplace projects in Switzerland, acting as key influencers and decision-makers for AV integration.
              </p>
            </div>
          </div>
        </section>
        
        {/* Challenge Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">The Challenge</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                Almost every company needs audiovisual services. However, LEMANVISIO wanted to focus their B2B client acquisition on high-leverage intermediaries: architects and engineers who specify AV solutions in their projects.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                They needed:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>A focused ICP strategy</li>
                <li>An outsourced sales prospecting engine to reach decision-makers in those firms</li>
                <li>A cold outreach strategy that would maximize replies and meetings</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Strategy Section */}
        <section className="py-16 px-4 ">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">The Strategy</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Refine the ICP to the most profitable segment</h3>
                <p className="text-slate-600 leading-relaxed">Our B2B lead generation agency analyzed different profiles and concluded that architect and engineering firms were the most promising ICP for this phase: high influence on projects and strong potential lifetime value.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Design a multi-channel cold outbound sequence</h3>
                <p className="text-slate-600 leading-relaxed">We built a personalized, multi-channel prospecting sequence combining cold emails and LinkedIn messages, highlighting the business value of up-to-date conference technologies for future office projects.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Invite to demos instead of generic sales calls</h3>
                <p className="text-slate-600 leading-relaxed">The main call-to-action was to invite prospects to a demo showcasing the latest audiovisual and conference solutions. This appointment setting angle felt consultative rather than pushy.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">The cold outbound campaign generated:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>89% open rate</li>
                <li>69% response rate</li>
                <li>6% of leads booking a meeting with the client</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Interestingly, the interest rate (meeting rate) was significantly lower than the reply rate, revealing an important insight: architects and engineers are extremely responsive to cold outreach, but their need for AV integration services is cyclical and project-based.
              </p>
            </div>
          </div>
        </section>
        
        {/* Key Takeaways */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Key Takeaways
            </h2>
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  Responsiveness ≠ buying intent
Even if an ICP is very reactive to cold emails, you still need to evaluate the real potential to sign new clients and generate revenue.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  Cold outreach is a powerful way to open doors
For architecture and engineering firms, cold outreach and cold email are effective ways to start relationships and map future opportunities, even if the short-term need is low.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  Continuous sales outreach keeps you top of mind
Regular, value-driven follow-ups help ensure you’re the first AV partner they think about when a new project appears.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  If you’re an AV integrator or IT services provider, a focused B2B lead generation and appointment setting strategy can help you unlock the untapped potential of your ecosystem partners, not only your end clients.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to achieve similar results?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Book a discovery call with our B2B sales prospecting agency to see how we can help you generate qualified leads and close more deals.
            </p>
            <Link
              to="/en/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
