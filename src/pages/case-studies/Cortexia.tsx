import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Cortexia() {
  return (
    <>
      <Helmet>
        <title>Cortexia Case Study - B2B Lead Generation for Smart City | devlo</title>
        <meta name="description" content="How devlo helped an AI-powered cleaning management company book 71 meetings with city decision-makers through multi-channel B2B sales prospecting with 78% open rate." />
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
              src="/CS_devlo/Logo/Asset 21.webp" 
              alt="Cortexia Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How an AI-powered cleaning management company booked 71 meetings with top city decision-makers using multi-channel B2B sales prospecting
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              From more than 250 cities across Switzerland, France and Belgium, our B2B sales prospecting agency identified over 500 qualified B2B leads (politicians and heads of urban cleanliness). The result: 71 meetings booked, a 78% open rate and outstanding B2G lead generation performance.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-slate-600">Qualified Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">78%</div>
                <div className="text-slate-600">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">36%</div>
                <div className="text-slate-600">Reply Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">71</div>
                <div className="text-slate-600">Meetings Booked</div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">About the client</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                Our client is a technology company using artificial intelligence to help cities measure urban cleanliness in real time and allocate resources more efficiently.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Services:</strong> Urban cleanliness, waste management, AI-powered monitoring.<br/>
                <strong>ICP:</strong> Political decision-makers and Heads of Services / Technical Services responsible for urban cleaning in mid-to-large municipalities.
              </p>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                The Challenge: complex B2G sales and limited time
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                The client needed to:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Identify cities matching strict qualification criteria.</li>
                <li>Find the most relevant political and technical decision-makers within each city and gather their contact details.</li>
                <li>Run cold outreach and cold calling campaigns to generate B2B (B2G) sales meetings with extremely busy stakeholders.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                They lacked internal capacity for data-driven database creation, B2B sales development and follow-up, so they decided to outsource their business development to our B2B lead generation agency.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                The Strategy: Account-Based Sales and multi-channel prospecting
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Our approach mixed Account-Based Sales, multi-channel prospecting and deep qualification.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Account-Based Sales on cities as "key accounts"</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Each city was treated like a strategic B2B account. We mapped its internal structure, identified the key decision-makers and tailored our outreach sequence accordingly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Ultra-targeted, city-specific messaging</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Using public information (websites, local news, city plans), we built personalized multi-channel outbound campaigns that highlighted the benefits of real-time cleanliness monitoring for elected officials and technical directors.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Multi-channel cold outreach: email + cold call + LinkedIn</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We combined cold emails, cold calls and LinkedIn outreach to maximize reply rates. This multi-channel prospecting helped reach decision-makers who rarely reply to email but pick up the phone.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Native-language outreach in French and German</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To boost relevance and trust, we contacted each prospect in their preferred language, which is key in B2G environments where local context and subtlety matter.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">5. Qualification and appointment setting</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Interested leads were qualified via discovery calls (pain points, current processes, budget, timing). Our SDRs then handled appointment setting for the client's sales team, ensuring every booked meeting was a qualified lead with clear potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Results: 71 qualified B2B meetings from 500 leads
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                Across more than 500 decision-makers contacted in 3 countries, this outbound acquisition campaign generated:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>78% open rate</li>
                <li>3% click rate</li>
                <li>36% reply rate</li>
                <li>71 qualified sales meetings with high-value cities</li>
                <li>24% of contacted cities interested in a meeting after the first campaign</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                For a complex B2G environment, these numbers demonstrate the impact of a well-executed cold outreach strategy combined with Account-Based Sales.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Key takeaways for B2G / smart-city prospecting
            </h2>
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Rigorous research defines your success
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  The same job title can mean very different responsibilities across cities. A solid lead qualification phase is essential to reach the true decision-makers who can actually buy, not just intermediaries.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Messages must match each ICP
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Technical directors care about operations and resource optimization; politicians care about service quality and citizen satisfaction. Tailoring the message to each ICP improved both reply rate and meeting rate.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Be flexible on channels and timings
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Many prospects spent most of their time in the field and rarely checked email. Being proactive with cold calls dramatically improved the conversion from replies to meetings.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Strong qualification improves conversion later in the pipeline
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Thorough discovery calls allowed the client's sales team to run high-value demos, shorten the sales cycle and focus on accounts with real potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Turn your smart-city solution into a predictable B2B sales engine
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              If your company sells complex solutions (AI, IoT, SaaS) to public or semi-public entities, an outsourced sales prospecting model can help you boost B2B client acquisition, increase the size of your pipeline and decrease the duration of your sales cycle.
            </p>
            <Link
              to="/en/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
