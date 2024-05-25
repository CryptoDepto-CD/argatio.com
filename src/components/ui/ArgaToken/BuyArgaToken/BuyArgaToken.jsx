"use client";

import LogInDialog from '@/components/ArgaToken/Dialogs/LogInDialog'
import Button from '../../Button/Button'
import { useState } from 'react'

export default function BuyArgaToken() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full'>
      <Button type="button" onclick={() => setIsOpen(true)}>Comprar Arga Token</Button>
      <LogInDialog open={isOpen} handleClick={() => setIsOpen(false)} />
    </div>
  )
}
