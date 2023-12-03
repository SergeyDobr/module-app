import styles from "./Layout.module.css";
import { SlBasketLoaded } from "react-icons/sl";
import {useSelector} from "react-redux";

const BasketLink = () => {
  const orders = useSelector((store) => store.order);
  const quantityOfGoodsInOrder = orders.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  return (
    <div style={{position:'relative'}}>
      <SlBasketLoaded style={{ fontSize: "30px", color: "4A4E5A",}} />
      <div className={styles.basketLink}>{quantityOfGoodsInOrder}</div>
    </div>
  );
};

export default BasketLink;