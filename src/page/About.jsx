import React from 'react'
import Layout from '../components/layout/Layout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Quality from '../components/RepeatedComponents/QualitySection/Quality'
import Material from '../components/RepeatedComponents/Material_section/Material'
import IndustriesSlider from '../components/RepeatedComponents/SliderView/IndustriesSlider'
import Founder from '../components/RepeatedComponents/FounderMsg/Founder'
import QualityControl from '../components/RepeatedComponents/QualityControl/QualityControl'

const About = () => {
  return (
    <Layout>
      <section className='about_section'>
        <Container fluid="md">
          <Row>
            <Col lg="12" md="12">
              <div className='text-center'>
                <h1>About</h1>
                <p>Providing from Brass, S.S, Mild Steel, Copper & any special material as per customer requirements <br />Our target is to provide zero defects products  to client which is remarkable in industry.</p>
                <Button className='contact-us-btn custom-btn mt-3'>Contact us</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='business_section'>
        <Container fluid="md">
          <Row>
            <Col lg="6" md="12">
              <div className='business_info'>
                <h2>Globally Trusted for Excellence in Metal Precision Components</h2>
                <p>With decades of industry experience and an unwavering commitment to total quality, Sojitra Industries has earned a strong reputation in the global brass components market. Our precision-engineered products cater to a wide range of sectors, including automotive, electrical, defense, plastic molding, construction, and other industrial applications.</p>
                <p className='mt-3'>From the beginning, our focus has been on continuous improvement—empowering our skilled workforce through ongoing training and investing in state-of-the-art CNC technology to drive innovation and efficiency. At Sojitra Industries, we strive to be a key player and a pioneer in the manufacturing and global supply of high-precision brass and metal-turned components.</p>
                <div className='founder_name mt-5'>
                  <h5>Mr. Maulik sojitra</h5>
                  <p>Founder, Sojitra Industires</p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12" className='mt-4 mt-mg-0'>
              <div className='company_img'></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='quality'>
        <Container fluid="md">
          <Quality />
        </Container>
      </section>

      <section className='qualyti_control'>
        <Container fluid="md">
          <QualityControl />
        </Container>
      </section>

      <section className='material_we_use'>
        <Container fluid="md">
          <Material />
        </Container>
      </section>

      <section className='founder_msg'>
        <Container fluid="md">
          <Founder />
        </Container>
      </section>

       <section className='industries'>
        <Container fluid="md">
          <IndustriesSlider />
        </Container>
      </section>

    </Layout>
  )
}

export default About
