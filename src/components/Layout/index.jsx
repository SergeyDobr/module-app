import styles from "./Layout.module.css";
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import CategorySidebar from "../CategorySidebar";
import { BsPerson } from "react-icons/bs";
import BasketLink from "./BasketLink";

export const Layout = () => {
  const changeToBurger = "md";
  const userName = useSelector((store) => store.user.userName);
  return (
    <>
      <header>
        <Navbar expand={changeToBurger} className="mb-3">
          <Container>
            <Link to="/">
              <img
                style={{ width: "10rem", marginRight: "20px" }}
                alt="logo"
                src={logo}
              />{" "}
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${changeToBurger}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${changeToBurger}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${changeToBurger}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${changeToBurger}`}
                >
                  Amazon
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={styles.headerRow}>
                <Nav className={styles.headerCol}>
                  <Link className={styles.link} to="/home">
                    Home
                  </Link>
                  <Link className={styles.link} to="/categories">
                    All Categories
                  </Link>
                </Nav>
                <Nav className={styles.headerCol}>
                  {userName ? (
                    <>
                      <div>{userName}</div>
                      <Link to="/basket">
                        <BasketLink />
                      </Link>
                    </>
                  ) : (
                    <div className={styles.blockPerson}>
                      <div className={styles.logoPerson}>
                        <BsPerson style={{ fontSize: "20px" }} />
                      </div>
                      <div>
                        <p className={styles.namePerson}>Personal Area</p>
                        <Link className={styles.linkLogin} to="/authorization">
                          Login
                        </Link>{" "}
                        /
                        <Link className={styles.linkLogin} to="/registration">
                          Register
                        </Link>
                      </div>
                    </div>
                  )}
                </Nav>
                {/* <Form className="d-flex">
                           <Form.Control
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                           />
                           <Button variant="outline-success">Search</Button>
                        </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={3} xs={12}>
            <CategorySidebar />
          </Col>
          <Col md={9} xs={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
