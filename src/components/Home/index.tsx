import React, { useEffect, useState } from 'react';
import Product from '../Product';
import { HomeContainer, BannerImage, Container, ProductsRow } from './styles';

interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
  .then((json) => {
      console.log(json)
      let slicedProducts: IProduct[] = [];
      let count = 0
      json.map((key: IProduct, index: number): void => {
        if( index % 4 === 0 && index !== 0){
          let rowOfProducts = json.slice(count, index)
          slicedProducts.push(rowOfProducts)
          count += 4;
          }
          // eslint-disable-next-line array-callback-return
          return;
        }
      )

      setProducts(slicedProducts)
  });
  }, [])

  console.log(products)

  return (
    <Container>
      <HomeContainer>
        <BannerImage
          src="https://www.jornalcontabil.com.br/wp-content/uploads/2019/12/ecommerce-1.jpg"
          alt="ecommerce"
        />
        <ProductsRow>
        {
        
        }
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
