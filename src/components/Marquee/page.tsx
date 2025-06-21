import React from 'react'


import styles from './page.module.scss'
import { CoolMarquee } from './components/CoolMarquee';
import { BRANDS} from "./page.constants";

export default function Page() {
    return (
        <div className={styles.container}>
            <CoolMarquee>
                {BRANDS.map((brand) => (
                    <img
                        src={`images/brands/${brand}.png`}
                        alt={brand}
                        key={brand}
                        className={styles.brand}
                    />
                ))}
            </CoolMarquee>
        </div>
    )
}
