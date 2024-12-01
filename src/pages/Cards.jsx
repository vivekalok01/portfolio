import React from 'react'

const Cards = () => {
  return (
    <div className='flex flex-col gap-3'>


      <div className=' cardCss'>

        {/* <img src="profile.jpg" className='cardImageCss' alt="" /> */}
        <video src="vid.mp4" className='cardImageCss' loop preload='true' autoPlay ></video>
        <div className='secondCardCss'>
          <h2 className=''>ECommerce Website</h2>
          <a href='' target='_blank' className='text-blue-600'>Visit Site</a>
        </div>
      </div>
      <div className=' cardCss'>

        {/* <img src="profile.jpg" className='cardImageCss' alt="" /> */}
        <video src="vid2.mp4" className='cardImageCss' loop preload='true' autoPlay ></video>
        <div className='secondCardCss'>
          <h2 className=''>Bike Rent</h2>
          <a href='' target='_blank' className='text-blue-600'>Visit Site</a>
        </div>
      </div>
      <div className=' cardCss'>

        {/* <img src="profile.jpg" className='cardImageCss' alt="" /> */}
        <video src="vid.mp4" className='cardImageCss' loop preload='true' autoPlay ></video>
        <div className='secondCardCss'>
          <h2 className=''>Bike Rent</h2>
          <a href='' target='_blank' className='text-blue-600'>Visit Site</a>
        </div>
      </div>
    </div>
  )
}

export default Cards
