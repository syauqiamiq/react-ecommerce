import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png";

const UserLogin = () => {
  return (
    <>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-5" lg={12} md={12} sm={12} xs={12}>
            <Row className="text-center">
              <Col className="justify-content-center d-flex" lg={6} md={6} sm={12} xs={12}>
                <Form className="onboardForm">
                  <h4 className="section-title-login">USER SIGN IN</h4>
                  <h6 className="section-sub-title"> Please Enter Your Mobile Number</h6>
                  <input className="form-control m-2 " type="text" placeholder="Enter Mobile Number" />
                  <Button className="btn site-btn-login btn-block m-2">Next</Button>
                </Form>
              </Col>
              <Col className="p-0 m-0 Desktop" lg={6} md={6} sm={12} xs={12}>
                <img src={Login} alt="" className="onboardBanner" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserLogin;
