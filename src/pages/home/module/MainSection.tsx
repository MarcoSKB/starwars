import { Container } from '@/components/ui'

const MainSection = () => {
  return (
    <Container>
      <section className='relative z-0 flex min-h-[240px] w-full items-center justify-center overflow-hidden rounded-2xl px-4 sm:min-h-[500px] lg:min-h-[640px]'>
        <img
          src='./images/main-poster.jpg'
          className='pointer-events-none absolute top-0 left-0 z-0 h-full w-full object-cover'
          alt='Main poster about star wars'
        />
        <h1 className='relative text-center text-[24px] leading-6 font-bold uppercase sm:text-[72px] sm:leading-16 md:text-[90px] md:leading-20 lg:text-[112px] lg:leading-25'>
          Star Wars <br /> Wiki
        </h1>
      </section>
    </Container>
  )
}

export default MainSection
