'use client';

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';


type Props = {
    children: React.ReactNode
}


export default function Framer({children}: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return

        const { clientX, clientY } = e
        const { width, height, left, top } = ref.current.getBoundingClientRect()

        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)

        setPosition({ x: middleX, y: middleY })
    }


    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{position: "relative"}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >
            {children}
        </motion.div>
    )
}
