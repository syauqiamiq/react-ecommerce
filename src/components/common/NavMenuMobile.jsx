import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import MegaMenuMobile from "../home/MegaMenuMobile";

const NavMenuMobile = () => {
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
        <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Button onClick={navHandler} className="btn">
                <i className="fa fa-bars"></i>
              </Button>
              <Link to="/">
                {" "}
                <img className="nav-logo" src={Logo} alt="logo" />{" "}
              </Link>
              <Button className="cart-btn">
                <i className="fa fa-shopping-cart"></i> 3 Items{" "}
              </Button>
            </Col>
          </Row>
        </Container>
        <div className={nav}>
          <MegaMenuMobile />
        </div>
        <div className={overlay} onClick={overlayClickHandler}></div>
      </div>
    </>
  );
};

export default NavMenuMobile;
