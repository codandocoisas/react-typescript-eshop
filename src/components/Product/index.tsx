import React from 'react';
import { IProduct } from '../Home';
import { Container, Info, Title, ProductContainer, Price, Rating, Star, Image, AddToCart } from './styles';

export default function Product(props: IProduct){

  const {title, price, rating, image} = props;

  console.log(props)
  return (
    <Container>
      <ProductContainer>
        <Info>
          <Title>{title}</Title>
          <Price>${price}</Price>
          <Rating>
            {
             [...Array(Math.ceil(rating.rate)).map(_ => <Star />)]
            }
          </Rating>
        </Info>
          <Image src="https://m.media-amazon.com/images/I/51WG6cmUhyL._AC_SY450_.jpg" />
          <AddToCart>Add to Cart</AddToCart>
      </ProductContainer>
    </Container>
  );
}