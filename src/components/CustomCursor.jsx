import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const handleHover = () => setIsHover(true);
        const handleLeave = () => setIsHover(false);

        window.addEventListener('mousemove', move);

        const interactives = document.querySelectorAll('a, button, [role="button"]');
        interactives.forEach((el) => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            window.removeEventListener('mousemove', move);
            interactives.forEach((el) => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed w-10 h-10 rounded-full border-2 border-[#ccff00] pointer-events-none z-[9999] mix-blend-exclusion"
                animate={{
                    x: pos.x - 20,
                    y: pos.y - 20,
                    scale: isHover ? 1.7 : 1,
                    opacity: isHover ? 0.5 : 0.6,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                style={{ top: 0, left: 0 }}
            />
            {/* Inner dot */}
            <motion.div
                className="fixed w-2 h-2 rounded-full bg-[#ccff00] pointer-events-none z-[9999]"
                animate={{
                    x: pos.x - 4,
                    y: pos.y - 4,
                    scale: isHover ? 0 : 1,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ top: 0, left: 0 }}
            />
        </>
    );
}
