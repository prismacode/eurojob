import React from 'react';
import { motion } from 'framer-motion';
import { Home, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function Section5Housing() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white font-sans">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[#2d2b55] rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16 border border-purple-800/30">

                    {/* Background decorations */}
                    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

                    {/* Left: Interactive/Floating Graphic */}
                    <div className="w-full lg:w-1/2 relative z-10 flex justify-center h-[400px] items-center">

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full max-w-[360px] rounded-3xl bg-[#141414] p-6 flex flex-col shadow-2xl relative overflow-hidden border border-slate-800 backdrop-blur-md"
                        >
                            {/* Abstract apartment layout representation */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <Home className="w-5 h-5 text-[#a29bfe]" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Аудит объекта</div>
                                        <div className="text-lg font-black text-white">Квартира на 2-3 чел.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="h-24 bg-[#1a1a1a] rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
                                    <PlayCircle className="w-8 h-8 text-slate-700 relative z-10" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="h-10 bg-[#1a1a1a] rounded-xl border border-slate-800 w-full flex items-center px-3">
                                        <div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
                                    </div>
                                    <div className="flex-grow bg-[#1a1837] rounded-xl border border-purple-800/30 flex items-center justify-center">
                                        <div className="h-2 w-1/3 bg-purple-400 opacity-50 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mt-auto pt-4 border-t border-slate-800 text-white">
                                <div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Фиксированная аренда</div>
                                    <div className="text-2xl font-black tracking-widest">300 <span className="text-sm font-medium text-slate-400">€ / мес</span></div>
                                </div>
                                <div className="bg-[#6C5CE7] text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1">
                                    Check: Pass
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating decorative elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-4 w-12 h-12 bg-[#1a1a1a] border border-slate-800 rounded-full flex items-center justify-center shadow-lg"
                        >
                            <svg className="w-5 h-5 text-[#a29bfe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </motion.div>
                    </div>

                    {/* Right: Typography */}
                    <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/40 border border-purple-700/40 mb-6 self-center lg:self-start">
                            <span className="w-2 h-2 rounded-full bg-[#a29bfe] animate-pulse"></span>
                            <span className="text-xs font-bold text-purple-200 tracking-wide uppercase">Premium Housing</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-[1.1] text-white">
                            Посмотрите свою комнату на видео до того, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">как соберете чемодан</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
                            Забудьте о «сюрпризах» в виде общаг на 10 человек. Мы предлагаем только проверенные условия:
                        </p>

                        <ul className="space-y-4 mb-10 text-slate-300 font-medium text-left max-w-lg mx-auto lg:mx-0">
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 shrink-0 text-[#a29bfe]" />
                                <span><strong>92% наших объектов</strong> — это квартиры или дома на 2–3 человека в комнате.</span>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 shrink-0 text-[#a29bfe]" />
                                <span><strong>Реальный аудит:</strong> Вы получаете актуальное видео жилья, снятое нашими сотрудниками за последние 30 дней.</span>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 shrink-0 text-[#a29bfe]" />
                                <span><strong>Прозрачность:</strong> Стоимость аренды фиксируется в контракте и не меняется в течение всего срока работы.</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="btn-purple px-8 py-4 rounded-xl font-bold text-base w-full sm:w-auto flex justify-center items-center gap-2">
                                <PlayCircle className="w-5 h-5" />
                                <span>Смотреть пример видеообзора</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
