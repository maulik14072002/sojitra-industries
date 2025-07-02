import React from 'react'
import Layout from '../components/layout/Layout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaArrowTrendUp } from 'react-icons/fa6'
import Demo from './Demo'

const Product = () => {
    return (
        <Layout>

            <section className='product_section'>
                <Container fluid="md">
                    <Row>
                        <Col lg="6">
                            <div>
                                <h1>A wide range of products used across multiple industries.</h1>
                                <p>Sojitra Industries offers a wide range of products trusted across multiple industrial sectors.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='products_min'>
                <Container fluid="md">
                    <div className='products_heading text-center'>
                        <h2>Types Of Products by Industry</h2>
                    </div>
                    <Row>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p1.webp' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'>
                                    <h5>Brass Automotive Components</h5>
                                    {/* <Button className='know_more'>Know more <FaArrowTrendUp /></Button> */}
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p2.jpg' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>CNC Turned Components</h5></div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p4.jpg' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>Brass Earthing Accessories</h5></div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p5.jpg' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>Brass Electrical Components</h5></div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p6.jpg' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>Brass Fittings</h5></div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p7.webp' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>Brass Forged Parts</h5></div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p3.webp' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>Brass Compression Parts</h5></div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p8.jpg' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>Brass Inserts</h5></div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p9.webp' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>Brass LPG & Gas Parts</h5></div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p10.jpg' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>Brass Turned Components</h5></div>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12" className='mt-4'>
                            <div className='product_card'>
                                <div className='product_img'><img al src='/img/product/p11.jpg' width="100%" height="100%" /></div>
                                <div className='px-3 py-2'><h5>Fasteners & Fixtures</h5></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container fluid="md">
                <Demo/>
            </Container>
        </Layout>
    )
}


export default Product
