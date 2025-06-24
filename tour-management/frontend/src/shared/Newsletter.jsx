import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
function Newsletter() {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travelling information</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                orem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                minima id natus ratione iste soluta quidem doloribus! Asperiores
                molestias, ad maxime rerum, iste cumque perferendis{" "}
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={ maleTourist} alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;