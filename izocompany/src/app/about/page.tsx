import Image from 'next/image'
import AboutCTA from './components/aboutCTA'
import AboutTeams from './components/aboutTeams'
import AboutHeader from './components/aboutheader'
import AboutMind from './components/aboutmind'

export default function Home() {
  return (
    <div className='mt-8 md:mt-10 lg:mt-12 xl:mt-16'>
    <AboutHeader/>
    <AboutMind/>
    <AboutTeams/>
    <AboutCTA/>
    </div>
  )
}
