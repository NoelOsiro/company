import Hero from '@/components/app/hero/hero'
import FeatureSection from '@/components/app/feature/feature'
import Testimonials from '@/components/testimonials/testimonials'
import HeroBottom from '@/components/app/hero/heroBottom'

export default function Home() {
    return (
        <>
            <Hero />
            <FeatureSection />
            <Testimonials />
            <HeroBottom/>
        </>
    )
}
