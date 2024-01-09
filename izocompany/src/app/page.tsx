import Image from 'next/image'
import Hero from './components/hero'
import FeatureSection from './components/feature'
import Testimonials from './components/testimonials'

export default function Home() {
    return (
        <>
            <Hero />
            <FeatureSection />
            <Testimonials/>
        </>

    )
}
