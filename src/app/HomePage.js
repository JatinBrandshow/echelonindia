import { AppleCarousel } from '@/components/AppleCarousel'
import { HeroSection } from '@/components/HeroSection'
import { PlansCarousel } from '@/components/PlansCarousel'
import { SVGMaskEffect } from '@/components/SVGMaskEffect'
import { Testimonials } from '@/components/Testimonials'
import { TypewriterText } from '@/components/TypewriterText'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AppleCarousel />
            <SVGMaskEffect />
            <PlansCarousel />
            <Testimonials />
            <TypewriterText />
        </>
    )
}

export default HomePage