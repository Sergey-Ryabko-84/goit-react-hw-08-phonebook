import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #2b4055;
  background-color: #e4e7ea;
  box-shadow: rgba(99, 99, 99, 0.7) 0px -2px 5px 0px;
  /* z-index: 1200; */
  animation: isAppearing 1s ease-in-out;

  @keyframes isAppearing {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Button = styled.button`
  /* margin: auto; */
  padding: 0 12px;
  height: 30px;
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

export const Text = styled.p`
  font-weight: 500;
`;

export const Timer = styled.span`
  /* padding: 0 20px 0 5px; */
  color: #2b4055d0;
  font-weight: 700;
  font-size: 24px;
`;

