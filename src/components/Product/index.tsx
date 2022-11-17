import React from 'react';
import { Container, Info, Title, ProductContainer, Price, Rating, Star, Image, AddToCart } from './styles';

export default function Product(){
  return (
    <Container>
      <ProductContainer>
        <Info>
          <Title>Samsung Book Core i5-1135G7, 8G, 512GB SSD, Iris Xe, 15.6"FHD, W11 Grey</Title>
          <Price>$30</Price>
          <Rating>
            <Star />
            <Star />
            <Star />
            <Star />
          </Rating>
        </Info>
          <Image src="https://m.media-amazon.com/images/I/51WG6cmUhyL._AC_SY450_.jpg" />
          <AddToCart>Add to Cart</AddToCart>
      </ProductContainer>
    </Container>
  );
}