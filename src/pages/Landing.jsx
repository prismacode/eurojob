import React from 'react';
import Section1Hero from '../components/Section1Hero';
import Section2Reality from '../components/Section2Reality';
import Section3Catalog from '../components/Section3Catalog';
import Section4Visa from '../components/Section4Visa';
import Section5Housing from '../components/Section5Housing';
import Section6Security from '../components/Section6Security';
import Section7Steps from '../components/Section7Steps';
import Section8FAQ from '../components/Section8FAQ';
import Section9Footer from '../components/Section9Footer';
import Marquee from '../components/Marquee';

export default function Landing() {
    return (
        <div className="relative min-h-screen bg-[#f0efff] text-[#1a1a2e] antialiased selection:bg-purple-300 selection:text-white overflow-x-hidden">
            <Section1Hero />
            <Marquee />
            <Section2Reality />
            <Section3Catalog />
            <Section4Visa />
            <Section5Housing />
            <Section6Security />
            <Section7Steps />
            <Section8FAQ />
            <Section9Footer />
        </div>
    );
}

