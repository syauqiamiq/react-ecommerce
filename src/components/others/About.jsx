import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-5" lg={12} md={12} sm={12} xs={12}>
            <h4 className="section-title-login">ABOUT US PAGE</h4>
            <p className="section-title-contact">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem repellendus, maiores repudiandae possimus soluta ratione rem incidunt iste doloremque ex voluptates aliquam laborum, non, odit tempore saepe nobis
              nesciunt quidem fugiat amet? Distinctio, adipisci. <br></br>
              <br></br>
              Voluptate eius ipsa sunt! Dolores, sequi iure? Voluptatibus, numquam. Vel dolore temporibus ratione obcaecati tempora minima incidunt dolorem ipsa suscipit nemo nam voluptatem vero, officia sed necessitatibus, aliquam sequi.
              Accusamus atque libero aperiam, quia doloremque nobis deserunt excepturi vero! Explicabo, sint commodi repudiandae facere, iusto nemo est dolorem, unde magnam quae nihil numquam quod dolore. Repellat soluta distinctio hic eos
              sit nemo dolorem iste blanditiis.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
