import Image from 'next/image'
import AboutCTA from './components/aboutCTA'
import AboutTeams from './components/aboutTeams'
import AboutHeader from './components/aboutheader'
import AboutMind from './components/aboutmind'

export default function Home() {
  return (
    <>
    <AboutHeader/>
    <AboutMind/>
    <AboutTeams/>
    <AboutCTA/>
    </>
  )
}
