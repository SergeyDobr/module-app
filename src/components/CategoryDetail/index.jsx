import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAC } from "../../store/productReducer";
import { useEffect } from "react";
import CardItem from "../CardItem";
import { SlBasketLoaded } from "react-icons/sl";
import { addOrderAC } from "../../store/orderReducer";

const CategoryDetail = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const userToken = useSelector((store) => store.user.token);
  const products = useSelector((store) => store.products.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAC(categoryId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);
  if (!products) return null;
  const getImageURL = (url) => "http://shop-roles.node.ed.asmer.org.ua/" + url;
  const createOrderOneClick = (product) => ({
    id: product._id,
    quantity: 1,
    price: product.price,
  });
  console.log(userToken);
  return (
    <Container>
      <Row>
        <h2>{products?.[0]?.categories?.[0]?.name}</h2>
        {products.length > 0 &&
          products?.map((item, index) => (
            <Col
              xl={4}
              lg={6}
              sm={6}
              key={index}
              style={{ gap: "15px", display: "flex" }}
            >
              <CardItem
                link={`/categories/${categoryId}/${item._id}`}
                btn={"#"}
                textBtn={
                  <span>
                    {
                      <SlBasketLoaded
                        style={{ marginRight: "10px", display: "inline-block" }}
                      />
                    }
                    <button
                      onClick={() =>
                        userToken
                          ? dispatch(addOrderAC(createOrderOneClick(item)))
                          : navigate("/authorization")
                      }
                    >
                      Купить в 1 клик
                    </button>
                  </span>
                }
                name={item.name}
                price={"₴ " + item.price}
                src={
                  item.image !== null && item.images[0].url !== null
                    ? getImageURL(item.images[0].url)
                    : "https://instrument.ru/img/dev/item_not_found.jpg"
                }
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default CategoryDetail;
