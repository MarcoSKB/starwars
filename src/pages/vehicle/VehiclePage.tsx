import { VehicleSection } from './module'

const VehiclePage = () => {
  return (
    <div>
      <img
        src={import.meta.env.BASE_URL + '/images/vehicle-poster.jpg'}
        className='mb-5 flex h-[180px] w-full items-center justify-center overflow-hidden rounded-md object-cover object-[10%_30%] opacity-80 mix-blend-lighten sm:h-[250px] md:mb-10 md:h-[400px] lg:h-[450px]'
        alt='Vehicle poster'
        loading='lazy'
      />
      <VehicleSection />
    </div>
  )
}

export default VehiclePage
