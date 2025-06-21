import React from 'react'
import Image from 'next/image'

import { assets } from '@/assets/assets'
import Gsap from '../Common/Gsap'
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <div className={`${styles.main} custom-padding`}>
            <div className={styles.container}>
                <div className={styles.detail}>
                    <div>
                        <h2>Jadoo.</h2>
                        <p>Book your trip in minute, get full
                            Control for much longer.
                        </p>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Mobile</p>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <p>Help/FAQ</p>
                        <p>Press</p>
                        <p>Affiliates</p>
                    </div>
                    <div>
                        <h3>More</h3>
                        <p>Airlinefees</p>
                        <p>Airline</p>
                        <p>Low fare tips</p>
                    </div>
                    <div>
                        <div className={styles.icon}>
                            <Gsap>
                                <Image src={assets.social_fb} alt="logo" />
                            </Gsap>
                            <Gsap>
                                <Image src={assets.social_insta} alt="logo" />
                            </Gsap>
                            <Gsap>
                                <Image src={assets.social_twitter} alt="logo" />
                            </Gsap>
                        </div>
                        <p>Discover our app</p>

                        <div className={styles.buttons}>
                            <Gsap>

                                <Image src={assets.play_store} alt="play store" />
                            </Gsap>
                            <Gsap>
                                <Image src={assets.apple_store} alt="apple store" />
                            </Gsap>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>All rights reserved@jadoo.co</div>
            </div>

        </div>
    )
}
