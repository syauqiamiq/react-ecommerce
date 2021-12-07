import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-5" lg={12} md={12} sm={12} xs={12}>
            <Row className="text-center">
              <Col className="justify-content-center d-flex" lg={6} md={6} sm={12} xs={12}>
                <Form className="onboardForm">
                  <h4 className="section-title-login">CONTACT WITH US</h4>
                  <h6 className="section-sub-title"> Please Send Me Your Message</h6>
                  <input className="form-control m-2 " type="text" placeholder="Enter Mobile Number" />
                  <input className="form-control m-2 " type="text" placeholder="Enter Your Email" />
                  <input className="form-control m-2 " type="text" placeholder="Enter Message" />
                  <Button className="btn site-btn-login btn-block m-2">Send</Button>
                </Form>
              </Col>
              <Col className="p-0 m-0 Desktop" lg={6} md={6} sm={12} xs={12}>
                <p className="section-title-contact">
                  Sekardangan Indah, Sidoarjo, Jawa Timur, Indonesia <br></br>
                </p>
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7911.964949731412!2d112.71921341967071!3d-7.467186290566641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6d657acd1f7%3A0xc83a054a17229984!2sSekardangan%20Indah%2C%20Sekardangan%2C%20Kec.%20Sidoarjo%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1638802586245!5m2!1sid!2sid"
                  width="630"
                  height="450"
                  styles="border:0;"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
