import { Container, Subtitle } from '@components/ui'
import FilmsTable from './FilmsTable'

const FilmsSection = () => {
  return (
    <Container>
      <section className='mb-5 flex flex-col md:mb-6'>
        <h1 className='md:text-h2 font-jost text-accent mb-2 text-[24px] font-bold sm:text-[40px]'>
          Films table
        </h1>
        <Subtitle className='mb-6'>
          A complete list of Star Wars films: from the legendary beginning in
          1977 to the most modern episodes. Release dates, directors, producers,
          and key events in the saga.
        </Subtitle>
        <FilmsTable />
      </section>
    </Container>
  )
}

export default FilmsSection
