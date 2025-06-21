'use client'

import React, {useEffect, useRef} from 'react'
import {motion, Transition, useAnimation, useInView} from 'framer-motion'
import Image from 'next/image'


import {assets, testimonials} from '@/assets/assets'
import styles from './testimonial.module.scss'
import {useScrollDirection} from "@/components/Common/useScrollDirection";


export default function Testimonial() {

    const headline = "What people say about Us.";
    const words = headline.split(" ");

    const h2Ref = useRef(null);
    const isInView = useInView(h2Ref, { amount: 0.2 });
    const controls = useAnimation();
    const direction = useScrollDirection();

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            // ✅ If scrolling up, fade/slide up; else down
            controls.start({
                opacity: 0,
                y: direction === 'up' ? -20 : 20,
            });
        }
    }, [isInView, direction, controls]);

    const dotVariants = {
        jump: {y: -20,}
    }

    const dotTransition: Transition = {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
    }

    return (
        <div className={`${styles.main} custom-padding`}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <motion.h3
                        ref={h2Ref}
                        initial={{ opacity: 0, y: 10 }}
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        Testimonials
                    </motion.h3>
                    <h2>
                        {words.map((word, i) => (
                            <motion.span
                                ref={h2Ref}
                                initial={{ opacity: 0, y: 10 }}
                                animate={controls}
                                transition={{ duration: 0.8, delay: 0.1 * i }}
                                key={i}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>
                    <motion.div


                        animate="jump"
                        transition={{
                            staggerChildren: -0.2,
                            staggerDirection: -1
                        }}
                    >
                        <motion.div className={styles.dot} variants={dotVariants} transition={dotTransition}/>
                        <motion.div className={styles.dot} variants={dotVariants} transition={dotTransition}/>
                        <motion.div className={styles.dot} variants={dotVariants} transition={dotTransition}/>
                    </motion.div>

                </div>
                <motion.div
                    ref={h2Ref}
                    initial={{ opacity: 0, y: 10 }}
                    animate={controls}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.card}>
                    <Image src={assets.profile} alt="profile" />
                    <div className={styles.details}>

                        <div className={styles.box}>
                            {testimonials.map((item, index) => (
                                <div key={index} >
                                    <p>{item.review}</p>
                                    <h4>{item.name}</h4>
                                    <p>{item.designation}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.arrow}>
                            <div className={styles.arrow1}>
                                <i className="ri-arrow-up-s-line"></i>
                                <i className="ri-arrow-down-s-line"></i>
                            </div>
                        </div>
                            <div className={styles.arrow2}>
                                <i className="ri-arrow-left-s-line"></i>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>

                    </div>
                </motion.div>

            </div>
        </div>
    )
}
