// hooks/useScrollDirection.ts
import { useEffect, useState } from 'react';

export function useScrollDirection() {
    const [direction, setDirection] = useState<'up' | 'down'>('down');
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setDirection(currentY > lastY ? 'down' : 'up');
            setLastY(currentY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastY]);

    return direction;
}
