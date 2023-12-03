import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAC } from "../../store/productReducer";
import { useEffect } from "react";
import CardItem from "../CardItem";
import { SlBasketLoaded } from "react-icons/sl";
import { FaHeart } from "react-icons/fa6";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const products = useSelector((store) => store.products.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAC(categoryId));
  }, [categoryId]);
  if (!products) return null;
  const getImageURL = (url) => "http://shop-roles.node.ed.asmer.org.ua/" + url;
  return (
    <Container>
      <Row>
        <h2>Category Detail:</h2>
        {products.length > 0 &&
          products?.map((item, index) => (
            <Col xl={4} lg={6} sm={12} key={index} style={{gap:"15px",display:"flex"}}>
              <CardItem
                link={`/categories/${categoryId}/${item._id}`}
                textBtn={
                  <span>
                    {<SlBasketLoaded style={{marginRight:'10px', display: 'inline-block'}}/>}
                    <span>Купить в 1 клик</span>
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
