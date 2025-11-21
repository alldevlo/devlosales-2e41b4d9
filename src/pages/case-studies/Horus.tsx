import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Horus() {
  return (
    <>
      <Helmet>
        <title>How an Accounting Software Company Closed €200k in Deals in Belgium - Case Study | devlo</title>
        <meta name="description" content="Horus develops modern accounting and back‑office solutions for accountants and SMEs. Their products include both accounting software and Nebra, a post‑accounting solution." />
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
              alt="Horus Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How an Accounting Software Company Closed €200k in Deals in Belgium
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Horus develops modern accounting and back‑office solutions for accountants and SMEs. Their products include both accounting software and Nebra, a post‑accounting solution.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">80</div>
                <div className="text-slate-600">Meetings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">€400k</div>
                <div className="text-slate-600">Pipeline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">€200k</div>
                <div className="text-slate-600">Closed Deals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5:1</div>
                <div className="text-slate-600">ROI</div>
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
                Horus develops modern accounting and back‑office solutions for accountants and SMEs. Their products include both accounting software and Nebra, a post‑accounting solution.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                They turned to devlo to accelerate **B2B client acquisition** for both products through **cold outreach**, **cold calling** and **multi‑channel prospecting**.
              </p>
            </div>
          </div>
        </section>
        
        {/* Challenge Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Before working with devlo, Horus:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Was overwhelmed by the number of potential accounts in Belgium</li>
                <li>Struggled to prioritise revenue‑generating sales activities</li>
                <li>Lacked a structured **B2B prospecting** process and efficient tools</li>
                <li>Needed a way to **increase the size of their pipeline** while keeping the sales cycle under control</li>
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
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Build a highly targeted account list</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our team built a list of **900 accounting firms** in French‑speaking Belgium and Brussels that matched Horus’ ICP:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Accounting firms with 1–50 employees</li>
                <li>Located in the French region of Belgium or Brussels</li>
                <li>Clear potential to purchase multiple licences and services</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                We used tools like LinkedIn Sales Navigator, FullEnrich and Lusha to ensure accurate and up‑to‑date data for each account.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Qualify leads with 15+ variables</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Each lead was meticulously qualified across more than 15 variables: size, region, existing software stack, decision‑maker role, contactability, etc. This allowed us to prioritise the best prospects and tailor our **cold outreach strategy**.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Multi‑channel outbound sequence: LinkedIn, email and cold calls</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We designed and launched a **multi‑channel prospecting** sequence that included:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**LinkedIn**: five touchpoints (connections, personalised messages, voice notes) to build familiarity and trust.</li>
                <li>**Cold emails**: a five‑step sequence focused on real pain points, case studies, and AI‑generated video messages, as well as humour and personalised images to stand out.</li>
                <li>**Cold calls**: two well‑timed calls placed after previous touchpoints to turn warm prospects into meetings.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                This combination of channels helped **decrease the sales cycle duration**, improve reply rates and keep Horus top of mind.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Objection handling and lead nurturing</h3>
                <p className="text-slate-600 leading-relaxed"></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our SDRs handled objections (timing, budget, competing solutions) with consultative scripts and always proposed a **Discovery Call** rather than a hard sales pitch. Leads that were not ready to buy were nurtured with additional information and revisited at the right time.
              </p>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">The campaigns delivered impressive numbers:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>**80 meetings booked** with qualified accounting firms</li>
                <li>**€400k pipeline** generated</li>
                <li>**€200k in signed deals**</li>
                <li>Approximately **60% demo‑to‑cash ratio**</li>
                <li>Sales cycles reduced to about **two months**, 30% shorter than their usual sales cycle</li>
                <li>**5:1 ROI** on the **B2B sales prospecting** investment</li>
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
                  - **Multi‑channel sequences bring the best results**: combining LinkedIn, email and cold calling reduces dependence on any single channel and increases overall engagement.
- **Relevance beats over‑personalisation**: prospects care more about whether your offer solves an immediate problem than about clever icebreakers.
- **Cold calling is not dead**: when preceded by emails and LinkedIn touches, calls feel warmer and significantly increase meeting rates.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  If you are a B2B software editor and want to **generate B2B sales**, **sign new clients** and **close more deals** without building a large internal SDR team, partnering with a **B2B sales prospecting agency** for **outsourced sales prospecting** and **B2B lead generation** can be a powerful growth lever.
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
