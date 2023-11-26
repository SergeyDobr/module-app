import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAC } from "../../../store/productReducer";
import { useQuery } from "@apollo/client";
import { GET_ONE_GOOD } from "../../../apolloClient/queries";

const BasketItem = (props) => {
  const dispatch = useDispatch();
 
  
  const { data,loading } = useQuery(GET_ONE_GOOD, {
    variables: { query: JSON.stringify([{ _id: props.id }, {}]) },
  });
  const product = data?.GoodFindOne;



  const getImageURL = (url) => "http://shop-roles.node.ed.asmer.org.ua/" + url;
  if (!product) {
    return null;
  }

  return (
    <tr>
      <td>
        <img
          style={{ maxWidth: "100px" }}
          src={getImageURL(product.images[0].url)}
          alt="product"
        />
      </td>
      <td>
        <a href="#">{product.name}</a>
        <ul>
          <li>
            <span>Size: XL</span>
          </li>
          <li>
            <span>Color: Camelot</span>
          </li>
        </ul>
      </td>
      <td>
        <strong>{product.price} грн</strong>
      </td>
      <td>
        <input type="number" />
      </td>
      <td>
        <strong>$32.50</strong>
      </td>
      <td>
        <button>
          <i></i>
        </button>
      </td>
    </tr>
  );
};

export default BasketItem;
