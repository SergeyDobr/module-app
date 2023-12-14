import styles from "./Layout.module.css";
import Footer from "../Footer";
import logo from "../../images/logo.png";

import CategorySidebar from "../CategorySidebar";
import Form from "react-bootstrap/Form";
import { Link, Outlet, useResolvedPath } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { BsPerson } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import BasketLink from "./BasketLink";
import { useQuery } from "@apollo/client";
import { FIND_GOODS } from "../../apolloClient/queries";
import { useState } from "react";

import { blackListFotCategorySideBar } from "./configNavigation";
import { logOutUserAC } from "../../store/userReducer";

export const Layout = () => {
  const dispatch = useDispatch();
  const { pathname } = useResolvedPath();
  const showCategories = !blackListFotCategorySideBar.includes(pathname);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
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
        <nav className={styles.navbar}>
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Col xs={4} sm={6} md={6} lg={2}>
                <Link to="/">
                  <img style={{ width: "10rem" }} alt="logo" src={logo} />
                </Link>
              </Col>

              <Col xs={8} sm={6} md={6} lg={3} className={styles.headerRow}>
                <Link className={styles.link} to="/home">
                  Home
                </Link>
                <Link className={styles.link} to="/categories">
                  All Categories
                </Link>
              </Col>

              <Col xs={12} sm={6} md={6} lg={4} className={styles.formControl}>
                <Form.Control
                  value={value}
                  type="search"
                  placeholder={"Search"}
                  aria-label="Search"
                  onChange={(e) => setValue(e.target.value)}
                  onClick={checkOpen}
                />
                {value.length > 2 && isOpen && (
                  <ul className={styles.complete}>
                    {data &&
                      data.GoodFind.map((item) => (
                        <li key={item._id} className={styles.autocomplete}>
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
              </Col>

              <Col xs={12} sm={6} md={6} lg={3} className={styles.headerRow}>
                {userName ? (
                  <>
                    <div>{userName}</div>
                    <Link to="/basket">
                      <BasketLink />
                    </Link>
                    <Button onClick={() => dispatch(logOutUserAC())}>
                      <IoIosLogOut />
                    </Button>
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
              </Col>
            </Row>
          </Container>
        </nav>
      </header>
      <main>
        <Container>
          <Row>
            {showCategories && (
              <Col md={3} xs={3}>
                <CategorySidebar />
              </Col>
            )}
            <Col md={12} lg={9}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};
