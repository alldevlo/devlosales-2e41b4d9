import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SquareCo() {
  return (
    <>
      <Helmet>
        <title>Identifying the Best ICPs with Cold Outreach - Case Study | devlo</title>
        <meta name="description" content="Square Commodities (SquareCo) publishes professional analyses and data on low-carbon fuel and biofuels markets. Their platform helps companies better understand regulatory frameworks, market trends an" />
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
              src="/CS_devlo/Logo/Asset 31.webp" 
              alt="SquareCo Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Identifying the Best ICPs with Cold Outreach
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Square Commodities (SquareCo) publishes professional analyses and data on low-carbon fuel and biofuels markets. Their platform helps companies better understand regulatory frameworks, market trends an
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">74%</div>
                <div className="text-slate-600">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">37%</div>
                <div className="text-slate-600">Reply Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">27%</div>
                <div className="text-slate-600">CTR</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">52</div>
                <div className="text-slate-600">Interested Leads</div>
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
                Square Commodities (SquareCo) publishes professional analyses and data on low-carbon fuel and biofuels markets. Their platform helps companies better understand regulatory frameworks, market trends and key industry developments in renewable fuels.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Services: Market intelligence for renewable energy
ICPs: Biofuels traders, analysts, Heads of Global Trade Management, Sustainable Fuels & Carbon Managers, Trading & Risk Management Coordinators, Heads of Sales, Commercial Directors.
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
              <p className="text-slate-600 leading-relaxed mb-4">
                Exclude low-value segments from future campaigns
Companies focused exclusively on biogas were systematically removed from the next waves. They consumed budget but had no real need for the solution.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Use prospect feedback to refine your offer
For two high-value ICPs, feedback from cold outreach led the client to develop a new platform tailored to their needs. Cold outreach became both a demand-generation and product-validation channel.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Personalization improves deliverability and conversion
Strong personalization (names, roles, specific regulations and market constraints) and liquid syntax helped bypass spam filters and increase reply rates, leading to more meetings and a healthier sales pipeline.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                From cold outreach to company growth
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                For data and information-driven businesses, B2B lead generation is not just about sending more emails. It’s about strategic ICP testing, structured sales processes and continuous optimization.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you want to improve your conversion rates, sign new clients and close more deals with a lean team, an experienced B2B sales prospecting agency can help you design and run these campaigns, then train your SDRs and BDRs to execute them at scale.
              </p>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">After just two campaigns, the B2B lead generation program delivered:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>74% open rate</li>
                <li>27% click-through rate</li>
                <li>37% reply rate</li>
                <li>9% interest rate (52 potential customers interested in a meeting)</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                More importantly, data from these campaigns allowed the client to rank their ICPs based on real behavior and revenue potential, not assumptions.
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
