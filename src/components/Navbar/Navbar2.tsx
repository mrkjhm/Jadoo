'use client';


import React, {useState} from 'react';
import Link from 'next/link';
import Image from "next/image";

import Gsap from '@/components/Common/Gsap'
import styles from './navbar2.module.scss';
import {assets, navLinks} from "@/assets/assets";


export default function Navbar2() {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ language, setLanguage ] = useState(false);

    // Toggles the menu open and closed when the menu icon is clicked
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        /* <nav>
             <div className="fixed w-full h-24 shadow-xl bg-white">
                 <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                     <div>
                         <Link href="/">
                             <Image src={assets.logo} alt="logo" className={styles.logo}/>
                         </Link>
                     </div>
                     <div className="md:flex hidden">
                         <ul className="flex gap-10">
                             {navLinks.map((item, i) => (
                                 <li key={i}>
                                     {item.name}
                                 </li>
                             ))}
                         </ul>
                     </div>
                     <button onClick={() => setMenuOpen(true)} className="md:hidden flex cursor-pointer">
                         <i className="ri-menu-3-line"></i>
                     </button>
                 </div>
             </div>

             <div className={
                 menuOpen
                     ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                     : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"

             }>
                 <div onClick={() => setMenuOpen(false)} className="absolute top-10 right-10">
                     <i className="ri-close-large-fill"></i>
                 </div>
                 <div>
                     <Link href="/">
                         <Image src={assets.logo} alt="logo" className={styles.logo}/>
                     </Link>
                 </div>
                 <div>

                     <div>
                         {navLinks.map((link) => (
                             <div key={link.name}>
                                 <Link href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</Link>
                             </div>
                         ))}
                     </div>

                 </div>


             </div>
         </nav>*/
        <nav>
            <div className={`${styles.main} custom-padding`}>
                <div className={`${styles.navmenu} container mx-auto`}>
                    <Gsap>

                    <div>
                        <Link href="/">
                            <Image src={assets.logo} alt="logo" className={styles.logo}/>
                        </Link>
                    </div>
                    </Gsap>
                    <div className={styles.menu}>
                        <div className={styles.menuItem}>
                            <ul>
                                {navLinks.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.href}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
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
                                <div onClick={() => setLanguage(true)} className={styles.downarrow}>
                                    <i className="ri-arrow-down-s-line"></i>
                                </div>
                            </ul>
                        </div>
                        <button onClick={() => setMenuOpen(true)}>
                            <i className="ri-menu-3-line"></i>
                        </button>
                    </div>

                </div>
            </div>

            <div className={`${styles.menuWrapper} ${menuOpen ? styles.open : styles.close}`}>


                <div onClick={() => setMenuOpen(false)} className={styles.buttonClose}>
                    <i className="ri-close-large-fill"></i>
                </div>
                <div>
                    <Link href="/">
                        <Image src={assets.logo} alt="logo" className={styles.logo}/>
                    </Link>
                </div>
                <div className={styles.menu}>
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <Link href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</Link>
                        </div>
                    ))}
                </div>
                <div className={styles.login}>
                    <ul>
                        <li>Login</li>
                        <li>Sign up</li>
                    </ul>
                </div>


            </div>
        </nav>
    )
}
