'use client';

import React, {useRef, useEffect} from 'react';
import Image from 'next/image';
import {motion, useAnimation, useInView} from 'framer-motion';

import Framer from '@/components/Common/Framer'
import Gsap from '@/components/Common/Gsap';
import styles from './landing.module.scss';
import { assets } from '@/assets/assets';
import {useScrollDirection} from "@/components/Common/useScrollDirection";

export default function Landing() {

    const headline =  "Travel, enjoy and live a new and full life";
    const words = headline.split(" ");

    const h1Ref = useRef(null);
    const h2Ref = useRef(null);


    const h1InView = useInView(h1Ref, { amount: 0.4 });
    const h2InView = useInView(h2Ref, { amount: 0.6 });

    const controls = useAnimation();
    const direction = useScrollDirection();




    useEffect(() => {
        if (h1InView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            // ✅ If scrolling up, fade/slide up; else down
            controls.start({
                opacity: 0,
                y: direction === 'up' ? -10 : 10,
            });
        }
    }, [h1InView, direction, controls]);

    useEffect(() => {
        if (h2InView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            // ✅ If scrolling up, fade/slide up; else down
            controls.start({
                opacity: 0,
                y: direction === 'up' ? -20 : 20,
            });
        }
    }, [h2InView, direction, controls]);


    return (
        <div className={`${styles.main} custom-padding`}>
            <div className={`${styles.container} container mx-auto`}>
                <div className={styles.left}>
                    <motion.h2
                        ref={h2Ref}
                        initial={{ opacity: 0, y: 10 }}
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        Best Destinations around the world
                    </motion.h2>
                    <h1>
                        {words.map((word, i) => (
                            <motion.span
                                ref={h1Ref}
                                initial={{ opacity: 0, y: 10 }}
                                animate={controls}
                                transition={{ duration: 0.2, delay: 0.1 * i }}
                                key={i}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.p
                        className={styles.subhead}
                        initial={{ opacity: 0, y: 10 }}
                        animate={controls}
                        transition={{ duration: 0.7, delay: 0.7 }}
                    >Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</motion.p>
                    <motion.div
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 10 }}
                        animate={controls}
                        transition={{ duration: 0.7, delay: 1 }}
                    >
                        <Gsap>

                            <button className={styles.button}>Find out more</button>
                        </Gsap>
                        <div className={styles.play}>
                            <Framer>

                                <button className={styles.arrow}>
                                    <i className="ri-arrow-right-s-fill"></i>
                                </button>
                            </Framer>
                            <p>Play Demo</p>
                        </div>
                    </motion.div>
                </div>
                <div className={styles.right}>
                    <Image className={styles.img} src={assets.landing_img} alt="landing image"/>
                </div>
            </div>
        </div>
    )
}
