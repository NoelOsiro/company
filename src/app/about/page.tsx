
import AboutCTA from '../../components/about/aboutCTA'
import AboutTeams from '../../components/about/aboutTeams'
import AboutHeader from '../../components/about/aboutheader'
import AboutMind from '../../components/about/aboutmind'

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
