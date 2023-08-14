'use client'
import BundleInkSection from '@/components/sections/BundleInkSection/BundleInkSection'
import React from 'react'
import HeroSection from '@/components/sections/Herosection/HeroSection'
import MarcasSection from '@/components/sections/MarcasSection/MarcasSection'
import ProdutosSection from '@/components/sections/ProdutosSection/ProdutosSection'
import ServicosSection from '@/components/sections/ServicosSection/ServicosSection'
import SobreSection2 from '@/components/sections/SobreSection2/SobreSection2'
import TransitionEffect from '@/components/layoutComponents/TransitionEffect/TransitionEffect'
import { Analytics } from '@vercel/analytics/react'
export default function Home() {
  return (
    <main>
      <Analytics/>      
      <TransitionEffect/>
     <HeroSection/>
     <SobreSection2/>
     <MarcasSection/>
     <BundleInkSection/>
      <ProdutosSection/>
      <ServicosSection/>
    </main>
  )
}
