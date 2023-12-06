import styles from "./CategorySidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAC } from "../../store/categoriesReducer";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const CategorySidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesAC());
  }, []);
  const categories = useSelector((store) => store.categories.data);
  const changeToBurger = "md";
  return (
    <>
      {categories.length ? (
        <Navbar bg="light" expand="lg" className="flex-column">
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${changeToBurger}`}
          />
          <Navbar.Collapse
            id={`offcanvasNavbar-expand-${changeToBurger}`}
            className={styles.sidebar}
          >
            <Nav className="flex-column">
              <ul>
                {categories.map(
                  (item, index) =>
                    index <= 12 && (
                      <li key={item._id}>
                        <Link to={`/categories/${item._id}`}>{item.name}</Link>
                      </li>
                    )
                )}

                <NavDropdown title="More Categories" id="basic-nav-dropdown">
                  {categories.map(
                    (item, index) =>
                      index > 12 && (
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
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <div>Don't have</div>
      )}
    </>
  );
};

export default CategorySidebar;
