import React from 'react';
import { motion } from 'framer-motion';

export default function Section8FAQ() {
    const faqs = [
        {
            avatar: "bg-[#6C5CE7] text-white",
            icon: "👨‍👩‍👧‍👦",
            q: "Можно ли забрать семью?",
            a: "Да, через 6 месяцев работы мы помогаем оформить документы на воссоединение."
        },
        {
            avatar: "bg-slate-100 text-slate-600",
            icon: "🔄",
            q: "Что если работа не понравится?",
            a: "У вас есть право на одну бесплатную смену вакансии в течение первого месяца."
        },
        {
            avatar: "bg-slate-100 text-slate-600",
            icon: "🏥",
            q: "Как быть с медициной?",
            a: "100% наших вакансий включают полную медицинскую страховку."
        }
    ];

    return (
        <section className="py-32 px-4 sm:px-6 lg:px-12 bg-[#f0efff] relative overflow-hidden font-sans">

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
                        Мы закрываем вопросы, которые другие <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#a29bfe]">боятся обсуждать</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-center items-stretch hover:[&>div]:opacity-60 [&>div:hover]:opacity-100">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="card-neon bg-white p-8 group cursor-pointer flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-full ${faq.avatar} flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform`}>
                                    {faq.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 leading-tight flex-1">{faq.q}</h3>
                            </div>

                            <p className="text-base font-medium leading-relaxed text-slate-500">
                                {faq.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
