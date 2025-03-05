import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever was born out of a passion for innovation and a desire to revolution Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis libero eos magni veniam sunt repudiandae beatae? Aliquam nostrum nemo, sit, libero commodi veniam animi accusamus vel, iusto eius dolorem blanditiis. :</p>
<p>Since our inception, we ve worked tirelessly to curate a diverse selection Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, quasi facilis. Incidunt qui at illo neque. Vitae, molestiae voluptatum at optio nulla blanditiis alias ipsa dolor dolorum adipisci nam neque? </p>
<b className='text-gray-800'>Our Mission</b>
<p>Our mission at Forever is to empower customers with choice, convenience, and</p>
        </div>
      </div>
 
      <div className='text-xl py-4'>
  <Title text1={'WHY'} text2={'CHOOSE US'} />
</div>

<div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance:</b>
    <p className='text-grey-600'>We meticulously select and vet each product to ensure it meets our stringent(</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience:</b>
    <p className='text-grey-600'>With our user-friendly interface and hassle-free ordering process, shopping ha</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service :</b>
    <p className='text-grey-600'>With our user-friendly interface and hassle-free ordering process, shopping ha</p>
  </div>
</div>

  <NewsletterBox/>
    </div>
  )
}

export default About