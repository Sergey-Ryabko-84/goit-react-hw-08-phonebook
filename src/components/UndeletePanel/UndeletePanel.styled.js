import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  text-align: center;
  color: #eff2fa;
  background-image: radial-gradient(
    circle at center,
    #212735 12%,
    #21273510 92%
  );
  box-shadow: rgba(0, 0, 0, 0.25) 0px -2px 5px 0px;
  animation: isAppearing 500ms ease-in-out;

  @keyframes isAppearing {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 0 12px;
  min-height: 30px;
  font-weight: 700;
  color: #212735d0;
  background-color: #c1c9d9;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 5px 1px;

  :hover {
    color: #eff2fa;
    background-color: #212735;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 2px 5px 1px;
  }
`;

export const Timer = styled.span`
  padding: 0 4px;
  color: #eff2fad0;
  font-weight: 700;
  font-size: 24px;
`;

export const Text = styled.p`
  margin: 16px;
  font-weight: 500;
`;

export const Post = styled.p`
  position: absolute;
  bottom: -6px;
  /* left: calc(16px + 390px / 2); */
  left: calc(50% - 111px / 2);
  transform: translateX(-50%);
  margin-top: 0;
  font-size: 10px;
  color: #c1c9d9b0;
`;

