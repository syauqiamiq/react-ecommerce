import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Collection = () => {
  return (
    <>
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55">
          <h2>PRODUCT COLLECTION</h2>
          <p>Beberapa Koleksi Eksklusif Kami, Yang Mungkin Anda Suka</p>
        </div>
        <Row>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center" src="https://rukminim1.flixcart.com/image/832/832/kri3xjk0/cases-covers/bumper-case/f/b/y/ps-63-pascunt-original-imag5a8bqgxsgkwh.jpeg?q=70" alt="sample" />
                <Card.Body>
                  <p className="product-name-on-card">Custom Case Free Design Murah</p>
                  <p className="product-price-on-card">Harga: 60.000</p>
                </Card.Body>
              </Card> 
          </Col>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center" src="https://rukminim1.flixcart.com/image/832/832/kri3xjk0/cases-covers/bumper-case/f/b/y/ps-63-pascunt-original-imag5a8bqgxsgkwh.jpeg?q=70" alt="sample" />
                <Card.Body>
                  <p className="product-name-on-card">Custom Case Free Design Murah</p>
                  <p className="product-price-on-card">Harga: 60.000</p>
                </Card.Body>
              </Card> 
          </Col>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center" src="https://rukminim1.flixcart.com/image/832/832/kri3xjk0/cases-covers/bumper-case/f/b/y/ps-63-pascunt-original-imag5a8bqgxsgkwh.jpeg?q=70" alt="sample" />
                <Card.Body>
                  <p className="product-name-on-card">Custom Case Free Design Murah</p>
                  <p className="product-price-on-card">Harga: 60.000</p>
                </Card.Body>
              </Card> 
          </Col>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center" src="https://rukminim1.flixcart.com/image/832/832/kri3xjk0/cases-covers/bumper-case/f/b/y/ps-63-pascunt-original-imag5a8bqgxsgkwh.jpeg?q=70" alt="sample" />
                <Card.Body>
                  <p className="product-name-on-card">Custom Case Free Design Murah</p>
                  <p className="product-price-on-card">Harga: 60.000</p>
                </Card.Body>
              </Card> 
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Collection
