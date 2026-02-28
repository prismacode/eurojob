import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import MobileMenu from './MobileMenu';
import { ArrowRight, Sparkles, Globe, Briefcase, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Section1Hero() {
    const user = useAuthStore((state) => state.user);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const yFloating1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yFloating2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const yFloating3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen font-sans bg-transparent overflow-hidden">

            {/* Purple Blob Background #1 - Softened */}
            <motion.div
                style={{ y: yBackground, opacity: opacityFade }}
                className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6C5CE7]/30 to-[#a29bfe]/40 rounded-full blur-[200px] opacity-40 pointer-events-none z-0"
            />
            {/* Purple Blob Background #2 */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-[#a29bfe] rounded-full blur-[120px] opacity-15 pointer-events-none z-0"
            />
            {/* Lavender Blob #3 */}
            <div className="absolute bottom-0 left-[-5%] w-[350px] h-[350px] bg-[#d6d3ff] rounded-full blur-[100px] opacity-30 pointer-events-none z-0" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-screen flex flex-col pb-12 lg:pb-0">

                {/* Navigation */}
                <nav className="flex justify-between items-center py-6 bg-white/60 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-b-2xl shadow-sm hardware-accelerate border-b border-white/40">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#6C5CE7] rounded-lg flex items-center justify-center shadow-purple">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-[#1a1a2e] uppercase">EUROJOB</span>
                    </div>

                    {/* Central Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link to="/" className="text-sm font-semibold text-[#6C5CE7] border-b-2 border-[#6C5CE7] pb-1">Главная</Link>
                        <Link to="/about" className="text-sm font-semibold text-slate-700 hover:text-[#6C5CE7] transition-colors">О нас</Link>
                        <Link to="/jobs" className="text-sm font-semibold text-slate-700 hover:text-[#6C5CE7] transition-colors">Вакансии</Link>
                        <a href="#" className="text-sm font-semibold text-slate-700 hover:text-[#6C5CE7] transition-colors">Для компаний</a>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        {user ? (
                            <Link to="/dashboard" className="flex items-center gap-3 bg-white pl-2 pr-4 py-2 rounded-full shadow-purple transition-all hover:bg-purple-50 border border-purple-100">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden border border-purple-200">
                                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${user.name}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                                <span className="font-bold text-[#1a1a2e] text-sm">Кабинет</span>
                            </Link>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-[#6C5CE7] transition-colors">
                                    Войти
                                </Link>
                                <MagneticButton>
                                    <Link to="/register" className="btn-purple px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2">
                                        Начать работу
                                    </Link>
                                </MagneticButton>
                            </div>
                        )}
                    </div>

                    <MobileMenu />
                </nav>

                {/* Hero Centered Layout */}
                <div className="flex-grow flex flex-col items-center justify-center relative">

                    {/* Floating Chips */}
                    <motion.div style={{ y: yFloating1 }} className="absolute top-[10%] left-[8%] hidden lg:flex items-center gap-2 bg-white/60 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-purple-glow border border-white/80 z-20 hardware-accelerate">
                        <div className="w-7 h-7 badge-purple rounded-lg">
                            <Briefcase className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#1a1a2e]">0 € Предоплаты</span>
                    </motion.div>

                    <motion.div style={{ y: yFloating2 }} className="absolute top-[15%] right-[12%] hidden lg:flex items-center gap-2 bg-white/60 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-purple-glow border border-white/80 z-20 hardware-accelerate">
                        <div className="w-7 h-7 badge-purple rounded-lg">
                            <Globe className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#1a1a2e]">Легальный контракт</span>
                    </motion.div>

                    <motion.div style={{ y: yFloating3 }} className="absolute top-[48%] right-[0%] xl:-right-8 hidden lg:flex items-center gap-3 bg-white/60 backdrop-blur-xl p-3 rounded-2xl shadow-purple-glow border border-white/80 z-20 hardware-accelerate">
                        <div className="w-10 h-10 rounded-xl bg-[#6C5CE7] flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="text-[10px] text-purple-400 font-bold uppercase">Гарантия</p>
                            <p className="text-sm font-black text-[#1a1a2e]">Возврат за перелет</p>
                        </div>
                    </motion.div>

                    {/* Animated Flags */}
                    <motion.div
                        animate={{ y: [-15, 15, -15], rotate: [-10, 5, -10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[32%] left-0 xl:-left-8 hidden lg:block z-10 w-24 h-16 rounded-xl overflow-hidden shadow-lg"
                    >
                        <img src="https://flagcdn.com/w160/de.png" alt="Germany" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [20, -10, 20], rotate: [5, -5, 5] }}
                        transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[60%] left-[2%] xl:-left-4 hidden lg:block z-10 w-20 h-14 rounded-xl overflow-hidden shadow-lg"
                    >
                        <img src="https://flagcdn.com/w80/fi.png" alt="Finland" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [-10, 20, -10], rotate: [0, 10, 0] }}
                        transition={{ duration: 6, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[12%] left-[8%] xl:left-[2%] hidden lg:block z-10 w-28 h-20 rounded-xl overflow-hidden shadow-lg"
                    >
                        <img src="https://flagcdn.com/w160/es.png" alt="Spain" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [15, -15, 15], rotate: [-5, 10, -5] }}
                        transition={{ duration: 8, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[15%] right-[5%] xl:right-0 hidden lg:block z-10 w-16 h-12 rounded-xl overflow-hidden shadow-lg opacity-90"
                    >
                        <img src="https://flagcdn.com/w80/nl.png" alt="Netherlands" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
                        transition={{ duration: 9, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] left-[20%] hidden lg:block z-10 w-16 h-12 rounded-xl overflow-hidden shadow-lg opacity-80"
                    >
                        <img src="https://flagcdn.com/w80/cz.png" alt="Czech Republic" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10], x: [10, -10, 10], rotate: [0, 15, 0] }}
                        transition={{ duration: 6.5, delay: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[18%] right-[25%] hidden lg:block z-10 w-20 h-14 rounded-xl overflow-hidden shadow-lg opacity-90"
                    >
                        <img src="https://flagcdn.com/w80/pl.png" alt="Poland" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center relative z-20 max-w-4xl"
                    >
                        <div className="flex items-center justify-center gap-4 mb-8 mt-12">
                            {/* Mobile Flag 1 */}
                            <motion.div
                                animate={{ y: [-4, 4, -4], rotate: [-8, 4, -8] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="block lg:hidden w-11 h-8 rounded-md overflow-hidden shadow-md origin-center"
                            >
                                <img src="https://flagcdn.com/w80/de.png" alt="Germany" className="w-full h-full object-cover" />
                            </motion.div>

                            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white shadow-purple border border-purple-100">
                                <span className="w-2 h-2 rounded-full bg-[#6C5CE7] animate-pulse"></span>
                                <span className="text-[10px] sm:text-xs font-bold text-[#6C5CE7] tracking-wide uppercase">Платформа Релокации</span>
                            </div>

                            {/* Mobile Flag 2 */}
                            <motion.div
                                animate={{ y: [4, -4, 4], rotate: [4, -8, 4] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="block lg:hidden w-11 h-8 rounded-md overflow-hidden shadow-md origin-center"
                            >
                                <img src="https://flagcdn.com/w80/es.png" alt="Spain" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-[#1a1a2e] leading-[1.05] mb-6">
                            Работа в Европе с{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] via-[#a29bfe] to-[#6C5CE7] animate-gradient-text">
                                оплатой услуг
                            </span>{' '}
                            из первой зарплаты.
                        </h1>

                        <p className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-4">
                            0 € предоплаты за вакансию
                        </p>

                        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto mb-10 font-medium leading-relaxed bg-white/50 backdrop-blur-sm px-4 py-3 rounded-2xl">
                            Получите легальный контракт и визу без риска потерять деньги на этапе оформления. Если вы не выйдете на работу по нашей вине — компенсируем стоимость перелета.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/register" className="btn-purple px-8 py-4 rounded-full text-base font-bold w-full sm:w-auto flex items-center justify-center gap-2">
                                Рассчитать мою зарплату (Netto) за 2 мин.
                            </Link>
                            <Link to="/jobs" className="btn-outline px-8 py-4 rounded-full text-base font-bold w-full sm:w-auto flex items-center justify-center gap-2">
                                Каталог вакансий <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
