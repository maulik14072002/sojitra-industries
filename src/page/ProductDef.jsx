import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet-async';

const ProductDef = () => {
  const location = useLocation();
  const product = location.state;

  return (
    <Layout>

      {/* Dynamic SEO */}
      <Helmet>
        <title>{product.name} | Sojitra Industries - Precision Machined Components</title>

        <meta
          name="description"
          content={product.description.def.length > 150
            ? product.description.def.substring(0, 150) + "..."
            : product.description.def
          }
        />

        <meta
          name="keywords"
          content={`Sojitra Industries, ${product.name}, precision machined components, brass, stainless steel, aluminum`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={`${product.name} | Sojitra Industries`} />
        <meta
          property="og:description"
          content={product.description.def.length > 150
            ? product.description.def.substring(0, 150) + "..."
            : product.description.def
          }
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={product.img} />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <section className='productdef'>
        <Container fluid="md">
          <Row>
            <Col lg="12">
              <div className='productdef-left'>
                <img src={product.img} alt='' />
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
