import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Globe, Target } from 'lucide-react';
import Section9Footer from '../components/Section9Footer';
import { useAuthStore } from '../store/useAuthStore';
import MobileMenu from '../components/MobileMenu';

export default function About() {
    const user = useAuthStore((state) => state.user);
    return (
        <div className="min-h-screen bg-[#f0efff] font-sans overflow-hidden selection:bg-[#6C5CE7] selection:text-white">

            {/* Navigation (Simplified for Inner Page) */}
            <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-6 lg:px-12 py-6 border-b border-slate-200 bg-white">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#6C5CE7] rounded-lg flex items-center justify-center text-white font-black text-xl group-hover:bg-[#5a4bd1] group-hover:text-white transition-colors shadow-sm">
                        E
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-black">EUROJOB</span>
                </Link>
                <div className="hidden lg:flex gap-10 text-sm font-bold text-slate-800">
                    <Link to="/jobs" className="hover:text-slate-500 transition-colors">Вакансии</Link>
                    <Link to="/about" className="text-black transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-1 after:bg-[#6C5CE7] after:rounded-full">О нас</Link>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    {user ? (
                        <Link to="/dashboard" className="flex items-center gap-3 bg-white pl-2 pr-4 py-2 rounded-full shadow-sm hover:shadow-purple transition-all border border-slate-200 group">
                            <div className="w-8 h-8 rounded-full bg-[#6C5CE7] p-[2px]">
                                <div className="w-full h-full bg-white rounded-full overflow-hidden">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="User" />
                                </div>
                            </div>
                            <span className="font-bold text-slate-900 text-sm group-hover:text-slate-600 transition-colors">
                                Кабинет
                            </span>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="text-slate-600 hover:text-black font-bold transition-colors">Войти</Link>
                            <Link to="/register" className="btn-dark px-6 py-2.5 rounded-full text-sm font-bold shadow-md transition-transform hover:-translate-y-0.5 text-white">
                                Присоединиться
                            </Link>
                        </>
                    )}
                </div>

                <MobileMenu />
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 lg:px-12 text-center bg-white border-b border-slate-200">
                {/* Abstract Background Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C5CE7]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto pt-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8 shadow-sm">
                        <Sparkles className="w-4 h-4 text-black" />
                        <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">О компании</span>
                    </div>

                    <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter text-black leading-[1.05] mb-8">
                        Мы делаем легальную работу <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-400">доступной каждому</span>
                    </h1>

                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        EUROJOB — это инновационное агентство международного рекрутинга. С 2018 года мы помогли более чем 5000 специалистам найти высокооплачиваемую работу в Европе и безопасно переехать.
                    </p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 px-6 lg:px-12 bg-[#f0efff] relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

                        {/* Value 1 */}
                        <div className="card-purple bg-white p-10 group cursor-pointer relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-slate-100 rounded-full blur-3xl opacity-50 group-hover:bg-[#6C5CE7]/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-black mb-8 group-hover:scale-110 group-hover:bg-[#6C5CE7] transition-all">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-black mb-4">Полная легальность</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Мы работаем только с проверенными прямыми работодателями. Никаких серых схем — только официальные контракты с полным социальным пакетом.
                                </p>
                            </div>
                        </div>

                        {/* Value 2 */}
                        <div className="card-purple bg-white p-10 group cursor-pointer relative overflow-hidden md:-translate-y-4">
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-slate-100 rounded-full blur-3xl opacity-50 group-hover:bg-[#6C5CE7]/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-black mb-8 group-hover:scale-110 group-hover:bg-[#6C5CE7] transition-all">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-black mb-4">Сопровождение 24/7</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    От помощи в сборе документов до встречи в аэропорту и заселения. Ваш персональный менеджер всегда на связи.
                                </p>
                            </div>
                        </div>

                        {/* Value 3 */}
                        <div className="card-purple bg-white p-10 group cursor-pointer relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-slate-100 rounded-full blur-3xl opacity-50 group-hover:bg-[#6C5CE7]/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-black mb-8 group-hover:scale-110 group-hover:bg-[#6C5CE7] transition-all">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-black mb-4">Работа на результат</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Мы не берем скрытых комиссий и предоплат за воздух. Наша цель — ваше успешное трудоустройство и получение первой зарплаты.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats Section with Image */}
            <section className="py-24 px-6 lg:px-12 bg-white border-t border-slate-200">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#6C5CE7] rounded-[3rem] transform -rotate-3 scale-105 opacity-20 blur-xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                            alt="Team working"
                            className="relative z-10 w-full rounded-[3rem] shadow-purple border border-slate-100 object-cover h-[500px]"
                        />

                        {/* Floating Badge */}
                        <div className="absolute -bottom-8 -right-8 w-48 bg-[#2d2b55] p-6 rounded-[2rem] shadow-2xl z-20 border border-purple-800">
                            <div className="text-5xl font-black text-[#6C5CE7] tracking-tighter mb-1">5+</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Лет успешной работы</div>
                        </div>
                    </div>

                    <div className="pl-0 lg:pl-10">
                        <h2 className="text-5xl lg:text-6xl font-black text-black mb-10 tracking-tighter leading-[1.1]">
                            Сотни довольных клиентов по всей Европе
                        </h2>
                        <div className="space-y-8">
                            <div className="group">
                                <div className="text-4xl font-black text-black mb-2 group-hover:text-slate-600 transition-colors">12,000+</div>
                                <div className="text-slate-500 font-bold text-sm tracking-wide uppercase">Выданных рабочих виз через партнеров</div>
                            </div>
                            <div className="h-px w-full bg-slate-200"></div>
                            <div className="group">
                                <div className="text-4xl font-black text-black mb-2 group-hover:text-slate-600 transition-colors">98%</div>
                                <div className="text-slate-500 font-bold text-sm tracking-wide uppercase">Процент успешного прохождения интервью</div>
                            </div>
                            <div className="h-px w-full bg-slate-200"></div>
                            <div className="group">
                                <div className="text-4xl font-black text-black mb-2 group-hover:text-slate-600 transition-colors">15</div>
                                <div className="text-slate-500 font-bold text-sm tracking-wide uppercase">Стран Евросоюза, с которыми мы работаем</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section9Footer />
        </div>
    );
}
