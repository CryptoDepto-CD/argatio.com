import FormSection from '@/components/airdrop/FormSection'
import HeroSection from '@/components/airdrop/HeroSection'
import VideoSection from '@/components/airdrop/VideoSection'
import React from 'react'

export default function Airdrop() {
  return (
    <main>
      <HeroSection />
      <VideoSection />
      <FormSection disabled="true" />
    </main>
  )
}
