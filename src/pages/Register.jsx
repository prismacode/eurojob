import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import MobileMenu from '../components/MobileMenu';

export default function Register() {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        if (name && email) {
            login({ name, email });
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-[#f0efff] relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#6C5CE7] selection:text-white">

            {/* Abstract Background Grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#6C5CE7]/10 rounded-full blur-[100px] -translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-slate-200/50 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <div className="max-w-xl w-full relative z-10">
                <Link to="/" className="inline-flex items-center gap-3 group mb-6 transition-colors">
                    <div className="w-8 h-8 bg-[#6C5CE7] rounded-lg flex items-center justify-center text-white font-black text-xl group-hover:bg-[#5a4bd1] group-hover:text-white transition-colors shadow-sm">
                        E
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-black hidden sm:block">EUROJOB</span>
                </Link>

                <div className="absolute top-4 right-4 sm:top-12 sm:right-8 z-50">
                    <MobileMenu />
                </div>

                <div className="card-purple bg-white p-8 sm:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#6C5CE7]/5 rounded-bl-[100px] pointer-events-none"></div>

                    <div className="text-center mb-10 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4 leading-tight">
                            Начни <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-400">карьеру</span><br />в Европе сейчас
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">Создайте аккаунт для отслеживания оформления</p>
                    </div>

                    <form className="space-y-5 relative z-10">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Имя</label>
                            <div className="relative group bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-black focus-within:ring-2 focus-within:ring-black transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400 group-focus-within:text-black transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-transparent border-none pl-12 pr-4 py-4 outline-none text-black font-bold placeholder:text-slate-400 placeholder:font-medium"
                                    placeholder="Иван Иванов"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Телефон</label>
                            <div className="relative group bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-black focus-within:ring-2 focus-within:ring-black transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-black transition-colors" />
                                </div>
                                <input
                                    type="tel"
                                    className="w-full bg-transparent border-none pl-12 pr-4 py-4 outline-none text-black font-bold placeholder:text-slate-400 placeholder:font-medium"
                                    placeholder="+7 (999) 000-00-00"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                            <div className="relative group bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-black focus-within:ring-2 focus-within:ring-black transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-black transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent border-none pl-12 pr-4 py-4 outline-none text-black font-bold placeholder:text-slate-400 placeholder:font-medium"
                                    placeholder="ivan@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Пароль</label>
                            <div className="relative group bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-black focus-within:ring-2 focus-within:ring-black transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-black transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    className="w-full bg-transparent border-none pl-12 pr-4 py-4 outline-none text-black font-bold placeholder:text-slate-400 placeholder:font-medium"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            onClick={handleRegister}
                            className="w-full btn-purple px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-purple hover:-translate-y-0.5 transition-transform text-white mt-6"
                        >
                            Создать аккаунт
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-xs text-center text-slate-400 font-medium mt-4">
                            Создавая аккаунт, вы соглашаетесь с условиями пользовательского соглашения и политикой конфиденциальности.
                        </p>
                    </form>

                    <p className="mt-8 text-center text-sm font-medium text-slate-600 relative z-10">
                        Уже есть аккаунт?{' '}
                        <Link to="/login" className="font-bold text-black hover:text-slate-600 transition-colors border-b border-black hover:border-transparent">
                            Войти
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
