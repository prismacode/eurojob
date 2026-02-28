import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Section2Reality() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-12 relative z-30 font-sans bg-[#f0efff]">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mx-auto max-w-4xl leading-tight">
                        Почему на агрегаторах обещают 2500 €, а в кармане остается 1100 €?
                    </h2>
                    <p className="mt-6 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                        Большинство сайтов скрывают вычеты за жилье, налоги и транспорт. Мы внедрили систему <strong>«Честный контракт»</strong>:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className=""
                    >
                        <SpotlightCard className="card-purple p-8 sm:p-10 flex flex-col group relative overflow-hidden bg-white h-full">
                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <div className="w-12 h-12 bg-[#6C5CE7] rounded-xl flex items-center justify-center shadow-purple-glow mb-8 transform group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6">Зарплата Netto в договоре</h3>

                            <div className="space-y-6 flex-grow">
                                <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200">
                                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                        <AlertCircle className="w-4 h-4 text-slate-500" /> У конкурентов
                                    </span>
                                    <p className="text-slate-600 font-medium">Обещают «Высокую зарплату» без уточнения налогов и скрытых сборов.</p>
                                </div>
                                <div className="bg-white rounded-2xl p-5 border border-purple-300 shadow-sm relative">
                                    <div className="absolute -left-[1px] top-4 bottom-4 w-1 bg-[#6C5CE7] rounded-r-full"></div>
                                    <span className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#6C5CE7]" /> У нас
                                    </span>
                                    <p className="text-slate-800 font-bold">Расчет суммы Netto (чистыми) прямо в договоре. Если реальный доход ниже хотя бы на 1 € — мы доплачиваем разницу из своих средств.</p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className=""
                    >
                        <SpotlightCard className="card-purple p-8 sm:p-10 flex flex-col group relative overflow-hidden bg-white h-full">
                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <div className="w-12 h-12 bg-[#6C5CE7] rounded-xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6">Финансовая ответственность</h3>

                            <div className="space-y-6 flex-grow">
                                <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200">
                                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                        <AlertCircle className="w-4 h-4 text-slate-400" /> У конкурентов
                                    </span>
                                    <p className="text-slate-600 font-medium">Снятие ответственности фразой «портал не гарантирует безопасность».</p>
                                </div>
                                <div className="bg-white rounded-2xl p-5 border border-purple-300 shadow-sm relative">
                                    <div className="absolute -left-[1px] top-4 bottom-4 w-1 bg-[#6C5CE7] rounded-r-full"></div>
                                    <span className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#6C5CE7]" /> У нас
                                    </span>
                                    <p className="text-slate-800 font-bold">Личная финансовая ответственность нашего агентства за легальность и безопасность каждого работодателя в базе.</p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
