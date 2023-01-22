import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  text-align: center;
  color: #2b4055;
  background-color: #e4e7ea;
  box-shadow: rgba(99, 99, 99, 0.7) 0px -2px 5px 0px;
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
  color: #fff;
  background-color: #2b4055d0;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.7) 0px 2px 5px 0px;

  :hover {
    background-color: #2b4055f0;
    box-shadow: rgba(99, 99, 99, 0.9) 0px 2px 5px 1px;
  }
`;

export const Timer = styled.span`
  padding: 0 4px;
  color: #2b4055d0;
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
  color: #2b4055b0;
`;

