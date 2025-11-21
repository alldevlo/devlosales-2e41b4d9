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
        <title>Cortexia Case Study - B2B Lead Generation for Smart Cities | devlo</title>
        <meta name="description" content="How devlo helped Cortexia book 71 meetings with city decision-makers through multi-channel B2B prospecting achieving 78% open rate in B2G sales." />
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
              src="/CS_devlo/Logo/Asset 12.webp" 
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
