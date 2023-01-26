import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 20%;
  font-size: 48px;
  color: #212735d0;
  background-image: radial-gradient(
    at center,
    #ffffffd0 0%,
    #ffffff40 28%,
    #ffffff00 64%
  );
  border-radius: 50%;

  @media screen and (max-width: 767px) {
    gap: 18px;
    padding: 20% 10%;
    font-size: 32px;
  }
`;
