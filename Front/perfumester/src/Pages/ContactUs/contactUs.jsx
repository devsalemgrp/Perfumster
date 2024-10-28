import React from 'react'
import './style.css'
import Background from '../../Assets/ContactUs/Background.png'

const ContactUs = () => {
  return (
    <div className='bg-[#313131] w-full text-white'>
      <div className='w-4/5 mx-auto flex flex-col md:flex-row items-center gap-2 py-20'>
        <div className='flex-1 '>
          <h1 className='text-4xl tracking-wide richmond_display'>Perfumster can Help</h1>
          <h6 className='text-lg opacity-70'>Talk to us</h6>

          <form action="" className='mt-20 flex flex-col gap-10'>
            <div className='flex flex-row gap-2 border-b-2'>
              <label htmlFor="" className='opacity-70'>Name</label>
              <input type="text" className='flex-1 bg-transparent ' />
            </div>

            <div className='flex flex-row gap-2 border-b-2'>
              <label htmlFor="" className='opacity-70'>Email</label>
              <input type="text" className='flex-1 bg-transparent'  />
            </div>

            <div className='flex flex-row gap-2'>
              <textarea type="text" placeholder='Message' rows={10} className='flex-1 bg-transparent border'/>
            </div>
          </form>
        </div>

        <div className='flex-1'>
          <img src={Background} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ContactUs