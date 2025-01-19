import React from 'react';
import { CardWrapper, CardImage, CardInfo } from './Card.styled';
import deleteIcon from "../../assets/delete.png";

const Card = ({ product, handleDelete }) => {
  const { name, price, image } = product;
  return <CardWrapper>
    <CardImage src={image} alt="product-image" />
    <p style={{ fontSize: "13px" }}>{name}</p>
    <CardInfo>
        <p style={{ fontSize: "13px" }}>${price}.00</p>
        <img alt="product-delete" style={{ width: "20px", height: "20px", cursor: "pointer" }} src={deleteIcon} onClick={() => handleDelete(product.id)} />
    </CardInfo>
  </CardWrapper>;
};

export default Card;
