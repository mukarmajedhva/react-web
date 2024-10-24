import React from 'react'
import { Link } from 'react-router-dom';
import LATEST from '../assets/latest';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  RiShoppingCart2Line } from 'react-icons/ri';


const ReletedProduct = () => {
  return (
    <div>
        <h4 className='border-l-4 pl-2 border-secondary bold-20'>ReletedProduct</h4>

        {/* container */}
        <div className='max-w-full mx-auto'>
          <Swiper 
          breakpoints={{
            600 : 
            {
              slidesPerView:2,
              spaceBetween: 30,
            },
            1024 : {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200:{
              slidesPerView: 4,
              spaceBetween:30,
            },

          }}
          className='mt-5 h-[422px] sm:h-[277px]'
          >
            {LATEST.map((item, i)=>(
              <SwiperSlide key={i}>
                <Link onClick={window.scrollTo(0,0)} to={`/product/${item.id}`} className='bg-white gap-x-5 flexCenter 
                p-4 rounded-xl'>
                <img src={item.image} height={77} width={77} className='rounded-lg drop-shadow-xl'/>

                <div className='flex flex-col gap-y-1 '>
                <h4 className='line-clamp-1 edium-16'>{item.name}</h4>
                <p className='line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flexBetween'>
                  <div className='flexBetween gap-x-2 medium-6'>
                    <span>${item.new_price}.00</span>
                    <span className='line-through text-secondary'>${item.old_price}.00</span>
                  </div>
                  <RiShoppingCart2Line className='text-xl hover:text-secondary' />
                </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      
    </div>
  )
}

export default ReletedProduct
