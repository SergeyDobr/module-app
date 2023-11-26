import BasketItem from "./BasketItem";
import { useDispatch, useSelector } from "react-redux";
import { GET_ONE_GOOD } from "../../apolloClient/queries";
import { useQuery } from "@apollo/client";
const Basket = () => {
  const orders = useSelector((store) => store.order);
//   const { data } = useQuery(GET_ONE_GOOD, {
//     variables: {
//       query: JSON.stringify(
//         orders.map((item) => ({
//           _id: item.id,
//         }))
//       ),
//     },
//   });
//   console.log(data);
  return (
    <>
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
          {orders.length > 0 &&
            orders?.map(item => <BasketItem key={item.id} id={item.id} />)}
          {/* <BasketItem id={'6408bf99d5e3301cba63a5aa'}/> */}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3"></th>
            <th>TOTAL</th>
            <th colSpan="2">$97.50</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Basket;
