import styled from 'styled-components';

export const Container = styled.div``;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 100em;
`;

export const BannerImage = styled.img`
  width: 100%;
  z-index: -1;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
`;

export const ProductsRow = styled.div`
  display: flex;
  margin-left: .5em;
  margin-right: .5em;
`;
