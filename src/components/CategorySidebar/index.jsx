import styles from "./CategorySidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAC } from "../../store/categoriesReducer";

const CategorySidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesAC());
  }, []);
  const categories = useSelector((store) => store.categories.data);
  return (
    <>
      <div className={styles.sidebar}>
        <h2>CategorySidebar</h2>
        {categories.length ? (
          <ul>
            {categories.map((item) => (
              <li key={item._id}>
                <Link to={`/categories/${item._id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>Don't have</div>
        )}
      </div>
    </>
  );
};

export default CategorySidebar;
