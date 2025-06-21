'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Framer from '@/components/Common/Framer'
import styles from './navbar.module.scss'
import { assets, navLinks } from '@/assets/assets'


export default function Navbar() {

    const [ menuOpen, setMenuOpen ] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className={`${styles.main} custom-padding`}>
                <Framer>
                    <Link href="/">
                        <Image src={assets.logo} alt="logo"/>
                    </Link>
                </Framer>
                <div className={styles.navmenu}>
                    <div className={styles.menu}>
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </div>
                        ))}

                    </div>
                    <div className={styles.login}>
                        <ul>
                            <li>Login</li>
                            <li>Sign up</li>
                        </ul>
                    </div>
                    <div className={styles.lang}>
                        <ul>
                            <li>EN</li>
                            <i className="ri-arrow-down-s-line"></i>
                        </ul>
                    </div>

                    <button className={styles.menuicon} onClick={toggleMenu}>
                        { menuOpen ? ( <i className="ri-close-large-fill"></i> ) : ( <i className="ri-menu-3-line"></i> )}
                    </button>





                </div>
            </div>
            <div className={styles.dropdown}>
                { menuOpen && (
                    <div className={styles.menuu}>
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
