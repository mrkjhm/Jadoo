'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {motion, useAnimation, useInView, Variants} from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { assets, bookingCard, bookingSteps } from '@/assets/assets'
import { useScrollDirection } from '@/components/Common/useScrollDirection'
import styles from './booking.module.scss'

export default function Booking() {
    const headline = "Book your next trip in 3 easy steps"
    const words = headline.split(" ")

    // Refs
    const h3Ref = useRef(null);
    const h2Ref = useRef(null);
    const rightRef = useRef(null);
    const stepsRef = useRef(null); // ✅ NEW ref

    const iconRefs = useRef<HTMLDivElement[]>([]);

    // InView
    const h3InView = useInView(h3Ref, { amount: 0.1 })
    const h2InView = useInView(h2Ref, { amount: 0.1 })
    const rightInView = useInView(rightRef, { amount: 0.6 })
    const stepsInView = useInView(stepsRef, { amount: 0.2 }); // ✅ NEW inView

    // Scroll direction
    const direction = useScrollDirection()

    // Animations
    const h3Controls = useAnimation()
    const h2Controls = useAnimation()
    const rightControls = useAnimation()

    // Animation config for steps container
    const stepsContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const stepItem: Variants = {
        hidden: { opacity: 0, y: 20, transition: { duration: 0.4, ease: "easeInOut" } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };




    useEffect(() => {
        if (h3InView) {
            h3Controls.start({ opacity: 1, y: 0 })
        } else {
            h3Controls.start({ opacity: 0, y: direction === 'up' ? -20 : 20 })
        }
    }, [h3InView, direction, h3Controls])

    useEffect(() => {
        if (h2InView) {
            h2Controls.start({ opacity: 1, y: 0 })
        } else {
            h2Controls.start({ opacity: 0, y: direction === 'up' ? -20 : 20 })
        }
    }, [h2InView, direction, h2Controls])

    useEffect(() => {
        if (rightInView) {
            rightControls.start({ opacity: 1, y: 0 })
        } else {
            rightControls.start({ opacity: 0, y: direction === 'up' ? -20 : 20 })
        }
    }, [rightInView, direction, rightControls])

    // GSAP
    useGSAP(() => {
        iconRefs.current.forEach((icon) => {
            const delay = Math.random(); // 0 to 1 sec
            const duration = 0.8 + Math.random() * 0.6; // 0.8 to 1.4 sec

            gsap.to(icon, {
                y: 15,
                repeat: -1,
                yoyo: true,
                delay,
                duration,
                ease: 'power1.in'
            });
        });
    }, []);


    return (
        <div className={`${styles.main} custom-padding`} id="booking">
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.content1}>
                        <div className={styles.title}>
                            <motion.h3
                                ref={h3Ref}
                                initial={{ opacity: 0, y: 10 }}
                                animate={h3Controls}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                Easy and Fast
                            </motion.h3>

                            <h2 ref={h2Ref}>
                                {words.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={h2Controls}
                                        transition={{ duration: 0.6, delay: 0.05 * i }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </h2>
                        </div>

                        <motion.div
                            ref={stepsRef} // ✅ Connect ref
                            className={styles.bookingSteps}
                            variants={stepsContainer}
                            initial="hidden"
                            animate={stepsInView ? "visible" : "hidden"} // ✅ Trigger based on stepsInView
                        >
                            {bookingSteps.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.steps}
                                    variants={stepItem}
                                >
                                    <div
                                        className={styles.icon}
                                        ref={(el) => {
                                            if (el) iconRefs.current[index] = el;
                                        }}
                                    >
                                        <Image src={item.image} alt="icon" />
                                    </div>
                                    <div className={styles.details}>
                                        <h4>{item.title}</h4>
                                        <p>{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>

                <motion.div
                    ref={rightRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={rightControls}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={styles.right}
                >
                    <div className={styles.content2}>
                        <div className={styles.box1}>
                            {bookingCard.map((item, index) => (
                                <div key={index} className={styles.details}>
                                    <Image className={styles.image} src={item.image} alt="thumbnail" />
                                    <h3>{item.title}</h3>
                                    <p>{item.date} | {item.author}</p>
                                    <div className={styles.icons}>
                                        <Image src={assets.leaf} alt="leaf" />
                                        <Image src={assets.map} alt="map" />
                                        <Image src={assets.send} alt="send" />
                                    </div>
                                    <div className={styles.footer}>
                                        <Image src={assets.building1} alt="building" />
                                        <p>24 people going</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.box2}>
                            <div>
                                <Image src={assets.eclipse} alt="eclipse" />
                            </div>
                            <div>
                                <p>On going</p>
                                <h3>Trip to Rome</h3>
                                <p><span>40%</span> completed</p>
                                <div className={styles.bar}></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
