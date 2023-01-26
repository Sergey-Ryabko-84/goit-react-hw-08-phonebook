import styled from 'styled-components';
import background from '../../images/backgrounds-gamerwall.jpg';

export const AppBarWrapper = styled.header`
  position: fixed;
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 8px 40px;
  /* color: #2b4055; */
  color: #eff2fa;
  background-color: #00000040;
  z-index: 1;

  @media screen and (max-width: 1199px) {
    background-image: url(${background});
  }
`;
