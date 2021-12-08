import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import APIServices from "../../api/api";
import parseHTML from "html-react-parser";

const About = () => {
  const [about, setAbout] = useState("");
  useEffect(() => {
    axios
      .get(APIServices.getAllSiteInfo)
      .then((response) => {
        setAbout(response.data[0].about);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-5" lg={12} md={12} sm={12} xs={12}>
            <h4 className="section-title-login">ABOUT PAGE</h4>
            <div className="section-title-contact">{parseHTML(about)}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
