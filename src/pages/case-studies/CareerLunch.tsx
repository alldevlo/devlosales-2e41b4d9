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
