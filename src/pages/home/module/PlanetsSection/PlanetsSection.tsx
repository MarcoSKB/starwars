import { Container, H2, Subtitle } from '@components/ui'
import PlanetsTable from './PlanetsTable'

const PlanetsSection = () => {
  return (
    <Container>
      <section className='mb-5 flex flex-col md:mb-12'>
        <H2>Planets</H2>
        <Subtitle className='mb-2 md:mb-4'>
          Detailed information about the planets of the Star Wars universe,
          including climate, population, and geographical features.
        </Subtitle>
        <PlanetsTable />
      </section>
    </Container>
  )
}

export default PlanetsSection
