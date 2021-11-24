/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const NewArrival = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const handlePrev = () => {
    return settings.slider.slickPrev()
  }
  const handleNext = () => {
    return settings.slider.slickNext()
  }
  return (
    <>
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55">
          <h2>NEW ARRIVAL PRODUCT &nbsp;
            <a className="btn btn-sm ml-2 site-btn" onClick={handlePrev}><i className="fa fa-angle-left"></i></a>
            &nbsp;
            <a className="btn btn-sm ml-2 site-btn" onClick={handleNext}><i className="fa fa-angle-right"></i></a>
          
          </h2>
          <p>Beberapa Produk Terbaru Kami, Yang Mungkin Anda Suka</p>
        </div>
        <Row>
          <Col>
            <Slider ref={c => (settings.slider = c)} {...settings}>
              {[1,2,3,4,5,6].map((res, index) => (
                <div key={index}>
                  <Card className="image-box card">
                    <img className="center" src="https://rukminim1.flixcart.com/image/832/832/kri3xjk0/cases-covers/bumper-case/f/b/y/ps-63-pascunt-original-imag5a8bqgxsgkwh.jpeg?q=70" alt="sample" />
                    <Card.Body>
                      <p className="product-name-on-card">Custom Case Free Design Murah</p>
                      <p className="product-price-on-card">Harga: 60.000</p>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </Slider>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NewArrival
