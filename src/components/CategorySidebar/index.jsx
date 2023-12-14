import styles from "./CategorySidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAC } from "../../store/categoriesReducer";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const CategorySidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesAC());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const categories = useSelector((store) => store.categories.data);
  const changeToBurger = "md";
  return (
    <>
      {categories.length ? (
        <Navbar expand="lg" className="p-0">
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${changeToBurger}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${changeToBurger}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${changeToBurger}`}
            placement="start"
            className={styles.sidebar}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Nav className="flex-column">
              <ul>
                {categories.map(
                  (item, index) =>
                    index <= 13 && (
                      <li key={item._id}>
                        <Link to={`/categories/${item._id}`}>{item.name}</Link>
                      </li>
                    )
                )}

                <NavDropdown title="More Categories" id="basic-nav-dropdown">
                  {categories.map(
                    (item, index) =>
                      index > 13 && (
                        <li key={item._id}>
                          <Link to={`/categories/${item._id}`}>
                            {item.name}
                          </Link>
                        </li>
                      )
                  )}
                </NavDropdown>
              </ul>
            </Nav>
          </Navbar.Offcanvas>
        </Navbar>
      ) : (
        <div>Don't have</div>
      )}
    </>
  );
};

export default CategorySidebar;
