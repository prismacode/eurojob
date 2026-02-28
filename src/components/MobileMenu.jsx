import React, { useState } from 'react';
import { createPortal } from 'react-dom';
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

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-slate-800 hover:text-black transition-colors"
            >
                <Menu className="w-8 h-8" />
            </button>

            <AnimatePresence>
                {isOpen ? createPortal(
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[99999] bg-[#f0efff] flex flex-col p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                                <div className="w-8 h-8 bg-[#6C5CE7] rounded-lg flex items-center justify-center shadow-purple text-white font-black text-xl">
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
                            <Link to="/jobs" onClick={() => setIsOpen(false)} className="py-2 hover:text-slate-500 transition-colors border-b border-slate-100 uppercase tracking-wide">Вакансии</Link>
                            <a href="#" onClick={() => setIsOpen(false)} className="py-2 hover:text-slate-500 transition-colors border-b border-slate-100 uppercase tracking-wide">Платформа</a>
                            <a href="#" onClick={() => setIsOpen(false)} className="py-2 hover:text-slate-500 transition-colors border-b border-slate-100 uppercase tracking-wide">Клиентам</a>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="py-2 hover:text-slate-500 transition-colors border-b border-slate-100 uppercase tracking-wide">О нас</Link>
                        </nav>

                        <div className="mt-auto pt-8 flex flex-col gap-4">
                            {user ? (
                                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center gap-3 bg-[#6C5CE7] text-white px-6 py-4 rounded-2xl font-black shadow-purple">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-white">
                                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${user.name}`} alt="User" />
                                    </div>
                                    Перейти в Кабинет
                                </Link>
                            ) : (
                                <>
                                    <Link to="/login" onClick={() => setIsOpen(false)} className="w-full py-4 text-center text-slate-700 font-bold bg-slate-100 rounded-2xl hover:bg-slate-200 transition-colors">
                                        Войти
                                    </Link>
                                    <Link to="/register" onClick={() => setIsOpen(false)} className="w-full btn-purple py-4 rounded-full text-center font-black shadow-purple text-white">
                                        Присоединиться
                                    </Link>
                                </>
                            )}
                        </div>
                    </motion.div>,
                    document.body
                ) : null}
            </AnimatePresence>
        </div>
    );
}
