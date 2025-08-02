import homeBg from '../assets/img/home-bg.webp'
import homeImg from '../assets/img/home-bread.webp'
import homeBreadOverlay from '../assets/img/bread-1.png'
import { RiFacebookCircleLine, RiInstagramLine, RiMapPinFill, RiYoutubeLine } from '@remixicon/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {

  useGSAP(() => {
    gsap.from('.home-title',{
      delay: .3,
      y: 20,
      opacity: 0
    })

    gsap.from('.home-button', {
      y: 20,
      delay:.6,
      opacity: 0
    })

    gsap.from('.home-links', {
      delay: .9,
      x: 20,
      opacity: 0
    })

    gsap.from('.home-location', {
      x: -20,
      delay: .9,
      opacity: 0
    })

    gsap.from('.home-overlay-img', {
      delay: 1.1,
      x: 20,
      scale: 1.2,
      rotate: 5
    })

    gsap.from('.home-img', {
      x: -20,
      delay: 1.4,
      scale: 1.1,
      rotate: 5
    })

    
  }, [])


  return (
    <section id='home' className='min-h-[90vh] pt-[17vh] pb-10 flex items-center bg-no-repeat bg-cover bg-fixed' style={{backgroundImage: `url(${homeBg})`}}>
      <div className="custom-container">
        <div className="flex flex-col gap-10 items-center justify-center lg:flex-row lg:gap-0">
          {/* Home data */}
          <div className="lg:w-1/2">
            <div className="relative flex flex-col items-center lg:items-start">
              <p className="home-title text-center text-3xl font-bold italic sm:text-5xl lg:text-6xl">
                Select The Best <br />Quality Breads
              </p>
              <a href="#new" className="home-button mt-5 inline-block px-5 py-3 bg-primary text-gray-950 lg:mt-10 lg:px-7">
                Select Breads
              </a>
              <img src={homeBreadOverlay} alt="home bread overlay" className='home-overlay-img absolute w-15 -bottom-18 -left-5 sm:-bottom-15 lg:bottom-0 lg:left-70' />
            </div>
          </div>

          {/* Home img */}
          <div className="lg:w-1/2 lg:flex justify-center">
            <img src={homeImg} alt="home image" className='home-img w-60 sm:w-70 lg:w-100' />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between sm:mt-0 lg:mt-10">

          <div className="home-location flex items-center gap-2">
            <span className="text-primary">
              <RiMapPinFill />
            </span>
            <div className='text-gray-400 text-xs'>
              AV. The Sun #321 <br />Lima, Peru
            </div>
          </div>

          <div className="home-links flex items-center gap-2 text-gray-400 sm:gap-5">
            <span className="cursor-pointer transition-colors duration-200 hover:text-white">
              <RiFacebookCircleLine/>
            </span>

            <span className="cursor-pointer transition-colors duration-200 hover:text-white">
              <RiInstagramLine />
            </span>

            <span className="cursor-pointer transition-colors duration-200 hover:text-white">
              <RiYoutubeLine />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home