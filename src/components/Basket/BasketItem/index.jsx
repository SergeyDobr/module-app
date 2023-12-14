import Counter from "../../ProductDetail/counter";

import { useDispatch } from "react-redux";
import {
  updateOrderAC,
  removeProductFromOrderAC,
} from "../../../store/orderReducer";
import { useQuery } from "@apollo/client";
import { GET_ONE_GOOD } from "../../../apolloClient/queries";
import { Link } from "react-router-dom";

import { TiDeleteOutline } from "react-icons/ti";

const BasketItem = (props) => {
  const dispatch = useDispatch();
  const { data } = useQuery(GET_ONE_GOOD, {
    variables: { query: JSON.stringify([{ _id: props.id }, {}]) },
  });
  const product = data?.GoodFindOne;
  const getImageURL = (url) => "http://shop-roles.node.ed.asmer.org.ua/" + url;
  if (!product) {
    return null;
  }
  const handleCounterChange = (newValue) => {
    dispatch(
      updateOrderAC({
        id: props.id,
        quantity: newValue,
      })
    );
  };
  const removeProduct = () => {
    dispatch(
      removeProductFromOrderAC({
        id: props.id,
      })
    );
  };
  return (
    <tr>
      <td>
        <Link to={`/categories/${product.categories[0]._id}/${product._id}`}>
          <img
            style={{ maxWidth: "100px" }}
            src={getImageURL(product.images[0].url)}
            alt="product"
          />
        </Link>
      </td>
      <td>
        <Link
          to={`/categories/${product.categories[0]._id}/${product._id}`}
          style={{ textDecoration: "none", color: "#003", fontSize: "20px" }}
        >
          {product.name}
        </Link>
        <ul>
          <li>
            <span>Product data: data</span>
          </li>
          <li>
            <span>Product data: data</span>
          </li>
        </ul>
      </td>
      <td>
        <strong>₴ {product.price}</strong>
      </td>
      <td>
        <Counter
          minValue={1}
          maxValue={99}
          value={props.quantity}
          onChange={handleCounterChange}
        />
      </td>
      <td>
        <strong>₴ {product.price * props.quantity}</strong>
      </td>
      <td>
        <button
          onClick={() => removeProduct()}
          style={{ border: "0", fontSize: "2rem" }}
        >
          <TiDeleteOutline />
        </button>
      </td>
    </tr>
  );
};

export default BasketItem;
