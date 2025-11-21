import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Hiag() {
  return (
    <>
      <Helmet>
        <title>Filling a Commercial Building with Qualified Tenants - Case Study | devlo</title>
        <meta name="description" content="HIAG is a leading real estate company that develops and operates complex sites and commercial properties across Switzerland. Fahrwerk Winterthur is one of its flagship projects: a modern commercial bu" />
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
              src="/CS_devlo/Logo/Asset 101.webp" 
              alt="Hiag Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Filling a Commercial Building with Qualified Tenants
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              HIAG is a leading real estate company that develops and operates complex sites and commercial properties across Switzerland. Fahrwerk Winterthur is one of its flagship projects: a modern commercial bu
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">622</div>
                <div className="text-slate-600">Leads Contacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">87%</div>
                <div className="text-slate-600">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-slate-600">Reply Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">11</div>
                <div className="text-slate-600">Qualified Tenants</div>
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
                HIAG is a leading real estate company that develops and operates complex sites and commercial properties across Switzerland. Fahrwerk Winterthur is one of its flagship projects: a modern commercial building located in Winterthur and designed for companies needing office or warehouse space.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                To accelerate **tenant acquisition**, HIAG decided to **outsource its business development** to devlo, a **B2B sales prospecting agency** specialised in **outbound acquisition**, **lead qualification** and **appointment setting**.
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
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Operate mainly in German‑speaking Switzerland</li>
                <li>Have a realistic need to relocate or open a new office or warehouse near Winterthur</li>
                <li>Are large enough to rent substantial space and commit to a long‑term contract</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Reaching the right facility managers, CEOs and expansion managers required more than simple list building. It required precise **prospecting** and contextual qualification.
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
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Identify the correct ICP and build the database</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We defined the ICP as companies:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>With activities compatible with the building (logistics, light industry, offices)</li>
                <li>Located in German‑speaking Switzerland and/or already present near Winterthur</li>
                <li>With possible expansion needs</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our **database creation** team identified 605 leads from various sectors that matched these criteria. For each company, we researched the most relevant decision‑makers: real estate managers, operations directors, CEOs and expansion leaders.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Qualify potential interest and import into the CRM</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We collected and verified information about each lead, such as locations, expansion projects and approximate size. All validated leads were imported into the CRM with clear tags and a tailored **cold outreach** sequence adapted to HIAG’s messaging.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Launch a structured cold outreach campaign</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We then launched a **multi‑channel prospecting** campaign focused on:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**Cold emails** explaining the benefits of Fahrwerk Winterthur (location, flexibility, infrastructure)</li>
                <li>Follow‑up messages to answer objections and clarify next steps</li>
                <li>Occasional **cold calls** to the warmest leads to accelerate decision‑making</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Every outreach touchpoint was designed to quickly qualify whether the company had any interest in relocating or opening a new site in the region.
              </p>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Out of the 622 leads contacted, the campaign delivered:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**87% open rate**</li>
                <li>**26% click rate**</li>
                <li>**73% reply rate**</li>
                <li>**11 qualified tenants** who explicitly expressed interest and booked a meeting</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Although the percentage of interested companies may appear low, the **quality** of these leads is extremely high: each represents a potential multi‑year rental contract and significant revenue for HIAG.
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
                  - **Identifying the right ICP is critical**: contacting companies with no relocation plans would have wasted time and damaged deliverability. Rigorous ICP work helped focus the campaign on realistic opportunities.
- High engagement is not enough; qualification is essential to ensure that your **B2B sales pipeline** contains real potential deals.
- A **B2B sales prospecting agency** can help real estate developers **generate B2B sales** opportunities with the right companies and **decrease the sales cycle duration** by pre‑qualifying leads before site visits.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  If you are developing a commercial building or business park and need a predictable flow of potential tenants, a structured **cold outreach strategy** and **multi‑channel prospecting** can help you **sign new clients** faster and secure long‑term occupancy.
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
