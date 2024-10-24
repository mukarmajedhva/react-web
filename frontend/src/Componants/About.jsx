import React from 'react'
import { TbTruckReturn } from 'react-icons/tb'
import about from "../assets/about.png"

const About = () => {
  return (
    <section className='py-12 xl:py-32 max-padd-container  '>
      {/* container */}
      <div className='flex flex-col gap-16 xl:gap-8 xl:flex-row'>
        {/*leftbar  */}
        <div className='flex-1 '>
          <h3 className='h3 capitalize sm:pt-4'>Unveiling Our Product's Key Features!</h3>
          <p className='py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Deleniti cum blanditiis natus nemo sequi nam laudantium. Quidem recusandae 
            id consequuntur vel aspernatur, fugit sint, magni qui asperiores cupiditate 
            reprehenderit quibusdam.</p>
            <div className='flex flex-col gap-y-4 items-start'>
              {/*  */}
            <div className='gap-x-4 flexCenter '>
            <div className='h-16 min-w-16 rounded-md bg-secondary flexCenter '>
              <TbTruckReturn className='text-white text-2xl' />
            </div>  
            {/*  */}
            <div>
              <h4 className='medium-18'>Easy Return Process</h4>
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Officiis incidunt esse error!</p>
            </div>
            </div>
             {/* 1 */}
             <div className='gap-x-4 flexCenter '>
            <div className='h-16 min-w-16 rounded-md bg-secondary flexCenter '>
              <TbTruckReturn className='text-white text-2xl' />
            </div>  
            {/*  */}
            <div>
              <h4 className='medium-18'>Secure Payment Option</h4>
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Officiis incidunt esse error!</p>
            </div>
            </div>
            {/* 2 */}
            <div className='gap-x-4 flexCenter '>
            <div className='h-16 min-w-16 rounded-md bg-secondary flexCenter '>
              <TbTruckReturn className='text-white text-2xl' />
            </div>  
            {/*  */}
            <div>
              <h4 className='medium-18'>Live Customer Support</h4>
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Officiis incidunt esse error!</p>
            </div>
            </div>
            {/* 3 */}
            </div>

        </div>
        {/*  */}
        {/* rightbar */}
        <div className='flex-1 flexCenter'>
        <div>
          <img src={about} alt="" height={488} width={488} />
        </div> 
        </div>
      </div>
    </section>
  )
}

export default About
