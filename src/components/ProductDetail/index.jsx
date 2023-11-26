import { useParams } from "react-router-dom";
import styles from './ProductDetail.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProductsAC } from "../../store/oneProductReducer";
import { addOrderAC } from "../../store/orderReducer";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(store => store.oneProduct.data);
  useEffect(() => {
    dispatch(getOneProductsAC(productId));
  }, [productId]);
  const getImageURL = url => 'http://shop-roles.node.ed.asmer.org.ua/' + url;
  if (!product) {
    return 'loading'
  }

  const order = {
    id: product._id,
    quantity: 1,
  }
  return (
    <>
      <img style={{ maxWidth: "400px" }} src={getImageURL(product.images[0].url)} alt="photoProduct" />
      <h2>{product.name}</h2>
      <h3>{product.price} грн</h3>
      <button onClick={()=>dispatch(addOrderAC(order))} className={styles.button}>Добавить в корзину</button>
    </>
  )
}

export default ProductDetail