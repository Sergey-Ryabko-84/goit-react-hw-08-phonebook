import styled from 'styled-components';

export const FilterWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 64px;
  padding: 16px 30px;
  width: 300px;

  @media screen and (max-width: 767px) {
    position: static;
    padding: 30px 0 0 0;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  height: 28px;
  margin: 8px 0;
  padding-left: 12px;
  font-weight: 500;
  color: #212735;
  background-color: #eff2fa;
  border-radius: 4px;
  border: 1px solid #a0a0a050;
  outline: none;

  :focus {
    border: 2px solid #2b407580;
  }
`;

export const FilterLabel = styled.label`
  position: relative;
  display: flex;
  font-weight: 500;
`;

export const FilterIcon = styled.div`
  position: absolute;
  right: 8px;
  height: 44px;
  display: flex;
  align-items: center;
  color: #212735;
`;