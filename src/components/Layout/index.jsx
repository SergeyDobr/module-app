import styles from "./Layout.module.css"
import { Link, Outlet } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from "react-redux";
import CategorySidebar from "../CategorySidebar";

export const Layout = () => {
   const changeToBurger = 'md';
   const userName = useSelector(store => store.user.userName)
   return (
      <>
         <header>
            <Navbar expand={changeToBurger} className="bg-body-tertiary mb-3">
               <Container>
                  <Link to="/">
                     <img style={{ width: '10rem' }} alt="logo" src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' />        </Link>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${changeToBurger}`} />
                  <Navbar.Offcanvas
                     id={`offcanvasNavbar-expand-${changeToBurger}`}
                     aria-labelledby={`offcanvasNavbarLabel-expand-${changeToBurger}`}
                     placement="end"
                  >
                     <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${changeToBurger}`}>
                           Amazon
                        </Offcanvas.Title>
                     </Offcanvas.Header>
                     <Offcanvas.Body>
                        <Nav className={styles.header_row}>
                           <Link className={styles.link} to='/home'>Home</Link>
                           <Link className={styles.link} to='/categories'>Categories</Link>
                           <Link className={styles.link} to='/'>Sales</Link>
                        </Nav>
                        <Nav className={styles.header_row}>
                           {userName ?
                              <>
                                 <div>{userName}</div>
                                 <Link to='/basket'><img height="20" src='https://cdn-icons-png.flaticon.com/512/1374/1374128.png' alt="basket" /></Link>
                              </>
                              :
                              <>
                                 <Link className={styles.link} to='/authorization'>Login</Link>
                                 <Link className={styles.link} to='/registration'>Sign</Link>
                              </>
                           }
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
               <Col md={3} xs={12}><CategorySidebar /></Col>
               <Col md={9} xs={12}><Outlet /></Col>
            </Row>
         </Container>
      </>
   )
}