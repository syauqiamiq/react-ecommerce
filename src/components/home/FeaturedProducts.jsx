import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <>
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55">
          <h2>FEATURED PRODUCT</h2>
          <p>Beberapa Koleksi Kami, Yang Mungkin Anda Suka</p>
        </div>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((res, index) => (
            <Col xl={2} lg={2} sm={4} md={2} xs={6} className="p-1" key={index}>
              <Link to="/productdetails" className="Link">
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/832/832/kri3xjk0/cases-covers/bumper-case/f/b/y/ps-63-pascunt-original-imag5a8bqgxsgkwh.jpeg?q=70" alt="sample" />
                  <Card.Body>
                    <p className="product-name-on-card">Custom Case Free Design Murah</p>
                    <p className="product-price-on-card">Harga: 60.000</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FeaturedProducts;
