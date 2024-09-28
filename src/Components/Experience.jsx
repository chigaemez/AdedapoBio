import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='pb-4 '>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>

      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-[25%]'>
              <p className='mb-2 text-sm text-stone-400 '>{exp.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-[75%]'>
              <h3 className='mb-2 font-semibold'>{exp.company} - <span className='text-sm text-stone-500'>{exp.role}</span> </h3>
              <span className='text-sm text-stone-500 '>
                <ul className='flex flex-col my-4'>
                  {exp.description.map((dec, index) => (
                    <li key={index} className='list-disc'>
                      {dec}
                      {index < exp.description.length - 1 && ', '}
                    </li>
                  ))}
                </ul>
              </span>
              <div className=''>
                {exp.Skills.map((tech, index) => (
                  <span
                    className='mr-2  rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300'
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
