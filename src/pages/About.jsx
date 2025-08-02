import aboutImgOverlay from '../assets/img/bread-2.png'
import aboutImg from '../assets/img/about-bread.webp'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import _SplitText from 'gsap/SplitText'
import gsap from 'gsap/all'

const About = () => {

  useGSAP(() => {
    const aboutText = new _SplitText('.about-paragraph', {type: 'lines'})

    gsap.from('.about-title', {
      scrollTrigger: {
        trigger: '.about-title',
        start: 'top 80%',
      },
      opacity: 0,
      y: 10,
      delay: .3,
      ease: 'power1.inOut'
    })

    gsap.from(aboutText.lines, {
      scrollTrigger: {
        trigger: '.about-paragraph',
        start: 'top 80%',
      },
      opacity: 0,
      y: 10,
      delay: .6,
      stagger: 0.02,
      ease: 'power1.inOut'
    })

    gsap.from('.about-button', {
      scrollTrigger: {
        trigger: '.about-button',
        start: 'top 80%',
      },
      opacity: 0,
      y: 10,
      delay: .9,
      ease: 'power1.inOut'
    })

    gsap.from('.about-img', {
      scrollTrigger: {
        trigger: '.about-img',
        start: 'top 80%',
      },
      opacity: 0,
      x: -10,
      delay: 1.2,
      ease: 'power1.inOut'
    })

    gsap.from('.about-img-overlay', {
      scrollTrigger: {
        trigger: '.about-title',
        start: 'top 80%',
      },
      rotate:5,
      scale: 1.2,
      opacity: 0,
      delay: 1.5,
      ease: 'power1.inOut'
    })
  }, [])


  return (
    <section id='about' className='py-10'>
      <div className="custom-container">
        <div className="flex flex-col items-center justify-center lg:flex-row-reverse">
          <div className="relative lg:w-1/2">
            <p className="about-title text-2xl font-bold italic text-center sm:text-3xl lg:text-4xl lg:text-start">
              About Us
            </p>
            <p className="about-paragraph mt-3 text-gray-400 text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae recusandae veritatis, officia reprehenderit sit atque voluptates, molestiae voluptatem soluta, excepturi exercitationem nam expedita maiores.
            </p>
            <div className="about-button mt-5 flex justify-center lg:justify-start lg:mt-0">
              <a href="#about" className="inline-block px-5 py-3 bg-primary text-gray-950 lg:mt-10 lg:px-7">
                Learn More
              </a>
            </div>

            <img src={aboutImgOverlay} alt="About Image Overlay" className='about-img-overlay w-15 absolute -bottom-5 left-1/6 transform -translate-x-1/2 lg:left-1/2'/>
          </div>


          <div className="mt-10 lg:w-1/2 lg:flex justify-center lg:mt-0">
            <img src={aboutImg} alt="About main Image" className='about-img w-55 sm:w-70 lg:w-100'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About