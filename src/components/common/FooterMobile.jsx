/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";

const FooterMobile = () => {
  return (
    <>
      <div className="footerback shadow-sm m-0 mt-5 p-2 ">
        <Container className="text-center">
          <Row className="px-0 my-5 ">
            <Col lg={3} md={3} sm={6} xs={12} className="p-2">
              <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
              <p>
                Sekardangan Indah, Sidoarjo, Jawa Timur, Indonesia <br></br>
                Email: syauqiamiq.work@gmail.com
              </p>
              <h5 className="footer-menu-title">SOCIAL LINK</h5>
              <a>
                <i className="fab fa-facebook m-1 h4"></i>
              </a>
              <a>
                <i className="fab fa-instagram m-1 h4"></i>
              </a>
              <a>
                <i className="fab fa-twitter m-1 h4"></i>
              </a>
            </Col>

            <Col lg={3} md={3} sm={6} xs={12} className="p-2">
              <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
              <a>
                <img src={Apple} alt="apple"></img>
              </a>

              <a>
                <img className="mt-2" src={Google} alt="google"></img>
              </a>
            </Col>
          </Row>
        </Container>
        <Container fluid={"true"} className="text-center m-0 pt-2 pb-1 bg-dark">
          <Row>
            <h6 className="text-white">© Copyright 2021. All Rights Reserved. Developed by Syauqi Amiq</h6>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FooterMobile;
