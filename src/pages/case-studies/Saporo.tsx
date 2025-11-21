import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Saporo() {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Lead Generation & Cold Calling - Case Study | devlo</title>
        <meta name="description" content="Saporo helps organizations better protect their Active Directory by reducing excessive user access and strengthening identity-centric security." />
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
              src="/CS_devlo/Logo/Asset 16.webp" 
              alt="Saporo Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Cybersecurity Lead Generation & Cold Calling
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Saporo helps organizations better protect their Active Directory by reducing excessive user access and strengthening identity-centric security.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4,500</div>
                <div className="text-slate-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">79%</div>
                <div className="text-slate-600">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">26%</div>
                <div className="text-slate-600">Reply Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">180+</div>
                <div className="text-slate-600">Qualified Prospects</div>
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
                Saporo helps organizations better protect their Active Directory by reducing excessive user access and strengthening identity-centric security.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Services: Cybersecurity SaaS
ICPs: CISOs, Heads of Cybersecurity, Heads of IT Infrastructure and Information Security leaders in mid-to-large enterprises across several regions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Challenge Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Saporo needed to:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Validate product-market fit across several ICPs in information security, IT infrastructure and cybersecurity.</h3>
                <p className="text-slate-600 leading-relaxed">2. Generate as many qualified appointments as possible with limited time and resources.
3. Stay close to their market by learning from each campaign and understanding what resonates with different buyer personas.</p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Internal teams did not have the capacity to continuously test new markets, refine messaging and run multi-channel prospecting at scale, so they partnered with devlo to outsource their B2B sales prospecting.
              </p>
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
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Identify all accounts matching the ICP</h3>
                <p className="text-slate-600 leading-relaxed">We built a large, structured database of companies across DACH, France, Benelux, the Middle East and the USA that matched Saporo’s ICP criteria.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Map the right decision-makers in each account</h3>
                <p className="text-slate-600 leading-relaxed">For every company, our lead generation team identified the highest-level decision-maker (CISO, Head of Cybersecurity, Head of IT Infrastructure). This ensured that cold outreach would go straight to the people who own the security budget.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Account-Based Strategy for follow-up campaigns</h3>
                <p className="text-slate-600 leading-relaxed">For accounts that did not reply, next waves targeted the second-best decision-maker (for example, a direct report of the CISO). This Account-Based Strategy increased coverage and kept each key account warm.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Systematic reporting and learning loops</h3>
                <p className="text-slate-600 leading-relaxed">Saporo received weekly and monthly reports summarizing open rates, reply rates, interest rates and meetings by region, industry and job title. This data helped refine ICPs, prioritize future campaigns and improve conversion rates.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Results</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>79% open rate</li>
                <li>19% click rate</li>
                <li>26% reply rate</li>
                <li>4.1% interest rate (organizations interested in a meeting)</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                On top of that, the very first campaign delivered:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>81% open rate</li>
                <li>54% reply rate</li>
                <li>16% of organizations interested in a meeting with Saporo</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                For a complex, technical field like cybersecurity, these metrics illustrate the power of a well-executed B2B lead generation and cold call agency setup.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Client testimonial
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                “I believe devlo is a dream partner for start-ups looking to validate product-market fit and get as many qualified meetings as possible with very little time and resources. The professionalism of Charles, from lead generation to structuring the campaign and getting meetings, made the collaboration very pleasant and efficient. Our first campaign with devlo achieved 81% open rate, 54% reply rate and 16% of organizations interested in meeting with Saporo. This is extremely effective, especially in an industry as complex as cyber security.”
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Turning cybersecurity outreach into predictable B2B growth
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                For cybersecurity vendors, B2B sales development is often slow and technical. Working with a B2B sales prospecting agency allows you to:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Test multiple ICPs and geographies in parallel</li>
                <li>Build a robust pipeline of qualified leads</li>
                <li>Decrease sales cycle duration by focusing account executives on the right meetings</li>
                <li>Unlock the untapped potential of markets that your internal team does not have time to explore</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can Book a Discovery Call to see how a similar cold outreach strategy and outsourced sales prospecting framework could help your cybersecurity company reach more CISOs, close more deals and support your company growth.
              </p>
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
