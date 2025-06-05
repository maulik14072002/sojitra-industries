import React from 'react'

import './Founder.css'
import { IoIosQuote } from 'react-icons/io'

const Founder = () => {
  return (
    <div className='founder_msg text-center'>
        <h2>Message from the Founder</h2>
        <span><IoIosQuote /></span>
        <p>Over the years, Sojitra Industries has evolved into a trusted partner for high-precision metal components, proudly serving industries across the globe. Our success is built on a foundation of quality, commitment, and innovation. We believe that excellence is not just about delivering a product—it’s about delivering value, trust, and long-term relationships.</p>
        <div className='mt-5 founder_name'>
            <h5>Mr. Maulik Sojitra</h5>
            <p className='pt-0'>Founder, Sojitra Industires</p>
        </div>
    </div>
  )
}

export default Founder
