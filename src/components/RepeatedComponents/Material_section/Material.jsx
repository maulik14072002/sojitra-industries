import React from 'react'
import { Col, Row } from 'react-bootstrap'

import "./Material.css"

const Material = () => {
    return (
        <div>
            <div className='material_title'>
                <h2>Materials We Work With</h2>
                <p>We work with copper, brass, stainless steel, aluminium, and many other specialized metals and alloys based on customer requirements and application needs.</p>
            </div>
            <Row className='mt-4'>
                <Col lg="3" md="6" sm="12">
                    <div className='material_box'>
                        <img src='./img/about/brass.jpg' width="100%" height="180px" alt='materials' />
                        <div className='px-3 py-2'>
                            <h5>Brass</h5>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="6" sm="12" className='mt-4 mt-md-0'>
                    <div className='material_box'>
                        <img src='./img/about/copper.jpeg' width="100%" height="180px" alt='materials' />
                        <div className='px-3 py-2'>
                            <h5>Copper</h5>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="6" sm="12" className='mt-4 mt-lg-0'>
                    <div className='material_box'>
                        <img src='./img/about/ss.jpg' width="100%" height="180px" alt='materials' />
                        <div className='px-3 py-2'>
                            <h5>Stainless Steel</h5>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="6" sm="12" className='mt-4 mt-lg-0'>
                    <div className='material_box'>
                        <img src='./img/about/aluminium.jpg' width="100%" height="180px" alt='materials' />
                        <div className='px-3 py-2'>
                            <h5>Aluminium</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Material
