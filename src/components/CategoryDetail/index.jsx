import { useParams } from "react-router-dom";
import CategorySidebar from "../CategorySidebar";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAC } from "../../store/productReducer";
import { useEffect } from "react";
import CardItem from "../CardItem";

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
    <Row>
      <h2>Category Detail:</h2>
      {products.length > 0 &&
        products?.map((item, index) => (
          <Col xs={4} key={index}>
            <CardItem
              link={`/categories/${categoryId}/${item._id}`}
              textBtn="Купить в 1 клик"
              name={item.name}
              src={
                item.image !== null && item.images[0].url !== null
                  ? getImageURL(item.images[0].url)
                  : "https://instrument.ru/img/dev/item_not_found.jpg"
              }
            />
          </Col>
        ))}
    </Row>
  );
};

export default CategoryDetail;
