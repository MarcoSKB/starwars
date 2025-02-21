const Footer = () => {
  return (
    <footer className='py-3 md:py-5'>
      <div className='mx-auto max-w-[1140px] px-4'>
        <div className='flex flex-col gap-3 md:gap-5'>
          <div className='flex gap-5 self-center md:self-end'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-opacity hover:opacity-70'
              title='To Facebook page'
            >
              <img
                src={import.meta.env.BASE_URL + 'images/facebook.svg'}
                alt='Facebook'
              />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-opacity hover:opacity-70'
              title='To Instagram page'
            >
              <img
                src={import.meta.env.BASE_URL + 'images/instagram.svg'}
                alt='Instagram'
              />
            </a>
            <a
              href='https://x.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-opacity hover:opacity-70'
              title='To Twitter page'
            >
              <img
                src={import.meta.env.BASE_URL + 'images/twitter.svg'}
                alt='Twitter'
              />
            </a>
          </div>
          <hr className='border-accent' />
          <div className='mx-auto flex w-full max-w-[920px] flex-wrap justify-between gap-2 text-sm font-semibold'>
            <span>© 2025 Star Wars</span>
            <span>Privacy policy</span>
            <span>Term of service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
