import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const user = useAuthStore((state) => state.user);
    const location = useLocation();

    React.useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-slate-800 hover:text-black transition-colors"
            >
                <Menu className="w-8 h-8" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col p-6"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <Link to="/" className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-[#ccff00] font-black text-xl">
                                    E
                                </div>
                                <span className="text-2xl font-black tracking-tight text-black uppercase">EUROJOB</span>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-slate-500 hover:text-black rounded-full transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 text-xl font-black text-black flex-1">
                            <Link to="/jobs" className="py-2 hover:text-slate-500 transition-colors border-b border-slate-100 uppercase tracking-wide">Вакансии</Link>
                            <a href="#" className="py-2 hover:text-slate-500 transition-colors border-b border-slate-100 uppercase tracking-wide">Платформа</a>
                            <a href="#" className="py-2 hover:text-slate-500 transition-colors border-b border-slate-100 uppercase tracking-wide">Клиентам</a>
                            <Link to="/about" className="py-2 hover:text-slate-500 transition-colors border-b border-slate-100 uppercase tracking-wide">О нас</Link>
                        </nav>

                        <div className="mt-auto pt-8 flex flex-col gap-4">
                            {user ? (
                                <Link to="/dashboard" className="w-full flex items-center justify-center gap-3 bg-black text-[#ccff00] px-6 py-4 rounded-2xl font-black shadow-lg">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-white">
                                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${user.name}`} alt="User" />
                                    </div>
                                    Перейти в Кабинет
                                </Link>
                            ) : (
                                <>
                                    <Link to="/login" className="w-full py-4 text-center text-slate-700 font-bold bg-slate-100 rounded-2xl hover:bg-slate-200 transition-colors">
                                        Войти
                                    </Link>
                                    <Link to="/register" className="w-full btn-neon py-4 rounded-full text-center font-black shadow-neon text-black">
                                        Присоединиться
                                    </Link>
                                </>
                            )}
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
