'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import left_wing from '@/../public/airdrop/hero_left_wing.svg'
import right_wing from '@/../public/airdrop/hero_right_wing.svg'
import center_wing from '@/../public/airdrop/hero_icon_center.svg'
import thumbnail from '@/../public/airdrop/thumbnail.png'

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

      const handleThumbnailClick = () => {
        window.location.href = 'https://www.youtube.com/watch?v=vK-bZRb7Wc0';
    }

    const handleTwitterButtonClick = () => {
        window.location.href = 'https://x.com/login';
    }

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
        <div className='absolute left-20 bottom-20'>
        <div className='w-full flex flex-col items-center lg:w-1/2'>
                <p className='text-lg mb-1'>Para obtener más información te recomendamos ver la siguiente entrevista</p>
                <div onClick={handleThumbnailClick} className='cursor-pointer'>
                    <Image src={thumbnail} alt="Thumbnail" />
                </div>
                <div className='bg-white rounded-lg mt-4 p-4 right-0'>
                        <button onClick={handleTwitterButtonClick} className='text-black'>
                            Iniciar Sesión con X
                        </button>
                    </div>
            </div>
            </div>
    </section>
  )
}
