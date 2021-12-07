import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Product1 from "../../assets/images/product/product1.png";

const Cart = () => {
  return (
    <>
      <Container>
        <div className="section-title text-center mb-55">
          <h2>Product Cart List</h2>
        </div>

        <Row>
          <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="cart-product-img" src={Product1} alt="" />
                  </Col>

                  <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                    <h6> Quantity = 05 </h6>
                    <h6>Price = 05 x 100 = 5000$</h6>
                  </Col>

                  <Col md={3} lg={3} sm={12} xs={12}>
                    <input placeholder="2" className="form-control text-center" type="number" />
                    <Button className="btn btn-block w-100 mt-3  site-btn">
                      <i className="fa fa-trash-alt"></i> Remove{" "}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="cart-product-img" src={Product1} alt="" />
                  </Col>

                  <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                    <h6> Quantity = 05 </h6>
                    <h6>Price = 05 x 100 = 5000$</h6>
                  </Col>

                  <Col md={3} lg={3} sm={12} xs={12}>
                    <input placeholder="2" className="form-control text-center" type="number" />
                    <Button className="btn btn-block w-100 mt-3  site-btn">
                      <i className="fa fa-trash-alt"></i> Remove{" "}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="cart-product-img" src={Product1} alt="" />
                  </Col>

                  <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                    <h6> Quantity = 05 </h6>
                    <h6>Price = 05 x 100 = 5000$</h6>
                  </Col>

                  <Col md={3} lg={3} sm={12} xs={12}>
                    <input placeholder="2" className="form-control text-center" type="number" />
                    <Button className="btn btn-block w-100 mt-3  site-btn">
                      <i className="fa fa-trash-alt"></i> Remove{" "}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <img className="cart-product-img" src="https://rukminim1.flixcart.com/image/832/832/kri3xjk0/cases-covers/bumper-case/f/b/y/ps-63-pascunt-original-imag5a8bqgxsgkwh.jpeg?q=70" alt="sample" />
                  </Col>

                  <Col md={6} lg={6} sm={6} xs={6}>
                    <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                    <h6> Quantity = 05 </h6>
                    <h6>Price = 05 x 100 = 5000$</h6>
                  </Col>

                  <Col md={3} lg={3} sm={12} xs={12}>
                    <input placeholder="2" className="form-control text-center" type="number" />
                    <Button className="btn btn-block w-100 mt-3  site-btn">
                      <i className="fa fa-trash-alt"></i> Remove{" "}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
            <Card>
              <Card.Body>
                <Row className="justify-content-end">
                  <Col md={4} lg={4} sm={6} xs={6}>
                    <h5> Total Item = 05 </h5>
                    <h6>Total Price = 05 x 100 = 5000$</h6>
                    <Button className="btn btn-block w-100 mt-3  site-btn">
                      <i className="fa fa-shopping-cart"></i> Checkout{" "}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
