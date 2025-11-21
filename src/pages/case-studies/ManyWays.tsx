import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ManyWays() {
  return (
    <>
      <Helmet>
        <title>B2B Merchandising Lead Generation with 70% Response Rate - Case Study | devlo</title>
        <meta name="description" content="Many Ways is a Swiss B2B company offering textile merchandising and personalised branded objects. Their clients are companies, schools and student associations that want high-quality, customised cloth" />
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
              src="/CS_devlo/Logo/Asset 71.webp" 
              alt="ManyWays Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              B2B Merchandising Lead Generation with 70% Response Rate
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Many Ways is a Swiss B2B company offering textile merchandising and personalised branded objects. Their clients are companies, schools and student associations that want high-quality, customised cloth
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">70%</div>
                <div className="text-slate-600">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">8%</div>
                <div className="text-slate-600">Meeting Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-slate-600">Day 1 Results</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">CH</div>
                <div className="text-slate-600">Focus Market</div>
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
                Many Ways is a Swiss B2B company offering textile merchandising and personalised branded objects. Their clients are companies, schools and student associations that want high-quality, customised clothing and accessories for events, teams and communities.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The company wanted to scale **B2B client acquisition** without hiring an in‑house SDR team. They chose to **outsource their business development** to devlo, a specialist **B2B sales prospecting agency** focused on multi‑channel **outreach services** and **appointment setting**.
              </p>
            </div>
          </div>
        </section>
        
        {/* Challenge Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Many Ways needed to:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Identify the right **Ideal Customer Profiles (ICPs)** in universities, schools and companies.</li>
                <li>Reach decision‑makers in marketing, communications and student committees.</li>
                <li>Launch a **cold outreach** engine able to constantly **generate B2B sales** opportunities and book meetings.</li>
                <li>Free up the founder’s time by delegating repetitive **prospecting** and **lead qualification** tasks.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                At the start of the project, they had no structured **B2B sales development** process, no scalable database and no clear playbook for multi‑channel outreach.
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
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**Cold emails** with personalised icebreakers</li>
                <li>LinkedIn connection requests and follow‑up messages</li>
                <li>Soft **cold call** touchpoints when prospects were highly engaged</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                This **continuous sales outreach** allowed us to stay present across several channels, increase reply rates and warm up relationships before a meeting was proposed.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Clear value proposition and low‑friction call‑to‑action</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                The campaign emphasised concrete outcomes for the prospect:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Easier management of merchandising orders</li>
                <li>Better branding and cohesion for teams and student groups</li>
                <li>Reliable partner able to deliver quality on time</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Instead of asking for a “demo”, we invited prospects to a short **Discovery Call** to review their needs and show examples of previous merchandising projects. This made **signing new clients** a natural next step once trust was established.
              </p>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">The outsourced **B2B lead generation** campaign for Many Ways delivered:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**70% response rate** across all channels</li>
                <li>**8% of contacted leads** booking a sales meeting</li>
                <li>Meetings scheduled from the very first day of the campaign</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                For a niche target such as student associations and small marketing teams, this performance confirmed that **cold outreach** can be extremely effective when the ICP is clear, the messaging is relevant and the follow‑up is consistent.
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
                  - A focused ICP drives better conversion rates: targeting a specific niche (student committees and associations) made the messaging more relevant and increased engagement.
- **Relevance beats volume**: personalised messages based on the context of each prospect performed better than generic cold emails.
- **Multi‑channel outbound acquisition** works best: combining cold email, LinkedIn and occasional cold calls helped **increase the size of the pipeline** while keeping the tone human and consultative.
- Outsourcing **B2B sales prospecting** to a specialised agency allows founders to stay focused on delivery and operations while still **closing more deals**.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  If you operate a merchandising or B2B services company and want to **boost your B2B new clients acquisition**, a structured, outsourced **cold outreach** program can help you build a steady flow of **qualified leads** and meetings.
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
