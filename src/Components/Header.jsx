import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Header = () => {
  return (
    <div className='flex items-center justify-between py-6 z-40'>
			<div className='flex flex-shrink-0 items-center'>
				<a href='/' aria-label='Home' className="text-4xl font-bold relative">
                    AO
				</a>
			</div>
			<div className=' flex items-center justify-center gap-10 text-2xl'>
				<ul className='gap-5 flex flex-row py-4 z-[99]'>
				
					<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500'>
						<a href='https://github.com/AdetheAnalyst' target='_blank'>
							<FaGithub />
						</a>
					</li>
					<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500 '>
						<a href='https://www.linkedin.com/in/adedapo-ogun/' target='_blank'>
							<FaLinkedin/>
						</a>
					</li>
				</ul>
				
			</div>
		</div>
  )
}

export default Header