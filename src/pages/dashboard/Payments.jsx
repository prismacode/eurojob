import React from 'react';
import { CreditCard, Plus, ArrowUpRight, Clock } from 'lucide-react';
import AnimatedPage from '../../components/AnimatedPage';

export default function Payments() {
    return (
        <AnimatedPage>
            <div className="max-w-4xl mx-auto relative z-10 w-full pt-4">
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-black tracking-tight">Платежи</h2>
                    <p className="text-slate-500 font-medium mt-2">История ваших транзакций и текущий баланс.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Total Paid */}
                    <div className="card-purple bg-white p-6 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#6C5CE7]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="text-sm font-bold text-slate-500 mb-1">Всего оплачено</div>
                        <div className="text-3xl font-black text-black">450 €</div>
                    </div>

                    {/* Pending */}
                    <div className="card-purple bg-white p-6 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="text-sm font-bold text-slate-500 mb-1">К оплате</div>
                        <div className="text-3xl font-black text-black">150 €</div>
                    </div>

                    {/* Add Card Action */}
                    <button className="bg-slate-50 hover:bg-[#6C5CE7] hover:text-white rounded-[2rem] p-6 border-2 border-dashed border-slate-200 hover:border-black flex flex-col items-center justify-center text-slate-500 transition-all group cursor-pointer">
                        <div className="w-10 h-10 bg-white group-hover:bg-[#5a4bd1] group-hover:text-white rounded-full flex items-center justify-center text-slate-400 shadow-sm mb-3 transition-colors">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm">Добавить карту</span>
                    </button>
                </div>

                {/* Transaction History */}
                <div className="card-purple bg-white border border-slate-100 overflow-hidden">
                    <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="text-lg font-black text-black">История операций</h3>
                        <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-black transition-colors">
                            <Plus className="w-4 h-4" />
                            Скачать PDF
                        </button>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {[
                            { id: 1, title: 'Авансовый платеж: Услуги агентства', date: '10 окт 2026', amount: '350.00 €', status: 'Оплачено' },
                            { id: 2, title: 'Перевод документов (Английский)', date: '15 окт 2026', amount: '100.00 €', status: 'Оплачено' }
                        ].map((tx) => (
                            <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#6C5CE7]/20 rounded-full flex items-center justify-center text-white">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-black">{tx.title}</p>
                                        <p className="text-sm font-medium text-slate-500">{tx.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-black">{tx.amount}</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{tx.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </AnimatedPage>
    );
}
