import styles from "./CategoriesPage.module.css"

import CardItem from '../CardItem'
import { Container, Row, Col } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { getCategoriesAC } from "../../store/categoriesReducer"
const CategoriesPage = () => {
   const categories = useSelector(store => store.categories.data)
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getCategoriesAC())
   }, [])
   if (!categories) return null
   // const filteredCategories = categories.filter(item => item.image !== null && item.image.url !== null); //show categories only with photo
   const getImageURL = (url) => 'http://shop-roles.node.ed.asmer.org.ua/' + url;

   return (
      <Container>
         <Row>
            {categories.length > 0 && categories?.map((item, index) => (
               <Col md={4} xs={6} key={index}>
                  <CardItem link={`/categories/${item._id}`} textBtn="Перейти в категорию" name={item.name} src={item.image !== null && item.image.url !== null ? getImageURL(item.image.url): "https://instrument.ru/img/dev/item_not_found.jpg"} />
               </Col>
            )
            )}
         </Row>
      </Container>
   )
}

export default CategoriesPage