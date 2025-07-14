import React from 'react'
import Layout from '../components/layout/Layout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import QualitySection from '../components/RepeatedComponents/QualitySection/Quality'
import IndustriesSlider from '../components/RepeatedComponents/SliderView/IndustriesSlider'
import QualityControl from '../components/RepeatedComponents/QualityControl/QualityControl'
import CustomerSupport from '../components/RepeatedComponents/CustomerSupport/CustomerSupport'

const Quality = () => {
    return (
        <Layout>
            <section className='quality_section'>
                <Container fluid="md">
                    <Row>
                        <Col lg="12" md="12">
                            <div className='text-center'>
                                <h1>Quality</h1>
                                <p>Quality is at the core of everything we do at Sojitra Industries. From raw material selection to final inspection, every step is guided by strict quality control to ensure unmatched reliability and performance.</p>
                                {/* <Button className='contact-us-btn custom-btn mt-3'>Contact us</Button> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='quality_assurance'>
                <Container fluid="md">
                    <Row>
                        <Col lg="6" md="12">
                            <div className='quality-assurance'></div>
                        </Col>
                        <Col lg="6" md="12" className='mt-4 mt-lg-0'>
                            <div className='quality_assurance_def'>
                                <h2>Crafting Quality, Delivering Trust</h2>
                                <p>At Sojitra Industries, quality isn’t just a standard — it’s our foundation. From raw material to final dispatch, every step is guided by meticulous attention to detail, ensuring precision-engineered components that meet the highest expectations of global industries.</p>
                                <p className='mt-3'>Our stringent quality control processes set us apart as an industry leader, and our ISO 9001:2025 certified Quality Management System stands as a testament to our unwavering commitment to excellence.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='quality_tools'>
                <Container fluid="md">
                    <Row className='align-items-center'>
                        <Col lg="3" md="6" sm="12"><img alt='' src='./img/quality/q1.jpg' width="100%" /></Col>
                        <Col lg="9" md="6" sm="12" className='mt-4 mt-md-0'>
                            <div className='tools_info'>
                                <h2>Profile Projector</h2>
                                <p>we utilize high-precision Profile Projectors to inspect critical dimensions and geometries of components. This non-contact measurement tool enables us to detect minute deviations, ensuring every part meets exact specifications and maintains consistent quality.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='align-items-center mt-5'>
                        <Col lg="9" md="6" sm="12" className='order-md-1 order-2 mt-4 mt-md-0'>
                            <div className='tools_info'>
                                <h2>Hard Tester</h2>
                                <p>To ensure durability and material integrity, Sojitra Industries employs advanced Hardness Testers for accurate measurement of metal hardness. This crucial quality control step verifies that each component meets the required strength standards, enhancing reliability in real-world applications.</p>
                            </div>
                        </Col>
                        <Col lg="3" md="6" sm="12" className='order-md-2 order-1'><img alt='' src='./img/quality/q2.jpg' width="100%" /></Col>
                    </Row>

                    <Row className='align-items-center mt-5'>
                        <Col lg="3" md="6" sm="12"><img alt='' src='./img/quality/q3.webp' width="100%" /></Col>
                        <Col lg="9" md="6" sm="12" className='mt-4 mt-md-0'>
                            <div className='tools_info'>
                                <h2>outside micrometer</h2>
                                <p>Sojitra Industries relies on precision-grade Outside Micrometers to measure external dimensions with exceptional accuracy. These instruments are essential in our quality assurance process, ensuring every component meets tight tolerance requirements and maintains dimensional integrity.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='align-items-center mt-5'>
                        <Col lg="9" md="6" sm="12" className='order-md-1 order-2 mt-4 mt-md-0'>
                            <div className='tools_info'>
                                <h2>calipers</h2>
                                <p>we use high-precision Vernier and Digital Calipers to measure internal, external, and depth dimensions of components with accuracy. These versatile tools play a key role in our inspection process, helping maintain consistent quality and tight tolerances across every part we manufacture.</p>
                            </div>
                        </Col>
                        <Col lg="3" md="6" sm="12" className='order-md-2 order-1'><img alt='' src='./img/quality/q4.jpg' width="100%" /></Col>
                    </Row>
                </Container>
            </section>

            <section className='quality'>
                <Container fluid="md">
                    <QualitySection />
                </Container>
            </section>

            <section className='qualyti_control'>
                <Container fluid="md">
                    <QualityControl />
                </Container>
            </section>

            <section className='industries'>
                <Container fluid="md">
                    <IndustriesSlider />
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

export default Quality
