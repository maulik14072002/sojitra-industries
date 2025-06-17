import React from 'react'
import Layout from '../components/layout/Layout'
import { Button, Col, Container, Row } from 'react-bootstrap'

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
                                <Button className='contact-us-btn custom-btn mt-3'>Contact us</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Quality
