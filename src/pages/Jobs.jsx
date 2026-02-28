import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Euro, Briefcase, Filter, ArrowUpRight } from 'lucide-react';
import Section9Footer from '../components/Section9Footer';
import { useAuthStore } from '../store/useAuthStore';
import MobileMenu from '../components/MobileMenu';

export default function Jobs() {
    const [activeFilter, setActiveFilter] = useState('all');
    const user = useAuthStore((state) => state.user);

    const jobs = [
        { id: 1, title: 'Монтажник солнечных панелей', location: 'Германия, Мюнхен', salary: '2800 - 3200 € Netto', type: 'Строительство', reqs: ['Без опыта', 'Проживание'], bg: 'bg-[#6C5CE7]', text: 'text-white' },
        { id: 2, title: 'Водитель категории С, Е', location: 'Нидерланды', salary: '2500 - 3000 € Netto', type: 'Логистика', reqs: ['Код 95', 'Английский А2'], bg: 'bg-slate-100', text: 'text-slate-700' },
        { id: 3, title: 'Работник склада одежды', location: 'Польша, Варшава', salary: '1400 - 1600 € Netto', type: 'Склад', reqs: ['Для пар', 'Без языка'], bg: 'bg-slate-100', text: 'text-slate-700' },
        { id: 4, title: 'Упаковщик косметики', location: 'Чехия, Прага', salary: '1500 - 1800 € Netto', type: 'Производство', reqs: ['Легкий труд', 'Бесплатное жилье'], bg: 'bg-slate-100', text: 'text-slate-700' },
        { id: 5, title: 'Сварщик MIG/MAG', location: 'Германия, Гамбург', salary: '3000 - 3500 € Netto', type: 'Строительство', reqs: ['Опыт 2 года', 'Сертификат'], bg: 'bg-[#6C5CE7]', text: 'text-white' },
        { id: 6, title: 'Электрик на стройку', location: 'Швеция', salary: '3200 - 3800 € Netto', type: 'Строительство', reqs: ['Опыт от 1 года', 'Чтение чертежей'], bg: 'bg-slate-100', text: 'text-slate-700' },
    ];

    const categories = [
        { id: 'all', label: 'Все вакансии' },
        { id: 'Строительство', label: 'Строительство' },
        { id: 'Логистика', label: 'Логистика' },
        { id: 'Склад', label: 'Склады' },
        { id: 'Производство', label: 'Производство' },
    ];

    const filteredJobs = activeFilter === 'all' ? jobs : jobs.filter(j => j.type === activeFilter);

    return (
        <div className="min-h-screen bg-[#f0efff] font-sans selection:bg-[#6C5CE7] selection:text-white">

            {/* Navigation */}
            <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-6 lg:px-12 py-6 border-b border-slate-200 bg-white">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#6C5CE7] rounded-lg flex items-center justify-center text-white font-black text-xl group-hover:bg-[#5a4bd1] group-hover:text-white transition-colors shadow-sm">
                        E
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-black">EUROJOB</span>
                </Link>

                <div className="hidden lg:flex gap-10 text-sm font-bold text-slate-800">
                    <Link to="/jobs" className="text-black transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-1 after:bg-[#6C5CE7] after:rounded-full">Вакансии</Link>
                    <Link to="/about" className="hover:text-slate-500 transition-colors">О нас</Link>
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

            {/* Header Area */}
            <section className="pt-32 pb-12 px-6 lg:px-12 bg-white relative overflow-hidden text-center md:text-left">
                {/* Abstract Background Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#6C5CE7] animate-pulse"></span>
                        <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">AI Job Matching</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-8 leading-tight">
                        Доступные <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-400">контракты</span>
                    </h1>

                    {/* Search & Filter Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl">
                        <div className="flex-1 relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Профессия, страна или город..."
                                className="w-full pl-14 pr-4 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold focus:ring-2 focus:ring-black focus:border-black transition-all outline-none"
                            />
                        </div>
                        <button className="btn-purple px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-purple hover:-translate-y-0.5 transition-transform text-white flex-shrink-0">
                            <Filter className="w-5 h-5" />
                            Поиск
                        </button>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`px-6 py-3 rounded-full text-sm font-black transition-all border ${activeFilter === cat.id
                                    ? 'bg-[#6C5CE7] text-white border-black shadow-md'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-800 hover:text-white'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                </div>
            </section>

            {/* Job Listings border-t separates it */}
            <section className="py-16 px-6 lg:px-12 relative z-10 border-t border-slate-200 bg-[#f0efff]">
                <div className="max-w-[1400px] mx-auto">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map(job => (
                            <div key={job.id} className="card-purple bg-white p-8 flex flex-col justify-between h-full group cursor-pointer relative">

                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6C5CE7]/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider ${job.bg} ${job.text}`}>
                                            {job.type}
                                        </div>
                                        <div className="flex gap-1.5 flex-wrap justify-end">
                                            {job.reqs.map((req, i) => (
                                                <span key={i} className="px-2 py-1 bg-slate-100 text-slate-500 rounded-md text-[10px] font-bold border border-slate-200 uppercase tracking-widest whitespace-nowrap">
                                                    {req}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-black mb-6 leading-tight group-hover:text-slate-600 transition-colors">
                                        {job.title}
                                    </h3>

                                    <div className="space-y-4 mb-8 text-sm font-bold text-slate-600">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                                <MapPin className="w-4 h-4 text-black" />
                                            </div>
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#6C5CE7]/20 flex items-center justify-center">
                                                <Euro className="w-4 h-4 text-black" />
                                            </div>
                                            <span className="text-black text-lg">{job.salary}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                                    <span className="text-xs font-bold text-slate-400 flex items-center gap-2 uppercase tracking-widest">
                                        <Briefcase className="w-4 h-4" />
                                        Полная занятость
                                    </span>
                                    <button className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-[#6C5CE7] group-hover:bg-[#5a4bd1] group-hover:text-white transition-colors shadow-md">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/register" className="inline-flex items-center justify-center gap-3 btn-dark px-10 py-5 rounded-full text-lg font-black shadow-lg hover:-translate-y-1 transition-transform text-white">
                            Не нашли подходящую?
                        </Link>
                    </div>

                </div>
            </section>

            <Section9Footer />
        </div>
    );
}
