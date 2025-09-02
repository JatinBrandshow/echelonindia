import { AppleCarousel } from '@/components/AppleCarousel'
import { HeroSection } from '@/components/HeroSection'
import { SVGMaskEffect } from '@/components/SVGMaskEffect'
import { TypewriterText } from '@/components/TypewriterText'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AppleCarousel />
            <TypewriterText />
            <SVGMaskEffect />
        </>
    )
}

export default HomePage