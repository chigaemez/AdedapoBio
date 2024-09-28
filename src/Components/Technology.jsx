import React from 'react'
import { SiMicrosoftexcel } from 'react-icons/si'
import { IoLogoTableau } from 'react-icons/io5'
import { FaRProject } from 'react-icons/fa'
import { SiMicrosoftsqlserver } from 'react-icons/si'
import { SiMicrosoftword } from 'react-icons/si'
import { FaDatabase } from "react-icons/fa6";
import { SiAmazonwebservices } from "react-icons/si";
import { SiAwslambda } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { Amazonwebservices, download, MySQL, Python, RLogo, Tableau } from '../assets/images'








const Technology = () => {
  return (
    <div className=' pb-24  '>
      <h1 className='my-20 text-center text-4xl'> Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <div>
          <SiMicrosoftexcel className='text-7xl text-green-600 ' />
        </div>
        <div className='p-4'>
          <SiMicrosoftword className='text-7xl text-cyan-700' />
        </div>

        <div className='p-4'>
          <img src={Tableau}  alt="" width={100} />
        </div>

        <div className='p-4'>
          <img src={download} width={80} alt="" />
        </div>

        <div className='p-4'>
          <img src={RLogo} width={90} alt="" />
        </div>
        <div className='p-4'>
          <FaDatabase className='text-7xl ' />
        </div>
        <div className='p-4'>
          <img src={Amazonwebservices} width={130} alt="" />
        </div>
        
        <div className='p-4'>
          <SiMicrosoftazure className='text-7xl text-blue-600' />
        </div>
        <div className='p-4'>
          <SiOracle className='text-7xl text-red-600' />
        </div>
        <div className='p-4'>
          <BiLogoPostgresql className='text-7xl text-blue-600' />
        </div>
        <div className='p-4'>
          <img src={MySQL} width={100} alt="" />
        </div>
        <div className='p-4'>
          <img src={Python} width={90} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Technology
