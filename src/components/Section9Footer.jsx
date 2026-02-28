import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Section9Footer() {
    return (
        <footer className="pt-32 pb-8 px-4 sm:px-6 lg:px-12 bg-[#f0efff] relative font-sans">

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                {/* Pre-Footer CTA Block */}
                <div className="bg-gradient-to-br from-[#6C5CE7] to-[#a29bfe] rounded-[3rem] p-12 md:p-16 lg:p-20 shadow-purple mb-20 relative overflow-hidden flex flex-col items-center text-center">

                    {/* Subtle grid pattern background */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05] relative z-10">
                        Не ждите, пока лучшие вакансии <span className="text-purple-200">заберут</span>
                    </h2>

                    <div className="text-lg font-bold text-purple-100 mb-10 max-w-2xl relative z-10">
                        Получите в Telegram список вакансий с зарплатой от 2200 € Netto под ваш опыт.
                    </div>

                    <a
                        href="#"
                        className="relative z-10 btn-dark px-10 py-5 rounded-full text-lg font-black transition-transform hover:scale-105 flex items-center justify-center gap-3 text-white w-full sm:w-auto mb-8"
                    >
                        <MessageCircle className="w-6 h-6 text-[#ccff00]" />
                        Перейти в Telegram-бот
                    </a>

                    <div className="relative z-10 text-sm font-bold text-purple-100 bg-white/20 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm max-w-md">
                        За февраль 2026 года мы трудоустроили 148 человек.<br />
                        Средний срок выхода на работу — 21 день.
                    </div>
                </div>
            </div>

            {/* Dark Black Footer Container */}
            <div className="bg-[#2d2b55] rounded-[3rem] rounded-b-none pt-24 pb-12 px-8 sm:px-12 lg:px-20 mx-auto max-w-[1400px] shadow-2xl relative overflow-hidden border border-purple-800/30">

                {/* Subtle background glow */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Main Footer Links & Info */}
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <div className="text-3xl font-black tracking-tighter text-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#6C5CE7] rounded-xl flex items-center justify-center text-white text-xl shadow-purple-glow transform -rotate-3">E</div>
                                EUROJOB
                            </div>
                            <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                                Инновационная платформа по трудоустройству в Европе. Мы оцифровали весь процесс переезда для вашего комфорта.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs text-[#a29bfe]">Компания</h4>
                            <ul className="space-y-4">
                                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors font-medium">О нас</Link></li>
                                <li><Link to="/jobs" className="text-slate-400 hover:text-white transition-colors font-medium">Вакансии</Link></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Отзывы</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Контакты</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs text-[#a29bfe]">Юридическая инфо</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Лицензия</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Договор оферты</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Политика данных</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Footer Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8 text-sm text-slate-500 font-medium">
                        <p className="mb-4 md:mb-0">© 2026 EUROJOB. Все права защищены.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
