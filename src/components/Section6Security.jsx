import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck } from 'lucide-react';

export default function Section6Security() {
    const points = [
        {
            icon: <Shield className="w-6 h-6 text-[#a29bfe]" />,
            num: "01",
            title: "Юридический щит",
            desc: "Бесплатная горячая линия с адвокатом на родном языке при любых конфликтах с работодателем.",
        },
        {
            icon: <Lock className="w-6 h-6 text-[#a29bfe]" />,
            num: "02",
            title: "Безопасный переезд",
            desc: "Мы сопровождаем вас до момента получения первой зарплаты.",
        },
        {
            icon: <FileCheck className="w-6 h-6 text-[#a29bfe]" />,
            num: "03",
            title: "Защита данных",
            desc: "Ваша анкета передается только проверенным работодателям с рейтингом 4.5+ на европейских платформах.",
        }
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden font-sans">
            <div className="max-w-[1400px] mx-auto bg-[#2d2b55] rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl border border-purple-800/30">

                {/* Animated Neon Mesh Blobs */}
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none blob-animate"></div>
                <div className="absolute bottom-[-5%] right-[-10%] w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none blob-animate-delay"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="text-center mb-16 max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-700/40 px-5 py-2.5 rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#a29bfe] animate-pulse"></span>
                            <span className="text-xs font-bold text-purple-200 tracking-widest uppercase">Security First</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
                            Ваш паспорт остается у вас. Всегда. <br />
                            <span className="text-[#a29bfe] uppercase pt-2 inline-block">НИКАКИХ исключений.</span>
                        </h2>

                        <p className="text-lg font-medium text-slate-400 leading-relaxed max-w-xl mx-auto">
                            Мы защищаем ваши права по стандартам ЕС:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl">
                        {points.map((pt, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-purple-900/40 border border-purple-700/40 hover:border-purple-400/50 rounded-[2rem] p-8 flex flex-col relative overflow-hidden group transition-all duration-300"
                            >
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 blur-3xl group-hover:bg-purple-400/20 transition-all duration-500 rounded-full"></div>

                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-purple-800/40 border border-purple-700/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {pt.icon}
                                    </div>
                                    <div className="text-3xl font-black text-purple-200/60 group-hover:text-purple-200/90 transition-colors">
                                        {pt.num}
                                    </div>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-3">{pt.title}</h3>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{pt.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
