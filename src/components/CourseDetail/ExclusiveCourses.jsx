import React from 'react'
import offerings from "../../assets/Images/offerings.png"

const ExclusiveCourses = () => {
  return (
    <section className="w-full  bg-white py-10 md:pb-32 px-4 md:px-20 lg:-mt-[80px]">
             {/* Heading */}
              <h2 className="text-[36px] md:text-[44px] font-semibold text-[#3D3D3D] mb-6 leading-tight">
                 <span className="text-orange-400">Exclusive </span>Courses Offerings
              </h2>
          
            <div className='flex justify-center md:pt-10 lg:-mt-10'>
            <img src={offerings} alt="" />

            </div>
    
          
        </section>
  )
}

export default ExclusiveCourses