import { Button, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>SergeyDobro</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse style={{display:"flex",justifyContent:"space-around"}} id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Users</Nav.Link>
          <Nav.Link>About</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" style={{marginRight:"20px"}}>Log In</Button>
          <Button variant="primary">Sign Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}
export default Header