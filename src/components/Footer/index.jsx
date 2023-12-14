import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#f0f0f0", padding: "20px", marginTop: "20px" }}
    >
      <Container>
        <Row>
          <Col>
            <img className=""
              src={logo}
              alt="Logo"
            />
            <p>Welcome to online shopping</p>
          </Col>
          <Col>
            <h3>Follow Us</h3>
            <div style={{display:'flex', gap:'10px'}}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook style={{ fontSize: "35px", marginRight: "10px" }} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter style={{ fontSize: "35px", marginRight: "10px" }} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  style={{ fontSize: "35px", marginRight: "10px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
