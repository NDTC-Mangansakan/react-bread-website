import aboutImgOverlay from '../assets/img/bread-2.png'
import aboutImg from '../assets/img/about-bread.webp'

const About = () => {
  return (
    <section id='about' className='py-10'>
      <div className="custom-container">
        <div className="flex flex-col items-center justify-center lg:flex-row-reverse">
          <div className="relative lg:w-1/2">
            <p className="text-2xl font-bold italic text-center sm:text-3xl lg:text-4xl lg:text-start">
              About Us
            </p>
            <p className="mt-3 text-gray-400 text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae recusandae veritatis, officia reprehenderit sit atque voluptates, molestiae voluptatem soluta, excepturi exercitationem nam expedita maiores.
            </p>
            <div className="mt-5 flex justify-center lg:justify-start lg:mt-0">
              <a href="#about" className="inline-block px-5 py-3 bg-primary text-gray-950 lg:mt-10 lg:px-7">
                Learn More
              </a>
            </div>

            <img src={aboutImgOverlay} alt="About Image Overlay" className='w-15 absolute -bottom-5 left-1/6 transform -translate-x-1/2 lg:left-1/2'/>
          </div>


          <div className="mt-10 lg:w-1/2 lg:flex justify-center lg:mt-0">
            <img src={aboutImg} alt="About main Image" className='w-55 sm:w-70 lg:w-100'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About