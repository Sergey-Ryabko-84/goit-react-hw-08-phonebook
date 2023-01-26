import styled from 'styled-components';

export const List = styled.ul`
  width: 460px;
  padding: 0 30px;

  @media screen and (max-width: 479px) {
    width: 380px;
    padding: 0;
    transform: scale(0.9) translateY(-6.2%);
  }

  @media screen and (max-width: 379px) {
    transform: scale(0.8) translateY(-14%);
  }
`;
