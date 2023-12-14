import styles from "./ProductDetail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { getOneProductsAC } from "../../store/oneProductReducer";
import { addOrderAC } from "../../store/orderReducer";
import Counter from "./counter";

const ProductDetail = () => {
  const navigate = useNavigate();
  const userToken = useSelector((store) => store.user.token);
  const [counterValue, setCounterValue] = useState(1);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.oneProduct.data);
  useEffect(() => {
    dispatch(getOneProductsAC(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
  const getImageURL = (url) => "http://shop-roles.node.ed.asmer.org.ua/" + url;
  if (!product) {
    return "loading";
  }

  const handleCounterChange = (newValue) => {
    setCounterValue(newValue);
  };
  const order = {
    id: product._id,
    quantity: counterValue,
    price: product.price,
  };
  return (
    <>
      <Row>
        <Col md={5} xs={12}>
          <img
            style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
            src={getImageURL(product.images[0].url)}
            alt="photoProduct"
          />
        </Col>
        <Col md={7} xs={12}>
          <h2>{product.name}</h2>
          <div className={styles.wrapper}>
            <Counter
              minValue={1}
              maxValue={99}
              value={counterValue}
              onChange={handleCounterChange}
            />
            <button
              onClick={() =>
                userToken
                  ? dispatch(addOrderAC(order))
                  : navigate("/authorization")
              }
              className={styles.button}
            >
              Купить
            </button>
          </div>
          <p style={{ color: "#adabab", fontSize: "18px" }}>
            DETAILS ABOUT THE PRODUCT OR PRODUCT BRAND
          </p>
          <h3>{product.price} грн</h3>
        </Col>
        <Col md={12}>
          <p>{product.description}</p>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
