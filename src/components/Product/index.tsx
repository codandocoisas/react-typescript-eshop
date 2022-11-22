import React from 'react';
import { IProduct } from '../Home';
import {
  Container,
  Info,
  Title,
  ProductContainer,
  Price,
  Rating,
  Star,
  Image,
  AddToCart,
  InfoContainer
} from './styles';

export default function Product(props: IProduct) {
  const { title, price, rating, image } = props;

  return (
    <Container>
      <ProductContainer>
        <InfoContainer>
          <Info>
            <Title>{title}</Title>
            <Price>${price}</Price>
            <Rating>
              {
                Array(Math.ceil(rating.rate)).fill(0).map((_, i) => <Star />)
              }
              </Rating>
          </Info>
        </InfoContainer>
        <Image src={image} />
        <AddToCart>Add to Cart</AddToCart>
      </ProductContainer>
    </Container>
  );
}
