import React from 'react';
import Image from 'next/image';

import { logos } from '@/assets/assets'
import styles from './logo.module.scss'

export default function Logo() {
    return (
        <div className={`${styles.main} custom-padding`}>
            <div className={styles.container}>
                {logos.map((item, index) => (
                    <div key={index} className={styles.logo}>
                        <Image src={item.image} alt={item.name} />
                    </div>
                ))}

            </div>
        </div>
    )
}
