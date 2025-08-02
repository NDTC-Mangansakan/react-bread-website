import favouriteBread1 from '../assets/img/favorite-bread-1.png'
import favouriteBread2 from '../assets/img/favorite-bread-2.png'
import favouriteBread3 from '../assets/img/favorite-bread-3.png'
import favouriteBread4 from '../assets/img/favorite-bread-4.png'
import favouriteBread5 from '../assets/img/favorite-bread-5.png'
import favouriteBread6 from '../assets/img/favorite-bread-6.png'

const favouriteBreadInfo = [
  {
    breadName: 'Whole Grain',
    breadImg: favouriteBread1,
    price:600
  },
  {
    breadName: 'Rye',
    breadImg: favouriteBread2,
    price: 800
  },
  {
    breadName: 'Wheat',
    breadImg: favouriteBread3,
    price: 300
  },
  {
    breadName: 'Multigrain',
    breadImg: favouriteBread4,
    price: 500
  },
  {
    breadName: 'Sourdough',
    breadImg: favouriteBread5,
    price: 700
  },
  {
    breadName: 'French',
    breadImg: favouriteBread6,
    price: 300
  },
]

const FavouriteBreadComponent = ({breadName, breadImg, price}) => {
  return(
    <div className='group p-5 border border-transparent bg-gray-900/60 transition-all duration-200 hover:border-primary'>
      <img src={breadImg} alt={breadName} 
           className='w-40 mx-auto -translate-y-12 sm:w-45 transition-transform duration-200 group-hover:scale-105'/>
      <div className='-translate-y-8'>
        <p className="text-primary text-lg italic font-semibold">{breadName}</p>
        <p className="text-sm text-gray-400">Bread</p>
        <p className="font-bold text-3xl translate-y-5">${price}</p>
      </div>
    </div>
  )
}

const Favourites = () => {
  return (
    <section id='favourites' className='py-10'>
      <div className="custom-container">
        <p className="text-2xl font-bold italic text-center sm:text-3xl lg:text-4xl">
          Customer Favourites
        </p>

        <div className="max-w-xs mx-auto mt-15 grid gap-15 grid-cols-1 sm:grid-cols-2 sm:max-w-xl lg:grid-cols-3 lg:max-w-3xl lg:gap-10">
          {favouriteBreadInfo.map(({breadName, breadImg, price}) => (
            <FavouriteBreadComponent key={breadName} breadName={breadName} breadImg={breadImg} price={price}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Favourites