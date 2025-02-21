import { Container, Subtitle } from '@components/ui'
import PeopleTable from './PeopleTable'

const PeopleSection = () => {
  return (
    <Container>
      <section className='mb-5 flex flex-col md:mb-6'>
        <h1 className='md:text-h2 font-jost text-accent mb-2 text-[24px] font-bold sm:text-[40px]'>
          People information
        </h1>
        <Subtitle className='mb-6'>
          The Star Wars saga is driven by unforgettable characters—brave
          warriors, wise mentors, sinister villains, and unlikely heroes.
          Discover their journeys across the galaxy and the roles they play in
          the eternal struggle between light and dark.
        </Subtitle>
        <PeopleTable />
      </section>
    </Container>
  )
}

export default PeopleSection
