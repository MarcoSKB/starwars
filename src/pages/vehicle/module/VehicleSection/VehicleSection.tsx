import { Container, Subtitle } from '@components/ui'
import VehicleTable from './VehicleTable'

const VehicleSection = () => {
  return (
    <Container>
      <section className='mb-5 flex flex-col md:mb-6'>
        <h1 className='md:text-h2 font-jost text-accent mb-2 text-[24px] font-bold sm:text-[40px]'>
          Vehicle information
        </h1>
        <Subtitle className='mb-6'>
          A complete catalog of Star Wars vehicles: from the fast-moving speeder
          bikes used on Tatooine and Endor to the massive AT-AT walkers wreaking
          havoc on the battlefields. It contains all kinds of equipment,
          including fighter jets, starships, combat vehicles and civilian
          vessels used by various factions, from the Galactic Republic and
          Empire to the Resistance and criminal syndicates.
        </Subtitle>
        <VehicleTable />
      </section>
    </Container>
  )
}

export default VehicleSection
