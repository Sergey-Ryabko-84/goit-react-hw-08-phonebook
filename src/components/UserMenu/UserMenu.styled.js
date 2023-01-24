import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const User = styled.p`
  margin: 8px 16px;
  font-size: 12px;

  :first-of-type {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
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
