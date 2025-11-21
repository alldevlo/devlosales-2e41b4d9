import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Users, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Cegos() {
  return (
    <>
      <Helmet>
        <title>Learning & Development (L&D) Appointment Setting - Case Study | devlo</title>
        <meta name="description" content="Cegos delivers professional training and learning & development (L&D) programs in Switzerland and worldwide. Many of their clients roll out ambitious, multi-country L&D initiatives, and require a reli" />
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
              src="/CS_devlo/Logo/Asset 14.webp" 
              alt="Cegos Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Learning & Development (L&D) Appointment Setting
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Cegos delivers professional training and learning & development (L&D) programs in Switzerland and worldwide. Many of their clients roll out ambitious, multi-country L&D initiatives, and require a reli
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-slate-600">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">45%</div>
                <div className="text-slate-600">Reply Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">22%</div>
                <div className="text-slate-600">Click Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">14</div>
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
                Cegos delivers professional training and learning & development (L&D) programs in Switzerland and worldwide. Many of their clients roll out ambitious, multi-country L&D initiatives, and require a reliable B2B client acquisition engine.
              </p>
            </div>
          </div>
        </section>
        
        {/* Challenge Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Cegos was already well known in French-speaking Switzerland, thanks to the French origins of the Cegos Group. Their goal was to:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Expand into German-speaking Switzerland</li>
                <li>Book B2B meetings with L&D decision-makers in a limited number of highly qualified companies</li>
                <li>Outsource part of their sales prospecting and B2B lead generation to a specialized agency</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                The target market was small, so every qualified prospect mattered. The outreach had to be ultra-targeted and carefully personalized to ensure a high reply rate and strong lead qualification.
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
                If you sell training for B2B sales reps, SDRs, BDRs or other corporate learners, you likely face similar challenges: narrow ICPs, long sales cycles and a limited number of high-value accounts.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                A structured B2B sales development program, driven by a B2B sales prospecting agency, can help you:
              </p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>Clarify your ICPs</li>
                <li>Build the right database</li>
                <li>Design a cold outreach strategy that speaks your prospects’ language</li>
                <li>Turn a small market into a predictable engine of B2B new clients acquisition</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">The Cegos campaign delivered:</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>73% open rate</li>
                <li>22% click rate</li>
                <li>45% reply rate</li>
                <li>5% meeting rate (14 qualified demos booked in just a few weeks)</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                For such a narrow B2B target, this performance confirmed that a personalized multi-channel outbound campaign is one of the best ways to increase the size of your pipeline with a limited list of accounts.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Client testimonial
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                “devlo was clearly prepared. The process with the series of emails, the series of calls and the personalization at each step was extremely well done. Their transparent approach convinced me. I’m very happy with the results: we have already signed a few contracts. I wasn’t expecting immediate results, but the quality of contacts, the conversations and the deals closed so far are very good results for me.”
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
