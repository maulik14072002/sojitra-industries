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
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default memo(function Home() {

  const navigate = useNavigate();
  const goToContact = () => {
    navigate('/contact');
  };


  return (
    <Layout>

      {/* Page-level SEO */}
      <Helmet>
        {/* Title */}
        <title>Home | Sojitra Industries - Precision Machined Components Manufacturer</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Sojitra Industries is a leading manufacturer of precision machined components including brass, stainless steel, and aluminum parts. Explore our high-quality CNC-manufactured components for automotive, electrical, and industrial applications."
        />

        {/* Optional Keywords */}
        <meta
          name="keywords"
          content="Precision machined components, CNC manufacturing, brass components, stainless steel parts, aluminum components, Sojitra Industries"
        />

        {/* Open Graph / Social Tags */}
        <meta property="og:title" content="Home | Sojitra Industries" />
        <meta
          property="og:description"
          content="Leading manufacturer of precision machined components. Sojitra Industries delivers high-quality CNC brass, stainless steel, and aluminum parts for various industries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sojitraindustries.com/" />
        <meta property="og:image" content="https://www.sojitraindustries.com/images/home-og.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.sojitraindustries.com/" />
      </Helmet>

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
                    <img alt="" src='./img/home/hero/1.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/2.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/3.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/4.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/5.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/6.webp' />
                  </div>
                </Marquee>

                <Marquee direction="right" speed={20}>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/7.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/8.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/9.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/10.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/12.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/13.webp' />
                  </div>
                </Marquee>

                <Marquee speed={40}>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/14.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/15.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/16.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/17.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/18.webp' />
                  </div>
                  <div className='hero_img'>
                    <img alt="" src='./img/home/hero/19.webp' />
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
