import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-left: 250px;
  }
`;
