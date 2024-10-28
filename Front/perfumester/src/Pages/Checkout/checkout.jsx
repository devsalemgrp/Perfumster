import React from 'react'
import './style.css'
import Perfume8 from '../../Assets/Test_perfumes/perfume8.png'
import Footer1 from '../../Components/Footer1/footer1'

const Checkout = () => {
  const perfumes = [
    {
      name:'Tom Ford Neroli Porofino',
      price:123,
      image:Perfume8,
      quantity:1,
    },
    {
      name:'Tom Ford Neroli Porofino',
      price:123,
      image:Perfume8,
      quantity:1,
    }
  ]

  return (
    <>
      <div className='w-full bg-[#313131] text-white py-20 helvetica'>

        {/* Title */}
        <div className='w-4/5 mx-auto'>
          <h1 className='text-5xl richmond_display'>Checkout</h1>
        </div>

        <div className='w-4/5 mx-auto flex flex-col lg:flex-row gap-2 gap-y-10'>
          
          {/* Delivery Address and Payment */}
          <div className='flex-1 flex flex-col  gap-2 mt-10 helvetica'>
            <div className='flex-1'>
              <h1 className='text-3xl'>Delivery Address</h1>

              <form id='deliveryAddress' action="" className='flex flex-col gap-2 w-full mt-2'>
                <select className='bg-transparent'>
                  <option value="" className='text-white'>Select Country</option>
                  <option value="">option 1</option>
                  <option value="">option 2</option>
                  <option value="">option 3</option>
                </select>
                <input type="text" placeholder='Address' />
                <input type="text" placeholder='Apartment, suite, etc. (optional)' />

                <div className='flex flex-col xl:flex-row gap-2'>
                  <input type="text" placeholder='City' className='flex-1' />
                  <input type="text" placeholder='Postal Code' className='flex-1' />
                </div>
              </form>
            </div>

            <div className='flex-1 flex flex-col gap-2 '>
              <h1 className='text-3xl'>Payment</h1>
              <h1 className='bg-[#D9D9D9] p-3'>Credit Card</h1>

              <form id='payment' action="" className='flex flex-col gap-2 w-full '>
                
                <input type="text" placeholder='Credit card Number' />
                <input type="text" placeholder='Postal Code' className='flex-1' />
              </form>
            </div>
          </div>
          
          {/* My Cart  */}
          <div className='flex-1 border_2 p-2'>
            {perfumes.map((element,index)=>(
              <>
              <div className='flex flex-row justify-between'>
                <div className='flex-1 flex flex-row items-center gap-2'>
                  <img src={element.image} width={60} alt='' />
                  <div className='flex flex-col gap'>
                    <span>{element.name}</span>
                    <span className='opacity-70'>QTY : {element.quantity}</span>
                  </div>
                </div>

                <div className='flex flex-1 items-center justify-end'>
                  <span className='opacity-70'>$ {element.price}</span>
                </div>
              </div>
              <hr />
              </>
              
            ))}
          
              <div className='flex flex-row justify-between pt-5'>
                <div className='flex-1 flex flex-row items-center gap-2'>
                  <span className='text-2xl'>Total</span>
                </div>

                <div className='flex flex-1 items-center justify-end'>
                  <span>$ {perfumes.reduce((sum,item)=>sum+item.price,0)}</span>
                </div>
              </div>

              <div className='p-1 px-5 border cursor-pointer mt-12 w-1/2 text-center bg-white text-black float-right'>
                <span>Checkout</span>
              </div>
          </div>

        </div>

        
      </div>

      <Footer1/>
    </>
  )
}

export default Checkout