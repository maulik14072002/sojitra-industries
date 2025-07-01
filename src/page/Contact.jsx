import React from 'react'
import Layout from '../components/layout/Layout'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLinkedinIn } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { Link } from 'react-router-dom'
import ContactSub from '../components/RepeatedComponents/ContactSection/Contact'
import { LiaDonateSolid } from 'react-icons/lia'
import { BiSupport } from 'react-icons/bi'
import { SlGraph } from 'react-icons/sl'

const Contact = () => {
  return (
    <Layout>
      <section className="map-hero">
        <div className='map-vision position-relative'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29507.871884208536!2d70.03373784057466!3d22.41080236952838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576b4b966b8989%3A0x774d31d43ec04075!2sGIDC%20Phase-2%2C%20Dared%2C%20Jamnagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1749980558350!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>

          <div className='contact_box position-absolute'>
            <Row>
              <Col lg="6" md="6">
                <div className='company_contact'>
                  <img src='/img/logo/sojitra-company.png' alt='' width="150px" />
                  <p className='mt-4'>Please feel free to contact us if you have any general questions regarding our components.</p>
                  <div className='on_social d-flex align-items-center gap-3 mt-4'>
                    {/* <Link href='' target="_blank"><ImFacebook /></Link> */}
                    <a href='https://www.linkedin.com/company/sojitraindustry/' target="_blank"><FaLinkedinIn /></a>
                  </div>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className='contact_def'>
                  <h4>CONTACT</h4>
                  <ul className='mt-4 ps-3'>
                    <li>Phae - 2, GIDC, Dared</li>
                    <li>Jamnagar - 361005, Gujarat</li>
                    <li>sales@sojitraindustries.com</li>
                    <li>+91 72039 76604</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className='contact'>
        <Container fluid="md">
          <ContactSub />
        </Container>
      </section>

      <section className='support'>
        <Container fluid="md">
          <Row className='justify-content-center'>
            <Col lg="4" md="6" sm="12">
              <div className='support_box text-center'>
                <span><LiaDonateSolid /></span>
                <h4 className='mt-2'>SALES INQUIRY</h4>
                <p className='mt-2'>For sales inquiries, contact us for product details and pricing. We're ready to assist with your component needs.</p>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className='mt-4 mt-md-0'>
              <div className='support_box text-center'>
                <span><BiSupport /></span>
                <h4 className='mt-2'>CUSTOMER SUPPORT</h4>
                <p className='mt-2'>Need help with your order or product? Our customer support team is here to assist you promptly.</p>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className='mt-4 mt-lg-0'>
              <div className='support_box text-center'>
                <span><SlGraph   /></span>
                <h4 className='mt-2'>REQUEST A QUOTE</h4>
                <p className='mt-2'>Looking for a custom solution? Request a quote today and get a competitive offer tailored to your needs.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


    </Layout>
  )
}

export default Contact
