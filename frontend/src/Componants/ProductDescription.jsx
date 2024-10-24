import React from 'react'

const ProductDescription = () => {
  return (
    <div className='max-padd-container mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Description</button>
        <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>Care Guide</button>
        <button className='btn-dark-outline rounded-sm !text-xs !py-[6px] w-36'>size Guide</button>

      </div>
      <div className='flex flex-col pb-16'>
       <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Dignissimos aperiam porro eveniet veritatis beatae voluptas quis praesentium cumque 
        reiciendis quisquam nisi sed quos expedita rerum, at iure ducimus asperiores qui?</p>
        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
           vel, nihil, aperiam facilis quo eos repellendus impedit ipsam dolorem nesciunt rem 
           voluptates. Omnis excepturi laborum quis! Ipsam veritatis odio officiis.</p> 
      </div>
      
    </div>
  )
}

export default ProductDescription
