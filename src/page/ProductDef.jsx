import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const ProductDef = () => {
  const location = useLocation();
  const product = location.state;

  return (
    <Layout>

      <section className='productdef'>
        <Container fluid="md">
          <Row>
            <Col lg="12">
              <div className='productdef-left'>
                <img src={product.img} />
                <div className='productdef_title mt-5 '>
                  <h2>{product.name}</h2>
                  <p>{product.description.def}</p>
                </div>
                <div className='productdef_table mt-4'>
                  <Table responsive="lg ">
                    <tbody>
                      {product.info.map((section, index) => (
                        <tr key={index}>
                          <td width={200} className='table_heading'>{section.name}</td>
                          <td className='table_def'>
                            <ul>
                              {section.info.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>

            {/* <Col lg="3" md="2">
              <div className='need_help'>
                <h2>Need help</h2>
              </div>
            </Col> */}

          </Row>
        </Container>
      </section>


    </Layout>
  );
}

export default ProductDef
