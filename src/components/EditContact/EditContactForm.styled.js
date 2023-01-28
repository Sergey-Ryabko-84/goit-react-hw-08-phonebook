import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 30px 16px 30px;
  width: 300px;
`;

export const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  height: 60px;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: #212735d0;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 28px;
  margin: 8px 0;
  padding-left: 36px;
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

export const FilterIcon = styled.div`
  position: absolute;
  left: 8px;
  height: 44px;
  display: flex;
  align-items: center;
  color: #212735;
`;

export const ErrorMsg = styled(ErrorMessage)`
  width: 240px;
  margin: 0 8px;
  font-size: 14px;
  font-weight: 500;
  color: #c20d00;
  text-shadow: 0 0 8px #ffffff80;
`;

export const SubmitButton = styled.button`
  margin: 8px auto;
  padding: 0 12px;
  width: 100%;
  height: 30px;
  font-weight: 700;
  color: #212735d0;
  background-color: #c1c9d9;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 5px 1px;

  :hover,
  :focus {
    color: #c1c9d9;
    background-color: #212735;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 2px 5px 1px;
  }
`;
