
import AboutCTA from './components/aboutCTA'
import AboutTeams from './components/aboutTeams'
import AboutHeader from './components/aboutheader'
import AboutMind from './components/aboutmind'

export default function Home() {
  return (
    <main>
      <div className='mt-16 md:mt-17 lg:mt-20 xl:mt-22'>
        <AboutHeader />
        <AboutMind />
        <AboutTeams />
        <AboutCTA />
      </div>
    </main>

  )
}
