import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Home } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import SpotlightCard from './SpotlightCard';

export default function Section3Catalog() {
    const cards = [
        {
            icon: <Briefcase className="w-6 h-6 text-black" />,
            title: "Для специалистов",
            desc: "Строительство, логистика, производство — от 14 €/час чистыми.",
            highlight: "от 14 €/час",
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-black" />,
            title: "Без опыта",
            desc: "Склады и агросектор — от 11 €/час чистыми.",
            highlight: "от 11 €/час",
        },
        {
            icon: <Home className="w-6 h-6 text-black" />,
            title: "Адаптация",
            desc: "На каждом объекте работает русскоязычный координатор. Вам не нужно учить язык, чтобы начать зарабатывать в первый же день.",
            highlight: "Комфорт",
        }
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white font-sans relative overflow-hidden">
            {/* Subtle animated blob accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-100 rounded-full blur-[120px] pointer-events-none blob-animate" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
                        540 активных позиций <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#a29bfe] px-1">в ЕС</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
                        Германия, Испания и Финляндия, где не требуют свободный местный язык.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="h-full"
                        >
                            <Tilt
                                tiltMaxAngleX={8}
                                tiltMaxAngleY={8}
                                perspective={1000}
                                transitionSpeed={400}
                                glareEnable={true}
                                glareMaxOpacity={0.05}
                                glareColor="#6C5CE7"
                                glarePosition="all"
                                className="h-full"
                            >
                                <SpotlightCard className="card-purple p-8 pb-10 flex flex-col group bg-white hover:bg-slate-50 transition-colors h-full">
                                    <div className="w-12 h-12 bg-[#6C5CE7] rounded-xl flex items-center justify-center mb-8 transform group-hover:-translate-y-2 transition-transform shadow-purple-glow">
                                        <div className="text-white">{card.icon}</div>
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-900 mb-4">{card.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed flex-grow mb-8 text-lg">
                                        {card.desc}
                                    </p>

                                    <div className="mt-auto font-black text-lg text-slate-900 bg-white border-2 border-slate-100 px-6 py-3 rounded-xl flex justify-between items-center group-hover:border-purple-400 transition-colors">
                                        <span>Ставка:</span>
                                        <span>{card.highlight}</span>
                                    </div>
                                </SpotlightCard>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
