/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Col, Container, Navbar, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import MegaMenuAll from "../home/MegaMenuAll";

const NavMenuDesktop = () => {
  const [nav, setNav] = useState("sideNavClose");
  const [overlay, setOverlay] = useState("ContentOverlayClose");

  const overlayClickHandler = () => {
    navHandler();
  };

  const navHandler = () => {
    if (nav === "sideNavClose") {
      setNav("sideNavOpen");
      setOverlay("ContentOverlayOpen");
    }
    if (nav === "sideNavOpen") {
      setNav("sideNavClose");
      setOverlay("ContentOverlayClose");
    }
  };
  return (
    <>
      <div className="TopSectionDown">
        <Navbar className="navbar" fixed={"top"} bg="light">
          <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Button onClick={navHandler} className="btn">
                  <i className="fa fa-bars"></i>
                </Button>
                <Link to="/">
                  {" "}
                  <img className="nav-logo" src={Logo} />{" "}
                </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input type="text" className="form-control" />
                  <Button type="button" className="btn site-btn">
                    <i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/" className="btn">
                  <i className="fa h4 fa-heart"></i>
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>
                <Link to="/" className="btn">
                  <i className="fa h4 fa-bell"></i>
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>
                <a href="#home" className="btn">
                  <i className="fa h4 fa-mobile-alt"></i>
                </a>
                <Link to="/" className="h4 btn">
                  LOGIN
                </Link>

                <Button className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> 3 Items{" "}
                </Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
      <div className={nav}>
        <MegaMenuAll />
      </div>
      <div className={overlay} onClick={overlayClickHandler}></div>
    </>
  );
};

export default NavMenuDesktop;
