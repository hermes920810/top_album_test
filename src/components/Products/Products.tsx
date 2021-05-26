import React from "react";
import { Row, Col } from 'reactstrap';
import * as Styled from "./products.styled";
import { ProductItem } from "./ProductItem";

const Products = ({ children }: React.PropsWithChildren<{}>) => (
  <Styled.Wrapper>
    <Row>{children}</Row>
  </Styled.Wrapper>
);

Products.ProductItem = ProductItem;

export default Products;
