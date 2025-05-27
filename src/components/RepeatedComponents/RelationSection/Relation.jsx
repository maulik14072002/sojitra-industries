import React from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'
import { FcAbout } from 'react-icons/fc'
import './Relation.css'

const Relation = () => {
    return (
        <>
            <div className='relation_main position-relative w-100 h-100'>
                <div className='relation_box'>
                    <div>
                        <h2>WE BUILD STRONG RELATIONSHIPS WITH OUR CLIENTS</h2>
                        <p>At Sojitra Industries, we believe that strong client relationships are the foundation of sustainable success. We don’t just deliver precision-engineered components — we deliver trust, consistency, and partnership. By understanding our clients’ unique needs and maintaining open, honest communication, we ensure long-term collaboration and mutual growth. </p>
                        {/* Our commitment to quality, reliability, and responsiveness has earned us the confidence of industry leaders across electrical, electronics, automotive, and other sectors. We’re not just suppliers — we’re partners in progress. */}
                        <Button className='cos_btn mt-4 d-flex align-items-center gap-2'>
                            <span><FcAbout /></span>
                            About us
                        </Button>
                    </div>
                </div>
            </div>

            <div className='relation-view'>
                <Container fluid="md">
                    <Row>
                        <Col lg={6} md={12}>
                            <div className='bg-worker'></div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className='relation_box'>
                                <div className='py-4'>
                                    <h2>WE BUILD STRONG RELATIONSHIPS WITH OUR CLIENTS</h2>
                                    <p>At Sojitra Industries, we believe that strong client relationships are the foundation of sustainable success. We don’t just deliver precision-engineered components — we deliver trust, consistency, and partnership. By understanding our clients’ unique needs and maintaining open, honest communication, we ensure long-term collaboration and mutual growth. </p>
                                    {/* Our commitment to quality, reliability, and responsiveness has earned us the confidence of industry leaders across electrical, electronics, automotive, and other sectors. We’re not just suppliers — we’re partners in progress. */}
                                    <Button className='cos_btn mt-4 d-flex align-items-center gap-2'>
                                        <span><FcAbout /></span>
                                        About us
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Relation
