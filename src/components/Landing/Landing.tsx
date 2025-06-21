'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Framer from '@/components/Common/Framer';
import Gsap from '@/components/Common/Gsap';
import styles from './landing.module.scss';
import { assets } from '@/assets/assets';
import { useScrollDirection } from '@/components/Common/useScrollDirection';

export default function Landing() {
    const headline = "Travel, enjoy and live a new and full life";
    const words = headline.split(" ");

    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const pRef = useRef(null);
    const buttonsRef = useRef(null);

    const h1InView = useInView(h1Ref, { amount: 0.4 });
    const h2InView = useInView(h2Ref, { amount: 0.6 });
    const pInView = useInView(pRef, { amount: 0.7 });
    const buttonsInView = useInView(buttonsRef, { amount: 0.7 });

    const h1Controls = useAnimation();
    const h2Controls = useAnimation();
    const pControls = useAnimation();
    const buttonsControls = useAnimation();

    const direction = useScrollDirection();

    useEffect(() => {
        h1Controls.start(h1InView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: direction === 'up' ? -20 : 20 });
    }, [h1InView, direction, h1Controls]);

    useEffect(() => {
        h2Controls.start(h2InView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: direction === 'up' ? -20 : 20 });
    }, [h2InView, direction, h2Controls]);

    useEffect(() => {
        pControls.start(pInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: direction === 'up' ? -20 : 20 });
    }, [pInView, direction, pControls]);

    useEffect(() => {
        buttonsControls.start(buttonsInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: direction === 'up' ? -20 : 20 });
    }, [buttonsInView, direction, buttonsControls]);

    // GSAP
    useGSAP(() => {
        gsap.fromTo('#circleArrow', {
                x:0,
                rotation: 0,
                borderRadius: '20%'
            },
            {
                x:0,
                repeat: -1,
                yoyo:true,
                rotation: 360,
                borderRadius: '100%',
                duration: 2,
                ease: 'bounce.out',
            }
        )
    }, [])

    return (
        <div className={`${styles.main} custom-padding`}>
            <div className={`${styles.container} container mx-auto`}>
                <div className={styles.left}>
                    <motion.h2
                        ref={h2Ref}
                        initial={{ opacity: 0, y: 10 }}
                        animate={h2Controls}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        Best Destinations around the world
                    </motion.h2>

                    <h1>
                        {words.map((word, i) => (
                            <motion.span
                                ref={h1Ref}
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={h1Controls}
                                transition={{ duration: 0.2, delay: 0.1 * i }}
                            >
                                {word}&nbsp;
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        ref={pRef}
                        className={styles.subhead}
                        initial={{ opacity: 0, y: 10 }}
                        animate={pControls}
                        transition={{ duration: 0.7, delay: 0.7 }}
                    >
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
                        listening. Park gate sell they west hard for the.
                    </motion.p>

                    <motion.div
                        ref={buttonsRef}
                        className={styles.buttons}
                        initial={{ opacity: 0, y: 10 }}
                        animate={buttonsControls}
                        transition={{ duration: 0.7, delay: 1 }}
                    >
                        <Gsap>
                            <button className={styles.button}>Find out more</button>
                        </Gsap>
                        <div className={styles.play}>
                            <Framer>
                                <button className={styles.arrow} id="circleArrow">
                                    <i className="ri-arrow-right-s-fill"></i>
                                </button>
                            </Framer>
                            <p>Play Demo</p>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.right}>
                    <Image className={styles.img} src={assets.landing_img} alt="landing image" />
                </div>
            </div>
        </div>
    );
}
