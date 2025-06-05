import React from 'react'

import './Process.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Process = () => {
    return (
        <div className='process_main'>
            <div className='process_img'>
                <div>
                    <h2>Delivering Reliable Industrial Solutions... <br /> When You Need Us, We’re Here.</h2>
                    <Button className='custom-btn mt-3 px-4 py-2'>Explore Products</Button>
                </div>
            </div>
            <div className='process_def'>
                <Container fluid="md">
                    <div className='process_def_title'>
                        <h2>PROCESS DETAILS</h2>
                        <p>We follow a simple and efficient 3-step process: Request, Quotation, and Development. <br />
                            From your initial inquiry to final production, we ensure clear communication and reliable results.</p>
                    </div>
                    <Row className='mt-4 justify-content-center'>
                        <Col lg="4" md="6" sm="12">
                            <div className='process_box'>
                                <span>1</span>
                                <h4>REQUEST</h4>
                                <p>Your project starts with a clear and simple request—just tell us what you need.</p>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4 mt-md-0'>
                            <div className='process_box'>
                                <span>2</span>
                                <h4>QUOTATION</h4>
                                <p>Based on your request, we provide a clear and competitive quotation.</p>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4 mt-lg-0'>
                            <div className='process_box'>
                                <span>3</span>
                                <h4>DEVELOPMENT</h4>
                                <p>Once approved, we begin precise and efficient development of your components.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Process
