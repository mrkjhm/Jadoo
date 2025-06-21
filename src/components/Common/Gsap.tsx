'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

type Props = {
    children: React.ReactElement
    strength?: number
}

export default function Magnetic({ children, strength = 0.5 }: Props) {
    const magneticRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const element = magneticRef.current
        if (!element) return

        const xTo = gsap.quickTo(element, 'x', {
            duration: 1,
            ease: 'elastic.out(1, 0.3)',
        })
        const yTo = gsap.quickTo(element, 'y', {
            duration: 1,
            ease: 'elastic.out(1, 0.3)',
        })

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect()
            const x = (e.clientX - (rect.left + rect.width / 2)) * strength
            const y = (e.clientY - (rect.top + rect.height / 2)) * strength
            xTo(x)
            yTo(y)
        }

        const handleMouseLeave = () => {
            xTo(0)
            yTo(0)
        }

        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [strength])

    return (
        <div ref={magneticRef} style={{ display: 'inline-block' }}>
            {children}
        </div>
    )
}
