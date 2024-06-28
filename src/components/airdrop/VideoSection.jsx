'use client'

import React from 'react'
import Image from 'next/image';
import thumbnail from '@/../public/airdrop/thumbnail.png'
import { useTranslations } from "next-intl";

export default function VideoSection() {

    const t = useTranslations("airdrop.video");
    const handleThumbnailClick = () => {
        window.location.href = 'https://www.youtube.com/watch?v=vK-bZRb7Wc0';
    }
    const handleTwitterButtonClick = () => {
        window.location.href = 'https://x.com/login';
    }

  return (
    <section >
        <div>
            <div className='flex flex-col lg:grid lg:grid-cols-7 lg:px-20 items-center px-10 gap-10'>
                <div className=' col-start-1 col-end-4'>
                    <p className='mb-1 text-lg py-5 text-center'>{t('text')}</p>
                    <div onClick={handleThumbnailClick} className='cursor-pointer'>
                        <Image src={thumbnail} alt="Thumbnail" />
                    </div> 
                </div>

                <div className=' w-full col-start-6 col-end-8'>
                    <div className=' text-center p-2 mt-4 bg-white rounded-full'>
                        <button onClick={handleTwitterButtonClick} className=' font-bold text-black'>
                            {t('twitter')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
