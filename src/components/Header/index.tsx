import React from 'react';

import {
  CartContainer,
  CartCount,
  CartIcon,
  Container,
  FirstItem,
  Icon,
  Items,
  Logo,
  LogoTitle,
  Name,
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
          <Name>Hello Guest</Name>
          <SecondItem>Sign In</SecondItem>
        </Items>
        <Items>
          <FirstItem>Your</FirstItem>
          <SecondItem>Shop</SecondItem>
        </Items>
        <CartContainer>
          <CartIcon fontSize='large' />
          <CartCount>0</CartCount>
        </CartContainer>
      </Nav>
    </Container>
  );
}
