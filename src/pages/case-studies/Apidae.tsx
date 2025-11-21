import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Apidae() {
  return (
    <>
      <Helmet>
        <title>Outsourced B2B Client Acquisition for a Non-Profit Association - Case Study | devlo</title>
        <meta name="description" content="Apidae helps organisations protect bees and biodiversity by installing beehives, organising educational workshops and running impactful employee engagement activities. Their services are particularly " />
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
              src="/CS_devlo/Logo/Asset 81.webp" 
              alt="Apidae Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Outsourced B2B Client Acquisition for a Non-Profit Association
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Apidae helps organisations protect bees and biodiversity by installing beehives, organising educational workshops and running impactful employee engagement activities. Their services are particularly 
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-slate-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-slate-600">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">13%</div>
                <div className="text-slate-600">Interest Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">70</div>
                <div className="text-slate-600">Meetings Booked</div>
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
                Apidae helps organisations protect bees and biodiversity by installing beehives, organising educational workshops and running impactful employee engagement activities. Their services are particularly attractive for companies that want to strengthen their CSR and sustainability programmes.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                To grow faster, Apidae decided to **outsource their sales prospecting** and **B2B lead generation** to devlo. The objective: build a repeatable **B2B client acquisition** engine that would generate **qualified leads**, meetings and long‑term partnerships.
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
                <li>Approaching private companies, especially in finance, luxury and industry, with more than 50 employees in French‑speaking Switzerland.</li>
                <li>Identifying the right internal stakeholders: in many organisations, sustainability and CSR are handled by different departments (CSR, HR, internal communication, etc.).</li>
                <li>Convincing leaders that biodiversity projects are worth allocating time and budget, even though they are often perceived as a “nice to have” rather than a core business priority.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Apidae needed a **B2B sales development** machine capable of cutting through the noise, articulating a strong value proposition and **signing new clients** despite these objections.
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
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Build an ICP‑driven database of target companies</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We identified more than 500 companies in the six cantons of French‑speaking Switzerland that matched the ICP:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Industries with strong interest in CSR and employer branding</li>
                <li>Headcount above 50 employees</li>
                <li>Presence in finance, luxury, services and industry</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                For each company, our **lead generation** team identified potential decision‑makers: sustainability managers, CSR leaders, HR directors and employee engagement managers.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Design a three‑channel outreach sequence</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We created a **personalised multi‑channel outbound campaign** mixing:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**Cold emails** with tailored subject lines and first sentences</li>
                <li>LinkedIn messages when prospects were active on the platform</li>
                <li>Light **cold calling** to follow up with the warmest leads</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                This approach increased visibility, credibility and reply rates, and helped us **improve conversion rates** at each step of the funnel.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Deep personalisation through icebreakers and visuals</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                For each prospect, our team crafted a custom icebreaker based on public information (CSR reports, websites, press releases, LinkedIn posts). This sentence opened the email and showed that the message was written specifically for them.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We also used:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**Personalised images** integrated into follow‑up emails, showing the prospect’s company name or logo in the context of Apidae’s mission.</li>
                <li>Mentions of colleagues in the sequence to create social proof and internal momentum.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                This level of relevance made our **cold outreach** feel much warmer and helped unlock conversations with otherwise hard‑to‑reach executives.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Qualification and appointment setting</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Interested prospects were quickly contacted to validate their interest, understand their context (sites, employees, ESG priorities) and schedule a **Discovery Call** with Apidae. Our SDRs handled **lead qualification** and **appointment setting**, ensuring that Apidae’s team only met with serious, relevant opportunities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">The campaign generated:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**40% response rate** across all channels</li>
                <li>**13% interested prospects**</li>
                <li>Dozens of qualified meetings with high‑profile companies such as UEFA, TAG Heuer and Rothschild</li>
                <li>A strong pipeline of opportunities that supported Apidae’s **company growth** and long‑term impact</li>
              </ul>
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
                  - **Mission is a powerful asset when used correctly**: by connecting biodiversity to employer branding, ESG goals and employee engagement, we turned a “nice to have” into a concrete business lever.
- **Relevance and storytelling beat generic CSR messaging**: tailored icebreakers and visuals made the outreach stand out from traditional fundraising or CSR emails.
- **Outsourced sales prospecting** can work extremely well for non‑profits when the value proposition is clear and account selection is rigorous.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  If you run a non‑profit or mission‑driven project and want to **increase the size of your pipeline**, **book more meetings** and secure long‑term corporate partnerships, a structured **B2B lead generation** and **cold outreach** program can help you reach the right decision‑makers at scale.
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
