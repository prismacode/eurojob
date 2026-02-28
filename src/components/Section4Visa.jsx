import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Section4Visa() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const yContent = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-12 bg-white relative font-sans overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 right-[-20%] w-[800px] h-[800px] bg-[#6C5CE7] rounded-full blur-[200px] opacity-10 z-0 pointer-events-none transform -translate-y-1/2"></div>

            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">

                {/* Left side content (Typography) */}
                <motion.div style={{ y: yContent }} className="w-full lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-8 self-center lg:self-start">
                        <Sparkles className="w-4 h-4 text-[#6C5CE7]" />
                        <span className="text-xs font-bold text-[#6C5CE7] tracking-wide uppercase">Visa Processing</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[1.05] text-slate-900">
                        Гарантия получения визы <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#a29bfe]">98.7%</span>
                    </h2>

                    <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                        При отказе — возвращаем 100% стоимости подготовки документов. Мы не продаем «бумажки». Мы обеспечиваем легальный статус:
                    </p>

                    <div className="grid gap-4 justify-center lg:justify-start">
                        <div className="flex items-center gap-4 bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm hover:border-purple-400 transition-colors leading-tight">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-[#6C5CE7]" />
                            </div>
                            <span className="font-bold text-slate-800">Оформление Blue Card и Chancenkarte «под ключ».</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm hover:border-purple-400 transition-colors leading-tight">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-[#6C5CE7]" />
                            </div>
                            <span className="font-bold text-slate-800">Прямые контракты (проверка в консульстве за 10–14 дней).</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm hover:border-purple-400 transition-colors leading-tight">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5 text-[#6C5CE7]" />
                            </div>
                            <span className="font-bold text-slate-800">Никаких «серых» схем: контракт в базе министерства труда.</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right side: Parallax Composition */}
                <div className="w-full lg:w-1/2 relative h-[600px] flex justify-center items-center">

                    <motion.div style={{ y: yImg }} className="absolute inset-0 bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden">
                        {/* Placeholder for Visa/Passport graphic */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-100 to-transparent"></div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md bg-white rounded-3xl shadow-neon p-6 border border-slate-100 backdrop-blur-xl">
                            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-6 bg-blue-800 rounded"></div>
                                    <div className="text-[10px] font-bold text-slate-400 tracking-widest">EUROPEAN UNION</div>
                                </div>
                                <MapPin className="w-5 h-5 text-slate-300" />
                            </div>

                            <div className="flex gap-5 mb-6">
                                {/* Happy client photo */}
                                <div className="w-24 h-32 rounded-xl shrink-0 overflow-hidden border-2 border-purple-100 shadow-sm">
                                    <img
                                        src="/client-photo.png"
                                        alt="Довольный клиент"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                {/* Client data */}
                                <div className="flex-grow pt-1 space-y-2">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Работник</div>
                                    <div className="text-base font-black text-slate-900">Андрей Иванов</div>
                                    <div className="text-xs font-semibold text-slate-500">Строитель · Германия 🇩🇪</div>
                                    <div className="mt-3 flex flex-col gap-1.5">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-400 font-medium">Зарплата Netto</span>
                                            <span className="font-black text-slate-900">2 340 €/мес</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-400 font-medium">Жильё</span>
                                            <span className="font-bold text-slate-700">300 €/мес</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-400 font-medium">Предоплата</span>
                                            <span className="font-black text-[#6C5CE7]">0 €</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200 flex justify-between items-center">
                                <div>
                                    <div className="text-[10px] font-black tracking-widest text-purple-400 mb-1">CONTRACT STATUS</div>
                                    <div className="text-xl font-black text-[#6C5CE7]">VERIFIED</div>
                                </div>
                                <div className="w-12 h-12 bg-[#6C5CE7] rounded-full flex items-center justify-center shadow-purple-glow">
                                    <ShieldCheck className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small floating success badge */}
                    <div className="absolute top-20 right-0 z-40 bg-white shadow-purple rounded-2xl p-4 font-bold text-slate-900 border border-purple-100 animate-float flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#6C5CE7] flex items-center justify-center text-white">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 font-medium">Вероятность визы</span>
                            <span className="text-base font-black">98.7% Успех</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
