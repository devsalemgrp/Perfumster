import React from 'react'
import CreateAccountOffer from '../Assets/Auth/createAccountOffer.png'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'

const CreateAccount = ({isModalOpen,setIsModalOpen}) => {
    
    const closeModal= ()=>{
        setIsModalOpen(false);
    }
    
    return (
    <div className='w-full'>
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.4)', // Change background blur color to a darker shade
                zIndex:1000
                },
                content: {
                  padding: '0', // Remove the 20px padding
                  inset: '40px', // Keep other styles as needed
                  border: 'none', // Remove border for a cleaner look if desired
                  background: 'transparent', // Make it transparent if you want the background inside modal to be fully controlled by your own content
                }
              }}
            
            >
            <div className='w-full  flex flex-col lg:flex-row bg-black text-white'>
                <div className='flex-1 '>
                    <div className='w-full lg:w-4/5 flex flex-col gap-3 p-3  '>
                        <h1 className='text-lg md:text-5xl'>Create an account today</h1>
                        <h2>Sign up now to enjoy a more convenient and personalized shopping journey.</h2>
                        <ul className='flex flex-col w-full md:w-4/5 mx-auto list-disc'>
                            <li>Quick Checkout: Save your details for faster and easier checkouts.</li>
                            <li>Order Tracking: Keep tabs on your purchases and delivery status.</li>
                            <li>Wishlist: Save your favorite perfumes and revisit them anytime.</li>
                            <li>Exclusive Offers: Get early access to sales and special discounts.</li>
                        </ul>

                        <Link to={'/auth'}>
                            <div className='w-full md:w-1/2 bg-white text-black p-2 px-4 text-center mt-3 cursor-pointer ' onClick={()=>closeModal()}>
                                <span>Create Account</span>
                            </div>
                        </Link>
                        
                    </div>
                </div>
                <div className='flex-1 max-h-full relative'>
                    <div className='hidden md:absolute top-1 right-3 cursor-pointer' onClick={()=>setIsModalOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                            <path d="M14.6664 41.9559L13.0439 40.3334L25.8773 27.5L13.0439 14.6667L14.6664 13.0442L27.4998 25.8775L40.3331 13.0442L41.9556 14.6667L29.1223 27.5L41.9556 40.3334L40.3331 41.9559L27.4998 29.1225L14.6664 41.9559Z" fill="black" style={{fill:'black',fillOpacity:1}}/>
                        </svg>
                    </div>
                    <img src={CreateAccountOffer} alt=""  />
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CreateAccount