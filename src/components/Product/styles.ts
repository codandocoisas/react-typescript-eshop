import styled from "styled-components";
import StarIcon from '@mui/icons-material/Star';

export const Container = styled.div`
  display: flex;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: .5em;
  padding: 1em;
  width: 100%;
  max-height: 25em;
  min-width: 8em;
  background-color: white;
  z-index: 1;
  font-family: 'open sans', sans-serif;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 8em;
  margin-bottom: 1em;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p``;

export const Price = styled.p`
  margin-top: .5em;
`;

export const Rating = styled.div`
  display: flex;
`;

export const Star = styled(StarIcon)`
  color: yellow;
`;

export const Image = styled.img`
  max-height: 13em;
  width: 100%;
  object-fit: contain;
  margin: .5em 0 0 .8em;
`;

export const AddToCart = styled.button`
  font-family: 'open sans', sans-serif;
  font-weight: 600;
  margin-top: 1em;
  background-color: #ff9f00;
  border: 0;
  padding: .5em 2em;
  border-radius: 1em;
`;
