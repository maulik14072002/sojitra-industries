import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { IoFileTrayFullOutline } from 'react-icons/io5'

import "./Service.css"

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
    </div>
  )
}

export default Service
