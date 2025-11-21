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
        <title>Square Commodities Case Study - ICP Identification via Cold Outreach | devlo</title>
        <meta name="description" content="How devlo helped SquareCo identify the most valuable ICPs through cold outreach campaigns generating 52 interested prospects with 37% reply rate." />
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
              src="/CS_devlo/Logo/Asset 13.webp" 
              alt="SquareCo Logo" 
              className="h-16 mb-6" 
            />
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How to identify the most valuable Ideal Customer Profiles among several buyer personas using cold outreach and B2B lead generation
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Square Commodities, a Swiss provider of biofuels market intelligence, partnered with our B2B sales development agency to run cold outreach campaigns that generated 52 interested prospects, 36% reply rate and 9% interest rate—while revealing the most profitable ICPS for future growth.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
