import styled from 'styled-components';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

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
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
  margin-right: 0.5em;
  color: white;
`;

export const FirstItem = styled.span`
  font-size: 0.5em;
`;

export const SecondItem = styled.span`
  font-size: 0.7em;
  font-weight: 800;
`;
