import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Locky() {
  return (
    <>
      <Helmet>
        <title>+40 Interested Companies out of 286 Contacted in the Mobility Sector - Case Study | devlo</title>
        <meta name="description" content="Locky develops secure lockers and innovative mobility solutions for cities, campuses and private organisations. Before working with a **B2B sales prospecting agency**, they had:" />
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
              src="/CS_devlo/Logo/Asset 91.webp" 
              alt="Locky Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              +40 Interested Companies out of 286 Contacted in the Mobility Sector
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Locky develops secure lockers and innovative mobility solutions for cities, campuses and private organisations. Before working with a **B2B sales prospecting agency**, they had:
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">286</div>
                <div className="text-slate-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">40+</div>
                <div className="text-slate-600">Interested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20</div>
                <div className="text-slate-600">Discovery Calls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15</div>
                <div className="text-slate-600">Demonstrations</div>
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
                Locky develops secure lockers and innovative mobility solutions for cities, campuses and private organisations. Before working with a **B2B sales prospecting agency**, they had:
              </p>
            </div>
          </div>
        </section>
        
        {/* Challenge Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Locky wanted to start its commercial development in the mobility sector but lacked:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>A clear target market definition</li>
                <li>A list of qualified leads</li>
                <li>A scalable process for **prospecting**, **lead qualification** and **appointment setting**</li>
                <li>The right tools and techniques to **improve conversion rates** and **close more deals**</li>
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
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Define the Ideal Customer Profiles and segments</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">In two months, the campaign delivered:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**286 companies contacted**</li>
                <li>**40 companies interested** (14% interest rate)</li>
                <li>**20 discovery calls**</li>
                <li>**15 demonstrations planned** with highly qualified prospects</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                For an early‑stage company with no previous outbound system, this **B2B sales development** program provided a solid foundation and a healthy pipeline of future customers.
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
                  - Starting with a clear ICP and segmented database accelerates learning and helps you quickly spot the most promising markets.
- **Cold outreach** combined with lightweight **sales training** enables founders to **sign new clients** faster and avoid months of trial and error.
- A simple CRM and structured follow‑up process are essential to **increase the size of your pipeline** and shorten your sales cycle.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  If you are launching a mobility or hardware solution and want to **generate B2B sales** from day one, partnering with a **B2B sales prospecting agency** can help you design the right strategy, build the database and book your first wave of meetings.
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
