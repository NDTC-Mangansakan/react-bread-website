import newBread1 from '../assets/img/new-bread-1.webp'
import newBread2 from '../assets/img/new-bread-2.webp'
import newBread3 from '../assets/img/new-bread-3.webp'

const newBreadsInfo = [
  {
    breadName:'Rye Bread',
    info:'Baked with healthy, gluten-free sourdough for goo nutrition.',
    img:newBread1
  },
  {
    breadName: 'Whole Grain Bread',
    info: 'Crispy and homemade prepared from organic yeast-free flour.',
    img: newBread2
  },
  {
    breadName: 'Mutligrain Bread',
    info: 'Tasty and made with different natural grains from the country side.',
    img: newBread3
  }
]


const BreadComponent = ({ breadName, info, img, index }) => {
  const flexDirection = index === 1 ? 'lg:flex-col-reverse' : 'lg:flex-col'
  const subTextMargin = index === 1 ? 'lg:mb-3' : 'lg:mt-3'
  const imgMargin = index === 1 ? 'lg:mb-8' : 'lg:mt-8'

  return(
    <div className={`text-center flex flex-col ${flexDirection} w-[320px] lg:w-1/3`}>
      <p className="italic text-primary text-xl sm:text-2xl lg:text-3xl">{breadName}</p>
      <p className={`px-2 mt-3 text-gray-400 ${subTextMargin} [350px]:px-0`}>{info}</p>
      <img src={img} alt={breadName} className={`mt-8 w-40 mx-auto lg: sm:w-50  ${imgMargin}`}/>
    </div>
  )
}

const New = () => {
  return (
    <section id='new' className='py-10'>
      <div className="custom-container">
        <p className="text-2xl font-bold italic text-center sm:text-3xl lg:text-4xl">New Breads</p>

        <div className="mt-15 flex flex-col items-center gap-10 justify-center lg:flex-row">
          {newBreadsInfo.map(({ breadName, info, img }, i) => (
            <BreadComponent key={breadName} 
                            breadName={breadName} 
                            info={info} 
                            img={img} 
                            index={i}/>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <a href="#new" className="mt-5 inline-block px-5 py-3 bg-primary text-gray-950 lg:mt-10 lg:px-7">
            See More Breads
          </a>
        </div>
      </div>
    </section>
  )
}

export default New