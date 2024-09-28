import React from 'react'
import { EDUCATION } from '../constants'

const Education = () => {
  return (
    <div className='pb-4 '>
      <h2 className='my-20 text-center text-4xl'>Education</h2>

      <div>
        {EDUCATION.map((edu, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-[25%]'>
              <p className='mb-2 text-sm text-stone-400 '>{edu.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-[75%]'>
              <h3 className='mb-2 font-semibold'>
                {edu.name} -{' '}
                <span className='text-sm text-stone-500 '>{edu.Skills}</span>
              </h3>
              <p className='mb-4 text-stone-400'>{edu.Certificate}</p>
          
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
