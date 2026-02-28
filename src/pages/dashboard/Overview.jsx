import React from 'react';
import { ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import AnimatedPage from '../../components/AnimatedPage';

export default function Overview() {
    const user = useAuthStore((state) => state.user);
    return (
        <AnimatedPage>
            <div className="max-w-5xl mx-auto space-y-8 relative z-10">

                {/* Welcome Banner */}
                <div className="bg-[#2d2b55] rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-purple">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C5CE7]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-2">Привет, {user?.name || 'Иван'}! 👋</h2>
                        <p className="text-slate-400 font-medium text-lg max-w-xl">
                            Ваш процесс оформления визы запущен. Мы проверяем загруженные документы.
                        </p>
                    </div>
                </div>

                {/* Grid Stats / Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Status Widget */}
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 md:col-span-2 relative overflow-hidden group hover:shadow-purple transition-shadow">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6C5CE7]/5 rounded-bl-[100px] pointer-events-none transition-colors group-hover:bg-[#6C5CE7]/10"></div>
                        <h3 className="text-xl font-black text-black mb-6 relative z-10">Статус оформления</h3>

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#6C5CE7]/20 text-white flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black">Проверка анкеты</h4>
                                    <p className="text-slate-500 text-sm font-medium">Завершено 12 октября</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-100 text-black flex items-center justify-center shrink-0 relative">
                                    <Clock className="w-6 h-6 animate-pulse" />
                                    <span className="absolute -inset-1 border-2 border-slate-200 rounded-full animate-ping opacity-20"></span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-black">Подготовка документов</h4>
                                    <p className="text-slate-500 text-sm font-medium">В процессе. Ожидаем перевод паспорта.</p>
                                    <button className="mt-3 text-sm font-bold bg-[#6C5CE7] text-white px-4 py-2 rounded-xl hover:-translate-y-0.5 transition-all shadow-md cursor-pointer">Дозагрузить файлы</button>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 opacity-40">
                                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-black">Подача в посольство</h4>
                                    <p className="text-slate-500 text-sm font-medium">Ожидается запись</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Widget */}
                    <div className="card-purple bg-white p-6 shadow-sm border border-slate-100 relative overflow-hidden flex flex-col justify-between transform transition-transform hover:-translate-y-1 hover:shadow-purple cursor-pointer group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[100px] pointer-events-none transition-colors group-hover:bg-[#6C5CE7]/10"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-black mb-2 text-black">Осталось оплатить</h3>
                            <div className="text-4xl font-black tracking-tighter mb-1 text-black">150 €</div>
                            <p className="text-slate-500 text-sm font-medium">За перевод документов</p>
                        </div>

                        <button className="relative z-10 w-full btn-purple text-white rounded-xl py-4 font-black mt-6 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform shadow-purple cursor-pointer">
                            Оплатить картой
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </div>
        </AnimatedPage>
    );
}
