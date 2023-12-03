import styles from "./CardItem.module.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
function CardItem(props) {
  return (
    <div className={styles.productItem}>
      <div className={styles.productImg}>
        <a href={props.link}>
          <img src={props.src} alt="Category Image" />
        </a>
      </div>
      <div className={styles.productList}>
        <h3>{props.name}</h3>
        <div>
          <div className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <span className={styles.price}>{props.price}</span>
          <div className={styles.actions}>
            <div className={styles.addToCart}>
              <a href={props.link} className={styles.cartButton}>
                {props.textBtn}
              </a>
            </div>
            <div className={styles.addToLinks}>
              <a href="" className={styles.wishlist}></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
