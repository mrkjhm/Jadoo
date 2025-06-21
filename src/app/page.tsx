'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import Lenis from 'lenis';

import Navbar from '../components/Header/Navbar';
import Landing from '../components/Landing/Landing';
import Category from '../components/Category/Category';
import Destination from '../components/Destination/Destination';
import Booking from '../components/Booking/Booking';
import Testimonial from '../components/Testimonial/Testimonial';
import Logo from '../components/Logos/Logo';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';
import Marquee from "../components/Marquee/page";

import { assets } from '@/assets/assets'
import {BRANDS} from "@/components/Marquee/page.constants";
import React from "react";

export default function Home() {

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, [])


    return (
        <div>
            {/*<div className="pt-30 py-10
            xl:bg-amber-400
            lg:bg-amber-700
            md:bg-blue-500
            sm:bg-cyan-500
            bg-green-500
            ">
                <p className="xl:flex hidden">extra large - 96rem (1536px)</p>
                <p className="xl:hidden lg:flex hidden">large - 80rem (1280px)</p>
                <p className="lg:hidden md:flex hidden">medium - 64rem (1024px)</p>
                <p className="md:hidden sm:flex hidden">small - 48rem (768px)</p>
                <p className="sm:hidden xs:flex ">extra mall - 40rem (640px)</p>
            </div>*/}
            <Landing />
            <Category />
            <Destination />
            <Booking />
            <Testimonial />
            {/*<Logo />*/}
            <Marquee />
            {/*<div className="pt-30 py-10
            xl:bg-amber-400
            lg:bg-amber-700
            md:bg-blue-500
            sm:bg-cyan-500
            bg-green-500
            ">
                <p className="xl:flex hidden">extra large - 96rem (1536px)</p>
                <p className="xl:hidden lg:flex hidden">large - 80rem (1280px)</p>
                <p className="lg:hidden md:flex hidden">medium - 64rem (1024px)</p>
                <p className="md:hidden sm:flex hidden">small - 48rem (768px)</p>
                <p className="sm:hidden xs:flex ">extra mall - 40rem (640px)</p>
            </div>*/}
            <Subscribe />
            <Footer />
        </div>
    );
}
