import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';

import {
  Container,
  FirstItem,
  Items,
  Logo,
  Nav,
  Search,
  SecondItem
} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo>
        <StorefrontIcon />
      </Logo>
      <Search></Search>
      <Nav>
        <Items>
          <FirstItem>Hello Guest</FirstItem>
          <SecondItem>Sign In</SecondItem>
        </Items>
        <Items>
          <FirstItem>Your</FirstItem>
          <SecondItem>Shop</SecondItem>
        </Items>
        <Items>
          <ShoppingCartIcon fontSize="large" />
          <SecondItem>0</SecondItem>
        </Items>
      </Nav>
    </Container>
  );
}
