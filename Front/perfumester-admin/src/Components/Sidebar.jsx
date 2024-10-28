import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-full h-full bg-[#382626] max-h-max'>
        <div className='w-full flex flex-col py-5 px-5 gap-5'>
            <div className='flex flex-col items-center justify-center pl-3'>
                <h1 className='text-2xl richmond_display'>PERFUMSTER</h1>
                <h4 className=''>Decanted Perfumes</h4>
            </div>


            <div className='w-full flex flex-col gap-2 items-start justify-center font-bold'>
                <Link to='/' className='w-full'>
                    <div className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Dashboard</div>
                </Link>
                <Link to='/home' className='w-full'>
                    <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Home Page</h1>
                </Link>
                <Link to='/men' className='w-full'>
                    <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Men Page</h1>
                </Link>
                <Link to='/women' className='w-full'>
                    <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Women Page</h1>
                </Link>
                <Link to='/new' className='w-full'>
                    <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>New Page</h1>
                </Link>
                <Link to='/orders' className='w-full'>
                    <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Orders List</h1>
                </Link>
                <Link to='/stock' className='w-full'>
                    <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Products Stock</h1>
                </Link>
            </div>

            
            <hr />

            <div className='flex flex-col gap-7 items-start justify-center font-bold'>
                <h1 className='py-2 pl-3 opacity-60'>Packages</h1>
                
                <div className='w-full flex flex-col items-start justify-center gap-2'>
                    <Link to='/packages' className='w-full'>
                        <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Package details</h1>
                    </Link>
                    <Link to='/subscriptions' className='w-full'>
                        <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Manage subscriptions</h1>
                    </Link>
                </div>
            </div>

            <hr />

            <div className='flex flex-col gap-2 items-start justify-center font-bold'>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md cursor-pointer'>Settings</h1>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md cursor-pointer'>Logout</h1>
            </div>
        </div>
    </div>
  )
}

export default Sidebar