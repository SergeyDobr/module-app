import styles from "./Layout.module.css";
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import CategorySidebar from "../CategorySidebar";
import { BsPerson } from "react-icons/bs";
import BasketLink from "./BasketLink";
import { useQuery } from "@apollo/client";
import { FIND_GOODS } from "../../apolloClient/queries";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export const Layout = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const changeToBurger = "md";
  const userName = useSelector((store) => store.user.userName);
  const { data } = useQuery(FIND_GOODS, {
    variables: {
      query: JSON.stringify([
        {
          $or: [
            { title: `/${value}/` },
            { description: `/${value}/` },
            { name: `/${value}/` },
          ],
        },
        {},
      ]),
    },
  });
  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };
  const checkOpen = () => setIsOpen(true);

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
                <Form className={styles.formControl}>
                  <Form.Control
                    value={value}
                    type="search"
                    placeholder={ "Search"}
                    aria-label="Search"
                    onChange={(e) => setValue(e.target.value)}
                    onClick={checkOpen}
                  />
                  {value.length > 2 && isOpen && (
                    <ul className={styles.complete}>
                      {data &&
                        data.GoodFind.map((item) => (
                          <li key={item.id} className={styles.autocomplete}>
                            <Link
                              onClick={itemClickHandler}
                              to={`/categories/${item.categories[0]._id}/${item._id}`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </Form>
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
          <Col md={9}>
            <Outlet />
          </Col>
        </Row>
        {/* <CategorySidebar />
        <Outlet /> */}
      </Container>
    </>
  );
};
