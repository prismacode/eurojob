import React from 'react';

export default function Marquee() {
    const items = [
        '⚡ Бесплатная виза',
        '⚡ Легальный контракт',
        '⚡ Работа без посредников',
        '⚡ Медицинская страховка',
        '⚡ Поддержка 24/7',
        '⚡ Компенсация перелета',
        '⚡ Бесплатная виза',
        '⚡ Легальный контракт',
        '⚡ Работа без посредников',
        '⚡ Медицинская страховка',
        '⚡ Поддержка 24/7',
        '⚡ Компенсация перелета',
    ];

    return (
        <div className="w-full bg-[#6C5CE7] py-3 overflow-hidden flex whitespace-nowrap shadow-purple-glow relative z-30">
            <div
                className="flex items-center space-x-8 text-white font-bold text-sm tracking-widest uppercase hardware-accelerate"
                style={{ animation: 'marquee 25s linear infinite' }}
            >
                {items.map((item, index) => (
                    <span key={index} className="mx-4">{item}</span>
                ))}
                {items.map((item, index) => (
                    <span key={`dup-${index}`} className="mx-4">{item}</span>
                ))}
            </div>
        </div>
    );
}
