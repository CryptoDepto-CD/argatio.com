'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import left_wing from '@/../public/airdrop/hero_left_wing.svg'
import right_wing from '@/../public/airdrop/hero_right_wing.svg'
import center_wing from '@/../public/airdrop/hero_icon_center.svg'

export default function HeroSection() {
    const leftWingRef = useRef(null);
    const rightWingRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const tlWings = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power1.inOut", duration: 0.6 } });
    
        tlWings.to(leftWingRef.current, { rotation: -12, transformOrigin: "right center" }, 0)
            .to(rightWingRef.current, { rotation: 12, transformOrigin: "left center" }, 0)
            .to(leftWingRef.current, { rotation: 0, transformOrigin: "right center" }, 0.6)
            .to(rightWingRef.current, { rotation: 0, transformOrigin: "left center" }, 0.6);

        const tlContainer = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power1.inOut", duration: 2 } });

        tlContainer.to(containerRef.current, { y: -20 }, 0)
            .to(containerRef.current, { y: 0 }, 2);
    
      }, []);
  return (
    <section>
        <div className=' flex flex-col items-center h-[500px]'>
            <div className=' w-full'>
                <h2 className=' text-3xl sm:text-4xl font-semibold px-8 text-right sm:text-center uppercase pt-20'>Airdrop</h2>
            </div>
            <div ref={containerRef} className='flex w-80 lg:w-96 mr-10 sm:mr-72 lg:mr-80 -mt-10'>
                <div ref={leftWingRef} className=' -mr-4'>
                    <Image src={left_wing} alt="Left Wing" />
                </div>
                <div>
                    <Image src={center_wing} className='mt-8' alt="Center Wing" />
                </div>
                <div ref={rightWingRef} className=' mt-12'>
                    <Image src={right_wing} alt="Right Wing" />
                </div>
            </div>
        </div>
    </section>
  )
}
