import React from 'react';
import Product from '../Product';
import { HomeContainer, BannerImage, Container, ProductsRow } from './styles';

export default function Home() {
  return (
    <Container>
      <HomeContainer>
        <BannerImage
          src="https://www.jornalcontabil.com.br/wp-content/uploads/2019/12/ecommerce-1.jpg"
          alt="ecommerce"
        />
        <ProductsRow>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductsRow>
        <ProductsRow>
          <Product />
          <Product />
          <Product />
        </ProductsRow>
        <ProductsRow>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductsRow>
      </HomeContainer>
    </Container>
  );
}
