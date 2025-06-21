'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';

import Gsap from '../Common/Gsap'
import { useScrollDirection } from "../Common/useScrollDirection";
import styles from './category.module.scss';
import { assets, category } from '@/assets/assets';

export default function Category() {

    const headline = "We Offer Best Services";
    const words = headline.split(" ");

    const h2Ref = useRef(null);
    const isInView = useInView(h2Ref, { amount: 0.6 });
    const controls = useAnimation();
    const direction = useScrollDirection();

    const cardControls = useAnimation()
    const cardRef = useRef(null)
    const cardInView = useInView(cardRef, { amount: 0.1 })

    const cardContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
                ease: "easeOut",
            },
        },
    };

    const cardItem = {
        hidden: { opacity: 0, y: 20, transition: { duration: 0.4, ease: "easeInOut" } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    useEffect(() => {
        if (cardInView) {
            cardControls.start({ opacity: 1, y: 0 })
        } else {
            cardControls.start({ opacity: 0, y: direction === 'up' ? -20 : 20 })
        }
    }, [cardInView, direction, cardControls])



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


    return (
        <div className={`${styles.main} custom-padding`} id="category">
            <div className={styles.container}>
                <div className={styles.header} ref={h2Ref}>
                    <motion.h3

                        initial={{ opacity: 0, y: 10 }}
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        Category
                    </motion.h3>
                    <h2>
                        {words.map((word, i) => (
                            <motion.span

                                initial={{ opacity: 0, y: 10 }}
                                animate={controls}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                key={i}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>

                </div>
                <div className={styles.decor1}><Image src={assets.decor1} alt=""/></div>
                <motion.div
                    ref={cardRef}
                    className={styles.cards}
                    variants={cardContainer}
                    initial="hidden"
                    animate={cardInView ? "visible" : "hidden"}
                >
                    {category.map((item, index) => (
                        <motion.div key={index} className={styles.card}  variants={cardItem}>
                            <Image src={item.image} className={styles.image} alt="image"/>
                            <h3>{item.heading}</h3>
                            <p>{item.subHeading}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
