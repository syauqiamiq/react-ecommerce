import React, { useState } from "react";
import { Card, Col, Container, Modal, Row, Button } from "react-bootstrap";

const Notification = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Container className="TopSection">
        <Row>
          <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
            <Card onClick={handleShow} className="notification-card">
              <Card.Body>
                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                <p className="py-1  px-0 text-primary m-0">
                  <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status: Unread
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
            <Card onClick={handleShow} className="notification-card">
              <Card.Body>
                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                <p className="py-1   px-0 text-primary m-0">
                  <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status: Unread
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
            <Card className="notification-card">
              <Card.Body>
                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                <p className="py-1  px-0 text-success m-0">
                  <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status: Read
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
            <Card className="notification-card">
              <Card.Body>
                <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                <p className="py-1  px-0 text-success m-0">
                  <i className="fa fa-bell"></i> Date: 22/12/2010 | Status: Read
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
            <Card className="notification-card">
              <Card.Body>
                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                <p className="py-1  px-0 text-success m-0">
                  <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status: Read
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
            <Card className="notification-card">
              <Card.Body>
                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                <p className="py-1 px-0 text-success m-0">
                  <i className="fa  fa-bell"></i> Date: 22/12/2010 | Status: Read
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6>
            <i className="fa fa-bell"></i> Date:11/05/2021
          </h6>
        </Modal.Header>
        <Modal.Body>
          <h6>Woohoo, you're reading this text in a modal!</h6>
          <p>
            Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the
            right place.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Notification;
