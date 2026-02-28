import React from 'react';
import { UploadCloud, File, CheckCircle2 } from 'lucide-react';
import AnimatedPage from '../../components/AnimatedPage';

export default function Documents() {
    return (
        <AnimatedPage>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-black tracking-tight">Документы</h2>
                    <p className="text-slate-500 font-medium mt-2">Загрузите необходимые документы для запуска процесса оформления.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Document Card: Passport */}
                    <div className="card-purple bg-white p-6 border border-slate-100 relative overflow-hidden group hover:shadow-purple transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-black text-black">Загранпаспорт</h3>
                            <span className="bg-[#6C5CE7]/20 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Проверено
                            </span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 mb-6">Скан всех заполненных страниц в хорошем качестве.</p>

                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="w-10 h-10 bg-[#6C5CE7] rounded-xl flex items-center justify-center text-white shrink-0">
                                <File className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-black truncate">passport_scan_2026.pdf</p>
                                <p className="text-xs font-medium text-slate-500">2.4 MB</p>
                            </div>
                        </div>
                    </div>

                    {/* Document Card: Upload Request */}
                    <div className="card-purple bg-white p-6 border border-slate-100 relative overflow-hidden group hover:shadow-purple transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-black text-black">Резюме (CV)</h3>
                            <span className="bg-slate-100 text-slate-500 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                Требуется
                            </span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 mb-6">Актуальное резюме на английском языке с опытом работы.</p>

                        <label className="flex border-2 border-dashed border-slate-200 bg-slate-50/50 hover:bg-slate-50 rounded-2xl p-6 transition-colors cursor-pointer group-hover:border-black justify-center items-center flex-col text-center transition-all">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mb-3 shadow-sm group-hover:scale-110 group-hover:bg-[#6C5CE7] group-hover:text-white transition-all">
                                <UploadCloud className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-black text-black">Нажмите для загрузки</span>
                            <span className="text-xs font-medium text-slate-400 mt-1">PDF, DOCX до 10MB</span>
                            <input type="file" className="hidden" />
                        </label>
                    </div>

                </div>
            </div>
        </AnimatedPage>
    );
}
