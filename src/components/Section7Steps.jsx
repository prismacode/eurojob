import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Section7Steps() {
    const steps = [
        {
            day: "День 1",
            title: "Персональный аудит",
            desc: "Бесплатный аудит ваших документов и подбор 3-х вакансий.",
            active: true,
        },
        {
            day: "День 3",
            title: "Собеседование",
            desc: "Собеседование с работодателем и подписание предварительного контракта.",
            active: true,
        },
        {
            day: "День 14",
            title: "Получение визы",
            desc: "Вы оплачиваете только фактические госпошлины.",
            active: true,
        },
        {
            day: "День 45",
            title: "Первая зарплата",
            desc: "Только сейчас вы оплачиваете комиссию агентства за сопровождение.",
            active: true,
        }
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white relative overflow-hidden font-sans">
            <div className="max-w-[1400px] mx-auto bg-[#2d2b55] rounded-[3rem] p-10 md:p-16 lg:p-20 relative z-10 border border-purple-800/30 shadow-2xl overflow-hidden">

                {/* Animated Mesh Blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 blob-animate"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/8 rounded-full blur-[100px] pointer-events-none blob-animate-delay"></div>

                <div className="text-center mb-20 relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 max-w-4xl mx-auto">
                        Поэтапный план: от заявки до <span className="text-[#a29bfe]">первой зарплаты</span> в евро.
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative px-4 z-10">

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col relative z-10 h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.12 }}
                                whileHover={{ y: -5 }}
                                className={`h-full bg-purple-900/40 rounded-3xl p-8 w-full border ${idx === steps.length - 1 ? 'border-purple-400/50' : 'border-purple-700/30'} relative group transition-all flex flex-col`}
                            >
                                {idx === steps.length - 1 && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-3xl opacity-100 transition-opacity"></div>
                                )}

                                <div className={`w-auto px-4 h-10 rounded-xl ${idx === steps.length - 1 ? 'bg-purple-500/20 border-purple-400/50 text-[#a29bfe]' : 'bg-purple-800/30 border-purple-700/30 text-white group-hover:border-purple-400/50'} border  flex items-center justify-center text-sm tracking-widest uppercase font-black mb-6 shadow-sm transition-colors relative z-10 self-start`}>
                                    {step.day}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6 relative z-10 flex-grow">
                                    {step.desc}
                                </p>
                                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-auto relative z-10">
                                    <div className={`h-full ${idx === steps.length - 1 ? 'w-full bg-[#6C5CE7] relative' : 'w-1/3 bg-[#a29bfe]'} rounded-full`}>
                                        {idx === steps.length - 1 && (
                                            <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 skew-x-12 animate-[slide_2s_infinite]"></div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Final CTA within the dark block */}
                <div className="mt-20 text-center relative z-10">
                    <button className="btn-purple px-10 py-5 rounded-full font-black text-lg inline-flex items-center gap-3">
                        Оставить заявку <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="mt-4 text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#a29bfe]" />
                        <span>Безопасность гарантирована</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
