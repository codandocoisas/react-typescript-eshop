import styled from 'styled-components';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Container = styled.div`
  height: 4em;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const StoreIcon = styled(StorefrontIcon)`
  margin-right: 0.5em;
  color: #ff9f00;
`;

export const LogoTitle = styled.h2`
  height: 1em;
  font-weight: bold;
  font-family: 'Open Sans';
  text-decoration: none;
  border: 0;
  color: white;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #ff9f00;
  margin: 0 2em;
`;

export const Search = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 0 1em;
`;

export const SearchInput = styled.input`
  height: 0.5em;
  padding: 1em;
  border: none;
  width: 100%;
  border-radius: 0.5em 0 0 0.5em;
`;

export const Icon = styled(SearchIcon)`
  padding: 0.2em;
  height: 1em;
  background-color: #ff9f00;
  border-radius: 0 0.2em 0.2em 0;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Items = styled.div`
  font-family: 'Open Sans', sans-serif;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
  margin-right: 0.5em;
  color: white;
`;

export const Name = styled.span`
  font-size: .7em;
`;

export const FirstItem = styled.span`
  font-size: 1em;
  font-weight: 800;
`;

export const SecondItem = styled.span`
  font-size: 1em;
  font-weight: 800;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CartCount = styled.span`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  height: .8em;
  width: .8em;
  color: #000;
  position: absolute;
  right: 2em;
  top: 1em;
  background-color: #ff9f00;
  padding: .2em;
  border-radius: 50%;
  z-index: 99;
`;



export const CartIcon = styled(ShoppingCartIcon)`
  display: flex;
  align-items: center;
  color: white;
  margin-left: .3em;
  margin-right: 1.2em;
`;