import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import {useAnimation, useInView} from "framer-motion";
import gsap from "gsap";

import Gsap from '../Common/Gsap'
import { assets } from '@/assets/assets'
import styles from './subscribe.module.scss'
import {useScrollDirection} from "@/components/Common/useScrollDirection";

export default function Subscribe() {

    const h2Ref = useRef(null);
    const isInView = useInView(h2Ref, { amount: 0.1 });
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

    useGSAP(() => {
        gsap.fromTo('#send', {
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
            <div className={styles.container}>
                <motion.div
                    ref={h2Ref}
                    initial={{ opacity: 0, y: 10 }}
                    animate={controls}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={styles.detail}>
                    {/*<Image className={styles.image} src={assets.background} alt="background" />*/}
                    {/*<Image className={styles.send} src={assets.send2} alt="send" />*/}
                    <Gsap>
                        <Image className={styles.send} src={assets.send2} alt="send" id="send" />
                    </Gsap>
                    <h2>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
                    <div className={styles.lower}>
                        <div className={styles.input}>

                            <i className="ri-mail-line"></i>
                            <input type="text" placeholder="Enter your email"/>
                        </div>
                        <Gsap>

                            <div>

                                <button type="submit">Subscribe</button>
                            </div>
                        </Gsap>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}
