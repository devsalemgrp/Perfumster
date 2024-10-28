import React from 'react'
import './style.css'
import { useState } from 'react'
import Background from '../../Assets/Auth/background.png'
import Google from '../../Assets/Auth/google.svg'
import Facebook from '../../Assets/Auth/facebook.svg'

const Auth = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  return (

    <div className='w-full bg-[#313131] text-white py-20 helvetica'>
      {isSignUp && (
        <div className='w-4/5 mx-auto flex flex-col lg:flex-row gap-9 '>
          <div className='flex-1 flex flex-col gap-3 '>
            <div className='flex flex-col gap-1'>
              <h1 className='text-2xl md:text-4xl richmond_display '>Create Account</h1>
              <h2 className='opacity-60'>Lets get started with your account</h2>
            </div>
            
            <form action="" className='flex flex-col gap-3'>
              <div className="flex flex-col  md:flex-row gap-2">
                <div className="flex-1 flex flex-col gap-2">
                  <label className='opacity-60'>Name</label>
                  <input type="text" className='p-1 py-2 rounded-md text-black outline-none opacity-60' placeholder='What is Your name' />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className='opacity-60'>Email</label>
                  <input type="text" className='p-1 py-2 rounded-md text-black outline-none opacity-60' placeholder='What is Your email' />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex flex-col gap-2">
                  <label className='opacity-60'>Password</label>
                  <input type="text" className='p-1 py-2 rounded-md text-black outline-none opacity-60' placeholder='Create Your Password' />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className='opacity-60'>Repeat Password</label>
                  <input type="text" className='p-1 py-2 rounded-md text-black outline-none opacity-60' placeholder='Repeat Password' />
                </div>
              </div>

              <div className='flex flex-col  md:flex-row justify-between w-full gap-y-7'>
                <div className='flex flex-row gap-2 items-center'>
                  <input type="checkbox"  />
                  <label htmlFor="">You accept terms of use</label>
                </div>

                <div className='bg-black text-white p-2 px-4 rounded-md text-center'>
                  <span>Create Account</span>
                </div>
                
              </div>
            </form>

            <div className='bg-slate-300 rounded-md p-4'>
              <h1>Sign up using Social Media</h1>

              <div className='flex flex-row gap-2 mt-3'>
                <div className='rounded-full bg-slate-400 p-3'>
                  <img src={Google} alt="" width={30} />
                </div>

                <div className='rounded-full bg-slate-400 p-3'>
                  <img src={Facebook} alt="" width={30} />
                </div>
              </div>
            </div>

            <div>
              <h1>Already have an account ? <span className='underline font-bold cursor-pointer' onClick={()=>setIsSignUp(false)}>Login</span></h1>
            </div>
          </div>

          <div className="flex-1 ">

            {/* Background Image */}
            <img src={Background} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {!isSignUp && (
        <div className='w-4/5 mx-auto flex flex-col lg:flex-row gap-9 '>
        <div className='flex-1 flex flex-col gap-3 '>
          <div className='flex flex-col gap-1'>
            <h1 className='text-2xl md:text-4xl richmond_display'>Sign in to your account</h1>
            <h2 className='opacity-60'>Continue where you left off</h2>
          </div>
          
          <form action="" className='flex flex-col gap-3'>
            <div className="flex flex-col gap-2 w-full md:w-2/3">
              <label className='opacity-60'>Email</label>
              <input type="text" className='p-1 py-2 rounded-md text-black outline-none opacity-60' placeholder='What is Your email' />
            </div>
            
              <div className="flex flex-col gap-2 w-full md:w-2/3">
                <label className='opacity-60'>Password</label>
                <input type="text" className='p-1 py-2 rounded-md text-black outline-none opacity-60' placeholder='Enter Your Password' />
              </div>

              <div className='w-2/3 md:w-1/4 bg-black text-white p-2 px-4 rounded-md text-center'>
                <span>Sign In</span>
              </div>
          </form>

          <div className='bg-slate-300 rounded-md p-4'>
            <h1>Sign up using Social Media</h1>

            <div className='flex flex-row gap-2 mt-3'>
              <div className='rounded-full bg-slate-400 p-3'>
                <img src={Google} alt="" width={30} />
              </div>

              <div className='rounded-full bg-slate-400 p-3'>
                <img src={Facebook} alt="" width={30} />
              </div>
            </div>
          </div>

          <div>
            <h1>Don't have an account ? <span className='underline font-bold cursor-pointer' onClick={()=>setIsSignUp(true)}>Create Account</span></h1>
          </div>
        </div>

        <div className="flex-1 ">

          {/* Background Image */}
          <img src={Background} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      )}
    </div>
    
  )
}

export default Auth