import { Link } from "react-router-dom";
import TestPerfume1 from '../Assets/Test_perfumes/perfume2.png'

const SpecialCard =({perfumeImage , backgroundImage })=>{
 
    return(
      <>
        <div className='w-full  relative mt-10 specials_card pb-5'>
          <div className='absolute top-4 left-0 w-full flex items-center justify-center'>
            <img src={perfumeImage} alt=""  className='-rotate-12 w-52 lg:w-56'/>
          </div>
          <img src={backgroundImage} alt=""  className='mx-auto w-full'/>
            <div className='w-full h-full pt-36 px-5 flex flex-col gap-5 items-center justify-center text-white ' >
              <h1 className="special_name text-3xl">
                Tom Ford
              </h1>
              <h2 className=' text-center text-sm'>
                100% Authentic Fragrance Samples 1
              </h2>
  
              <hr className='horizontal transparent w-1/2 mx-auto opacity-50'></hr>
  
              <h3 className='special_title font-bold'>
                Tobacco Vanille
              </h3>
              <p className='special_text text-sm font-thin'>
                Tom Ford reinvents classic tobacco with creamy tonka bean, vanilla, cocoa, dry fruit accords, and sweet wood sap – for a modern, opulent and heady impression of confidence and power.
              </p>
  
              <Link to={'/addToCart'}>
                <div className='border text-sm font-thin px-3 p-1 cursor-pointer'>
                  <span>Learn more</span>
                </div>
              </Link> 
            </div>
        </div>
      </>
  
    );
}

export default SpecialCard;