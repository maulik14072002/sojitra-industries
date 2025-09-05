import React from 'react'
import Layout from '../components/layout/Layout'
import { Col, Container, Row } from 'react-bootstrap'
import { MdStarPurple500 } from 'react-icons/md'
import { GrChatOption } from 'react-icons/gr'
import { AiOutlineSafety } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { RxValue } from 'react-icons/rx'
import Contact from '../components/RepeatedComponents/ContactSection/Contact'
import CustomerSupport from '../components/RepeatedComponents/CustomerSupport/CustomerSupport'
import { Helmet } from 'react-helmet-async'

const Sustainability = () => {
    return (
        <Layout>

            {/* Page-level SEO */}
            <Helmet>
                {/* Title */}
                <title>Sustainability | Sojitra Industries - Responsible Manufacturing</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Learn how Sojitra Industries integrates sustainability, ethical practices, and responsible governance in precision component manufacturing to reduce environmental impact and support global communities."
                />

                {/* Meta Keywords (optional) */}
                <meta
                    name="keywords"
                    content="Sustainability, Responsible Manufacturing, Ethical Practices, Environmental Impact, Sojitra Industries, CNC Components, Precision Machining"
                />

                {/* Open Graph / Social Tags */}
                <meta property="og:title" content="Sustainability | Sojitra Industries" />
                <meta
                    property="og:description"
                    content="Sojitra Industries is committed to sustainability, social responsibility, and governance, ensuring environmentally-friendly and ethical manufacturing practices."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sojitraindustries.com/sustainability" />
                <meta property="og:image" content="https://www.sojitraindustries.com/images/sustainability-og.jpg" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.sojitraindustries.com/sustainability" />
            </Helmet>

            <section className='sustainability_section'>
                <Container fluid="md">
                    <Row>
                        <Col lg="12" md="12">
                            <div className=''>
                                <h1>Sustainability</h1>
                                <p>Sojitra Industries' core values guide our daily decisions, enabling us to deliver sustainable solutions for our global community.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='impacts'>
                <Container fluid="md">
                    <Row className='juatify-content-center'>
                        <Col lg='4' md="6" sm="12" >
                            <div className='impact_box'>
                                <h4>Environmental Impact</h4>
                                <p>At Sojitra Industries, we are committed to delivering smart, reliable solutions to our customers. Our precision-engineered products are designed to enhance operational efficiency while supporting sustainability goals. Through a streamlined manufacturing strategy, we actively eliminate waste and minimize environmental impact.</p>
                            </div>
                        </Col>
                        <Col lg='4' md="6" sm="12" className='mt-4 mt-md-0'>
                            <div className='impact_box'>
                                <h4>Social Responsibility</h4>
                                <p>At Sojitra Industries, we pursue growth by continually improving and expanding our high-quality product offerings. We are dedicated to exceeding customer expectations, conducting our business with integrity, and fostering a culture of care and respect for our team members.</p>
                            </div>
                        </Col>
                        <Col lg='4' md="6" sm="12" className='mt-4 mt-lg-0'>
                            <div className='impact_box'>
                                <h4>Governance</h4>
                                <p>At Sojitra Industries, we are committed to excellence in every aspect of our business. Integrity is a foundational pillar of our identity. We adhere strictly to all international and local laws and regulations in every country where we operate.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='global'>
                <Container fluid="md">
                    <div className='global_title'>
                        <h2>Global Responsibility</h2>
                        <p>As a global company, Sojitra Industries understands that our actions today shape the world for generations to come. With this profound awareness, our core values integrate sustainability, ethical practices, and responsible governance into the foundation of our innovation, operations, and customer service.</p>
                    </div>

                    <Row className='justify-content-center'>
                        <Col lg="3" md="3" sm="3" className="mt-4">
                            <div className='global_icon'>
                                <span><MdStarPurple500 /></span>
                                <h5>Excellence</h5>
                                <p>"We will be excellent in all we do and how we do it."</p>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="3" className="mt-4">
                            <div className='global_icon'>
                                <span><GrChatOption /></span>
                                <h5>Customer Focus</h5>
                                <p>"We know our customers’ success is essential to our success."</p>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="3" className="mt-4">
                            <div className='global_icon'>
                                <span><AiOutlineSafety /></span>
                                <h5>Safety</h5>
                                <p>"We strive to create a safe work place and protect the environment."</p>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="3" className="mt-4">
                            <div className='global_icon'>
                                <span><CgProfile /></span>
                                <h5>Integrity</h5>
                                <p>"We do the right thing even if it costs us."</p>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="3" className="mt-4">
                            <div className='global_icon'>
                                <span><RiLightbulbFlashLine /></span>
                                <h5>Innovation</h5>
                                <p>“We love good ideas.”</p>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="3" className="mt-4">
                            <div className='global_icon'>
                                <span><RxValue /></span>
                                <h5>Valuing Employees</h5>
                                <p>“We care for each other.”</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
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

        </Layout>
    )
}

export default Sustainability
