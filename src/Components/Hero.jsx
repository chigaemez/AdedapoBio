import React from 'react'
import { HeroBG } from '../assets/images'
import { HERO_CONTENT, HERO_CONTENT_EXTRA, SKILL } from '../constants'

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-[50%]'>
          <div className='flex items-center justify-center lg:p-8'>
            <img
              src={HeroBG}
              alt='Adedapo Ogun'
              className=' border border-stone-900 rounded-3xl'
            />
          </div>
        </div>{' '}
        <div className='w-full lg:w-[50%]'>
          <div className='flex flex-col items-center justify-center lg:items-start mt-10'>
            <h2 className=' pb-2 text-4xl tracking-tighter lg:text-8xl'>
              Adedapo Ogun
            </h2>
            <>
              {SKILL.map((skills, index) => (
                <ul key={index}>
                  <li className='bg-gradient-to-r  from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent'>
                    {skills.name}
                  </li>
                </ul>
              ))}
            </>

            <p
              className='my-2  max-w-3xl py-6 text-xl leading-relaxed tracking-tighter'
            >
              {HERO_CONTENT}
            </p>
            <p
              className='my-2  max-w-3xl py-6 text-xl leading-relaxed tracking-tighter'
            >
              {HERO_CONTENT_EXTRA}
            </p>

            <a
              href='/Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-full p-4 text-sm text-stone-800
            ml-10'
            >
              {' '}
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
