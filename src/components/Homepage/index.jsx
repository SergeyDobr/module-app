import styles from "./Homepage.module.css"
import { Container, Row, Col } from "react-bootstrap"
import CarouselBlock from "../CarouselBlock"
import CategorySidebar from "../CategorySidebar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCategoriesAC } from "../../store/categoriesReducer"
const Homepage = () => {
  const dispatch = useDispatch();
  return (
    <CarouselBlock />
  )
}

export default Homepage