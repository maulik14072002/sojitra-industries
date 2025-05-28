import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { IoFileTrayFullOutline } from 'react-icons/io5'

import "./Service.css"
import { LiaCoinsSolid, LiaTelegramPlane } from 'react-icons/lia'
import { BiStopwatch } from 'react-icons/bi'
import { RiTeamLine } from 'react-icons/ri'

const Service = () => {
  return (
    <div className='service_main'>
      <Row>
        <Col lg={8} md={12}>
          <h2>Trusted Authority in Machined Precision Parts</h2>
          <p>With a reputation for excellence and innovation, Sojitra Industries specializes in high-precision machined components made from ferrous and non-ferrous metals. Trusted by leaders in the electrical, electronics, automotive, and other industries, we are committed to quality, reliability, and engineering precision. Backed by advanced technology and skilled professionals, we deliver durable components that meet the highest performance standards.</p>
          <Button className='brochure-btn cos_btn mt-4 d-flex align-items-center gap-2'>
            <span><IoFileTrayFullOutline /></span>
            Download brochure
          </Button>
        </Col>
        <Col lg={4} md={12}>
          <div className='service_list mt-lg-0 mt-4'>
            <ul>
              <li>Full opariting system 24/7 active</li>
              <li>Based in Jamnagar, India</li>
              <li>More than 50 machines types</li>
              <li>Customized Products</li>
              <li>A Simple and Effective Transparent Pricing Structure</li>
              <li>The Dexterous Team of Professionals</li>
              <li>Special Price for Mass Production</li>
              <li>Stringent Quality Measures</li>
              <li>Tamper-Proof Packaging and On-Time Delivery</li>
              <li>Supporting Customer for Reverse Engineering</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className='mt-3 mt-md-5'>
        <Col lg={3} md={6} sm={12} className='border_cos'>
          <div className='service_4 d-flex align-items-start gap-3'>
            <span><LiaCoinsSolid /></span>
            <div>
              <h5>Good rates</h5>
              <p>The best market rates</p>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} className='border_cos mt-4 mt-md-0'>
          <div className='service_4 d-flex align-items-start gap-3'>
            <span><BiStopwatch /></span>
            <div>
              <h5>Fast mode</h5>
              <p>Every operation is fast</p>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} className='border_cos mt-4 mt-lg-0'>
          <div className='service_4 d-flex align-items-start gap-3'>
            <span><RiTeamLine /></span>
            <div>
              <h5>Team</h5>
              <p>Dedicated team expert</p>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} className='border_cos mt-4 mt-lg-0'>
          <div className='service_4 d-flex align-items-start gap-3'>
            <span><LiaTelegramPlane /></span>
            <div>
              <h5>Flexible</h5>
              <p>Customize your Product</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Service
