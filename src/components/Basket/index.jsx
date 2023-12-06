import BasketItem from "./BasketItem";
import { useSelector } from "react-redux";
const Basket = () => {
  const orders = useSelector((store) => store.order);
  const totalPrice = orders.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  return (
    <>
      {orders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th></th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((item) => (
              <BasketItem key={item.id} id={item.id} quantity={item.quantity} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3"></th>
              <th>TOTAL</th>
              <th colSpan="2">₴ {totalPrice.toFixed(2)}</th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <h3 style={{ color: "gray" }}>На данный момент заказов нет</h3>
      )}
    </>
  );
};

export default Basket;
