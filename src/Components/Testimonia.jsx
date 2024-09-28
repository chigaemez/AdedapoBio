import React from 'react'
import { TESTIMONIA } from '../constants'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonia = () => {
  var settings = {
    dots: false,
    fade: true,
    easing: 'ease-in-out', // Adjust transition easing as needed`
    type: 'linear',
    infinite: true,
    speed: 1000, // Adjust scrolling speed as needed
    autoplay: true,
    autoplaySpeed: 5000, // Adjust autoplay speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false // Hide arrows
  }

  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Testimonia</h2>

      <Slider {...settings} className='  flex items-center justify-center    '>
        {TESTIMONIA.map((tes, index) => (
          <div className='flex w-[80%] px-4  flex-col items-center justify-center bg-stone-700 py-4 ' key={index}>
           <div className="flex flex-col items-center justify-center">
           <div className="">
                <img src={tes.image} alt="" className=' rounded-br-3xl rounded-tl-3xl'  />
            </div>
             <div className='text-center w-[60%]'>
                <p className='text-2xl text-stone-300 font-bold tracking-tighter'>{tes.name}</p>
                <p className='text-xl text-stone-300 py-6'>{tes.role}</p>
                <p className=''>{tes.Text}</p>
             </div>
           </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Testimonia
