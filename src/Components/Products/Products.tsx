import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Product.css"

export type ProductObject = {
  name: string;
  img: string;
  price: number;
  stock: number;
};

export type ProductProps = {
  product: ProductObject;
};

// PENSEZ A COMMENTER
const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product">
      <img src={product.img} onClick={() => alert(`Et CLIC ${product.name}`)}/>
      <div className="desc">
        <span>{product.name}</span>
        <span>{`Stock : ${product.stock}`}</span>
        <span>{`Price : ${product.price}`}</span>
      </div>
    </div>
  );
};

export default Product;
