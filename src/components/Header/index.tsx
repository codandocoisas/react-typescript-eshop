import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
  Container,
  FirstItem,
  Icon,
  Items,
  Logo,
  LogoTitle,
  Nav,
  Search,
  SearchInput,
  SecondItem,
  StoreIcon
} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo>
        <StoreIcon fontSize="large" />
        <LogoTitle>eShop</LogoTitle>
      </Logo>
      <Search>
        <SearchInput type="text" />
        <Icon />
      </Search>
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
