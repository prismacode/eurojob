import React from 'react';
import { User, Mail, Phone, Shield } from 'lucide-react';
import AnimatedPage from '../../components/AnimatedPage';

export default function Settings() {
    return (
        <AnimatedPage>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-black tracking-tight">Настройки профиля</h2>
                    <p className="text-slate-500 font-medium mt-2">Управление личными данными и безопасностью.</p>
                </div>

                <div className="card-purple bg-white p-8 border border-slate-100 relative overflow-hidden">

                    <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-100">
                        <div className="w-24 h-24 rounded-full bg-[#6C5CE7] p-[3px] shadow-sm">
                            <div className="w-full h-full bg-slate-100 rounded-full border-4 border-white overflow-hidden relative group cursor-pointer">
                                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="User" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[#6C5CE7] text-xs font-black uppercase tracking-widest">Изменить</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-black">Иван Иванов</h3>
                            <p className="text-slate-500 font-bold text-sm tracking-widest uppercase mt-1">id: EUR-2489-1</p>
                        </div>
                    </div>

                    <form className="space-y-6 max-w-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Личный Email</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-black transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        defaultValue="hello@example.com"
                                        className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-black focus:ring-2 focus:ring-black focus:border-black transition-all font-bold outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Телефон</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-black transition-colors" />
                                    </div>
                                    <input
                                        type="tel"
                                        defaultValue="+7 (999) 000-00-00"
                                        className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-black focus:ring-2 focus:ring-black focus:border-black transition-all font-bold outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100 space-y-4">
                            <h4 className="text-lg font-black text-black flex items-center gap-2">
                                <Shield className="w-5 h-5 text-black" />
                                Безопасность
                            </h4>
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div>
                                    <p className="font-bold text-black">Пароль аккаунта</p>
                                    <p className="text-sm text-slate-500 font-medium">Последнее изменение: 2 месяца назад</p>
                                </div>
                                <button type="button" className="text-sm font-bold bg-white border border-slate-200 text-black px-4 py-2 rounded-xl hover:bg-[#6C5CE7] hover:text-white hover:border-black transition-colors shadow-sm cursor-pointer">
                                    Обновить
                                </button>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-end">
                            <button type="submit" className="btn-purple text-white px-8 py-4 rounded-xl font-black shadow-purple hover:-translate-y-0.5 transition-transform cursor-pointer">
                                Сохранить изменения
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </AnimatedPage>
    );
}
