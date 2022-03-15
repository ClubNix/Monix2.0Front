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
    <Container className="product">
      <Row>
        <Col>
          <img src={product.img} onClick={() => alert(`Et CLIC ${product.name}`)}/>
        </Col>
        <Col>
          <Row>{product.name}</Row>
          <Row>{`Stock : ${product.stock}`}</Row>
          <Row>{`Price : ${product.price}`}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
