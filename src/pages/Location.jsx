import locationBg from '../assets/img/visit-bg.webp'

const Location = () => {
  return (
    <section id='location' className='relative h-[40vh] py-10 flex items-center justify-center bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${locationBg})` }}>
      <div className=" z-10">
        <p className="text-3xl font-bold italic text-center sm:text-4xl lg:text-5xl">
          Visit Us
        </p>
        <p className="mt-3 text-gray-400 text-center sm:text-lg lg:text-xl">
          Discover the best bread, we look <br />forwards to your visit.
        </p>
        <div className="mt-5 flex justify-center lg:mt-0">
          <a href="#location" className="inline-block px-5 py-3 bg-primary text-gray-950 lg:mt-10 lg:px-7">
            See Location
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/50"></div>
    </section>
  )
}

export default Location