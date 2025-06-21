
import { useEffect, useState } from 'react';

export function useScrollDirection() {
    const [direction, setDirection] = useState<'up' | 'down'>('down');
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const currentY = window.scrollY;
            setDirection(currentY > lastY ? 'down' : 'up');
            setLastY(currentY);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastY]);

    return direction;
}
