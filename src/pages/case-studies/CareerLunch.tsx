import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CareerLunch() {
  return (
    <>
      <Helmet>
        <title>CareerLunch Case Study - B2B Lead Generation in DACH | devlo</title>
        <meta name="description" content="How devlo helped CareerLunch book 54 sales meetings in a saturated DACH market through personalized multi-channel B2B prospecting with 10% interest rate." />
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
              src="/CS_devlo/Logo/Asset 11.webp" 
              alt="CareerLunch Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Unique B2B Lead Generation Strategy: how a B2B sales prospecting agency helped CareerLunch book 54 sales meetings in a saturated DACH market
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Our B2B sales prospecting agency identified and prospected 516 new, ultra-targeted B2B leads in the DACH region. This personalized multi-channel outbound campaign turned a seemingly saturated market into a goldmine of qualified leads, generating a 10% interest rate and 54 sales meetings for CareerLunch.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">516</div>
                <div className="text-slate-600">New Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">71%</div>
                <div className="text-slate-600">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">19%</div>
                <div className="text-slate-600">Reply Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">54</div>
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
              <h2 className="text-3xl font-bold text-slate-900">About CareerLunch</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                CareerLunch is an HR-tech platform that connects potential hires with employees through informal lunch meetings. Their business model depends on a continuous sales outreach engine that can generate B2B sales opportunities with HR leaders and employer branding teams across Europe.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ideal Customer Profiles (ICP) include HR, Recruiting, Talent Acquisition and Employer Branding decision-makers in medium and large B2B organizations who want to attract and retain top talent.
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
                The Challenge: winning new B2B clients where "everyone has already been contacted"
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                CareerLunch's internal business development team was focusing on new client acquisition in the DACH region (Germany, Austria, Switzerland). The problem:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>The region had already been heavily prospected with cold outreach, cold email and cold calls.</li>
                <li>Most obvious accounts had already been contacted several times.</li>
                <li>The team did not have enough time to create a clean database, generate fresh B2B leads, run systematic outbound acquisition and qualify every prospect.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                To accelerate their B2B client acquisition, CareerLunch decided to outsource their sales prospecting to devlo, a specialized B2B sales development and lead generation agency.
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
                The Strategy: "Existing clients / disqualified leads exclusion"
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Our B2B lead generation approach combined ICP clarity, database creation and a systematic cold outreach strategy.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Build a precise B2B lead universe</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We started by identifying every organization that matched CareerLunch's Ideal Customer Profiles. For each company, we mapped the most relevant decision-makers for recruitment, talent acquisition and employer branding.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Exclude existing customers and disqualified leads</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We then listed all existing clients and previously disqualified leads. This allowed us to exclude non-relevant accounts from future outbound campaigns and focus the prospecting budget on untapped B2B opportunities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Reveal untapped accounts and new leads</h3>
                  <p className="text-slate-600 leading-relaxed">
                    By subtracting these accounts from the full ICP universe, we uncovered 516 new, high-potential B2B leads that had never been contacted before. These became the core of our cold outreach strategy.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">4. In-depth lead research and qualification</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Each prospect was manually researched and qualified. We enriched the database with job titles, responsibilities and publicly available information to enable ultra-targeted B2B outreach and improve conversion rates.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">5. Native-language cold outreach and multi-channel prospecting</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Instead of relying only on English, we contacted leads primarily in German, their preferred language. This multi-channel prospecting approach combined cold email and LinkedIn outreach, which significantly improved open rates, reply rates and interest rates compared to generic English-only campaigns.
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
              Results: 54 meetings and double-digit interest rate
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                From the 516 new B2B leads contacted, the outsourced sales prospecting campaign delivered:
              </p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>71% open rate</li>
                <li>29% click-through rate</li>
                <li>19% reply rate</li>
                <li>10% interest rate (54 qualified meetings booked)</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                These results show how a B2B sales prospecting agency can still generate B2B new client acquisition in markets that look "saturated" when the right ICP filters, database creation and cold outreach strategy are applied.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Key takeaways for your B2B sales development
            </h2>
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Transparent collaboration drives performance
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  A clear prospecting plan, regular feedback loops and constant communication between the client and the outsourced team are essential to keep campaigns aligned and to improve conversion rates over time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Use the language your prospects actually prefer
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Contacting German-speaking decision-makers in German, rather than in English for convenience, boosted engagement, reply rates and meetings.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Adapt the message to each decision-maker
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  HR leaders, IT experts and executives do not react to the same arguments. Tailoring the cold outreach message to the role (savings, efficiency, employer brand, etc.) is critical to increase the size of your pipeline and decrease the sales cycle duration.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Systematic ICP and exclusion logic is a growth lever
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Having a clear overview of your total addressable market, and excluding existing or unqualified accounts from your next campaigns, helps you focus your outbound acquisition on prospects that can actually become new B2B clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Client testimonial</h2>
            </div>
            <blockquote className="text-xl text-slate-700 italic leading-relaxed border-l-4 border-blue-600 pl-6">
              "Charles is among the most creative and enthusiastic sales experts I know. He helped us set up hyper-personalized sales prospecting campaigns, reach hundreds of prospects and ultimately get qualified sales appointments. His advice to refine our sales process was also extremely valuable for the whole team. I highly recommend his services to startups and SMEs that want to scale their B2B sales quickly."
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Want similar results for your B2B lead generation?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              If you want to sign new clients, close more deals and systematically generate qualified B2B leads, you can Book a Discovery Call with our B2B sales prospecting agency and see how a personalized, multi-channel outbound campaign could work for your ICPs.
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
