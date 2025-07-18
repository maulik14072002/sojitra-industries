import React from 'react'
import Layout from '../components/layout/Layout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import QualityControl from '../components/RepeatedComponents/QualityControl/QualityControl'
import IndustriesSlider from '../components/RepeatedComponents/SliderView/IndustriesSlider'
import CustomerSupport from '../components/RepeatedComponents/CustomerSupport/CustomerSupport'
import { Outlet, useNavigate } from 'react-router-dom'
import data from '../data/Product.json'

const Product = () => {

    const navigate = useNavigate();
    const goToNotFound = (item) => {
        navigate('/product/description', { state: item });
    };


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
                    <Row className='justify-content-center'>
                        {
                            data.map((i) =>
                                <Col lg="4" md="6" sm="12" className='mt-4'>
                                    <div className='product_card p-3'>
                                        <div className='mb-4'>
                                            <h5>{i.name}</h5>
                                            <p className='two-line-ellipsis'>{i.description.def}</p>
                                        </div>
                                        <div className='product_img'><img alt='' src={i.img} width="100%" height="100%" /></div>
                                        <Button className='know_more mt-3' onClick={() => goToNotFound(i)}>View Product</Button>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>
                    <Outlet />
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


export default Product
