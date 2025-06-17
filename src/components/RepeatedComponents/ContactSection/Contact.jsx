import React from 'react'

import "./Contact.css"
import { Button, Col, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className='contact_main'>
      <Row>
        <Col lg="8" md="7" sm="12">
            <div className='contact_intro'>
                <h2>Precision Manufacturing. Global Presence.</h2>
                <p>At Sojitra Industries, we combine advanced manufacturing techniques with strict quality control to deliver precision-engineered components.With a global footprint, we proudly serve clients across diverse industries and international markets.</p>
                <Button className='custom-btn mt-3'>Contact Us</Button>
            </div>
        </Col>
        <Col lg="4" md="5" sm="12" className='mt-5 mt-md-0'>
            <div className='contact_def'>
                <h5>Headquorter</h5>
                <p>JAMNAGAR, GUJARAT, INDIA</p>
            </div>
            <div className='contact_def mt-4'>
                <h5>Working Hours</h5>
                <p>SATURDAY TO THUSTDAY: 9AM TO 8PM</p>
                <p>FRIDAY: OFF</p>
            </div>
            <div className='contact_def mt-4'>
                <h5>Email</h5>
                <p>sales@sojitraindustries.com</p>
            </div>
            <div className='contact_def mt-4'>
                <h5>Contact phone</h5>
                <p>+91 72039 76604</p>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact
