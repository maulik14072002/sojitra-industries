import React, { memo } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Marquee from "react-fast-marquee";

import Layout from '../components/layout/Layout'
import IndustriesSlider from '../components/RepeatedComponents/SliderView/IndustriesSlider'
import Service from '../components/RepeatedComponents/ServiceSection/Service'
import Relation from '../components/RepeatedComponents/RelationSection/Relation'
import Quality from '../components/RepeatedComponents/QualitySection/Quality'
import Scale from '../components/RepeatedComponents/ScaleSection/Scale'
import Process from '../components/RepeatedComponents/ProcessSection/Process'
import Contact from '../components/RepeatedComponents/ContactSection/Contact'
import QualityControl from '../components/RepeatedComponents/QualityControl/QualityControl';
import CustomerSupport from '../components/RepeatedComponents/CustomerSupport/CustomerSupport';
import { Navigate, useNavigate } from 'react-router-dom';

export default memo(function Home() {

  const navigate = useNavigate();
  const goToContact = () => {
    navigate('/contact');
  };
  

  return (
    <Layout>

      <section className='hero-section'>
        <Container fluid="md">
          <Row className='align-items-center'>
            <Col lg="6" md="12">
              <div className='text-start'>
                <h1>Leading Manufacturer of Precision Machined Components</h1>
                <p className='mt-2'>Our goal is maximum contribution to our customer’s growth  and to provide service to   their expectations.</p>
                <Button className='contact-us-btn custom-btn mt-3' onClick={goToContact}>Contact us</Button>
              </div>
            </Col>
            <Col lg="6" md="12" className='mt-5 mt-lg-0'>
              <div className='shadow-cos position-relative'>
                <Marquee speed={25}>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/1.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/2.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/3.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/4.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/5.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/6.jpg' />
                  </div>
                </Marquee>

                <Marquee direction="right" speed={20}>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/7.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/8.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/9.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/10.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/12.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/13.jpg' />
                  </div>
                </Marquee>

                <Marquee speed={40}>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/14.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/15.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/16.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/17.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/18.jpg' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/19.jpg' />
                  </div>
                </Marquee>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='industries'>
        <Container fluid="md">
          <IndustriesSlider />
        </Container>
      </section>

      <section className='service'>
        <Container fluid="md">
          <Service />
        </Container>
      </section>

      <section className='relation'>
        <Relation />
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

      <section className='scale'>
        <Container fluid="md">
          <Scale />
        </Container>
      </section>

      <section className='process'>
        <Process />
      </section>

      <section className='contact'>
        <Container fluid="md">
          <Contact />
        </Container>
      </section>

      <section className='customer_support'>
        <Container fluid="md">
          <CustomerSupport />
        </Container>
      </section>

    </Layout >
  )
})
