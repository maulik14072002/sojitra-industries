import React, { memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default memo(function Footer() {
  return (
    <div className='footer'>
      <Container fluid="md">
        <Row className='justify-content-center'>
          <Col xl="3" lg="3" md="6" sm="12">
            <div className='footer_def'>
              <img src='/img/logo/sojitra-company.png' alt='sojitra industires' width="200px" />
              <p>Sojitra Industries delivers precision-engineered components worldwide, uniting advanced manufacturing with uncompromising quality.</p>
            </div>
          </Col>
          <Col xl="2" lg="3" md="6" sm="12" className='mt-4 mt-md-0'>
            <div className='footer_menu'>
              <h5>Useful resources</h5>
              <ul>
                <li><Link to={{ pathname: "/" }}>Home</Link></li>
                <li><Link to={{ pathname: "/about" }}>About</Link></li>
                <li><Link to={{ pathname: "/product" }}>Product</Link></li>
                <li><Link to={{ pathname: "/sustainability" }}>Sustainability</Link></li>
                <li><Link to={{ pathname: "/contact" }}>Contact</Link></li>
              </ul>
            </div>
          </Col>
          <Col xl="2" lg="3" md="6" sm="12" className='mt-4 mt-lg-0'>
            <div className='footer_menu'>
              <h5>Contact Us</h5>
              <p className='mt-3 mt-sm-4 footer_contact_text'>+91 7203976604</p>
              <p className='footer_contact_text mt-2'>sales@sojitraindustry.com</p>
            </div>
          </Col>
          <Col xl="2" lg="2" md="6" sm="12" className='mt-4 mt-lg-0'>
            <div className='footer_menu'>
              <h5>On Social</h5>
              <div className='on_social d-flex align-items-center gap-3 mt-3 mt-sm-4'>
                {/* <a href='https://www.facebook.com/share/1G7NiTWjzo/' target="_blank"><ImFacebook /></a> */}
                <a href='https://www.linkedin.com/company/sojitraindustry/' rel="noreferrer" target="_blank"><FaLinkedinIn /></a>
              </div>
            </div>
          </Col>
          <Col xl="3" lg="4" md="6" sm="12" className='mt-4 mt-xl-0'>
            <div className='our_promise'>
              <h5>Our Promise To You</h5>
              <ul>
                <li>24/7 customer support</li>
                <li>Safe verified methods</li>
                <li>Customized Products</li>
              </ul>
            </div>
          </Col>
        </Row>

      </Container>
      <div className='copyright mt-4 py-2'>
        <Container fluid="md">
          <p>
            Copyright © {new Date().getFullYear()} Sojitra Industries. All Rights Reserved.
          </p>
        </Container>
      </div>
    </div>
  )
})
