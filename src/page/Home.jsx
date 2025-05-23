import React, { memo } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from '../components/layout/Layout'
import IndustriesSlider from '../components/RepeatedComponents/SliderView/IndustriesSlider'

export default memo(function Home() {
  return (
    <Layout>

      <section className='hero-section'>
        <Container fluid="md">
          <Row>
            <Col lg="12" md="12">
              <div className='text-start'>
                <h1>Leading Manufacturer of Precision <br />Machined Components</h1>
                {/* <p>Providing from Brass, S.S, Mild Steel, Copper & any special material as per customer requirements</p>
              <p>Our target is to provide zero defects products  to client which is remarkable in industry. </p> */}
                <p className='mt-2'>Our goal is maximum contribution to our customer’s growth  and to provide service to   their expectations.</p>
                <Button className='contact-us-btn custom-btn mt-3'>Contact us</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container fluid="md">

        <section className='my-5'>
          <IndustriesSlider />
        </section>

      </Container>

    </Layout>
  )
})
