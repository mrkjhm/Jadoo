import React, {useEffect, useRef} from 'react';
import Image from 'next/image';

import styles from './destination.module.scss';
import { destination } from '@/assets/assets';
import Gsap from '../Common/Gsap'
import {motion, useAnimation, useInView} from "framer-motion";
import {useScrollDirection} from "@/components/Common/useScrollDirection";

export default function Destination() {

    const headline = "Top Destinations";
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
        <div className={`${styles.main} custom-padding`} id="destinations">
            <div className={styles.container}>
                <motion.h2
                    ref={h2Ref}
                    initial={{ opacity: 0, y: 10 }}
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >Top Selling</motion.h2>
                <h1>
                    {words.map((word, i) => (
                        <motion.span
                            ref={h2Ref}
                            initial={{ opacity: 0, y: 10 }}
                            animate={controls}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            key={i}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
            </div>

            <motion.div
                className={styles.cards}
                ref={cardRef}
                variants={cardContainer}
                initial="hidden"
                animate={cardInView ? "visible" : "hidden"}
            >
                {destination.map((item, index) => (
                    <motion.div  variants={cardItem} key={index}>

                        <div key={index} className={styles.card}>
                            <Image src={item.image} className={styles.des} alt={item.place} />
                            <div className={styles.details}>
                                <div className={styles.place}>
                                    <h3>{item.place}</h3>
                                    <p>{item.price}</p>
                                </div>
                                <div className={styles.days}>
                                    <Image className={styles.icon} src={item.icon} alt="icon" />
                                    <p>{item.days}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
