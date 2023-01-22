import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */

  width: 100%;
  height: 94px;
  margin: 16px 0;
  padding: 12px 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: #2b40554d 0px 6px 16px 0px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 16px 0px; */
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
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
  :disabled {
    background-color: #2b405580;
    box-shadow: rgba(99, 99, 99, 0.4) 0px 2px 5px 0px;
  }
`;

export const Text = styled.p`
  /* flex-grow: 1; */
  padding: 4px 0;
  margin: 0 8px;

  :first-of-type {
    /* flex-grow: 0; */
    font-weight: 500;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  /* overflow: hidden; */
  background-color: #2b40554d;
  border-radius: 50%;

  ::after {
    content: '';
    position: absolute;
    right: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #0080ff;
    background-color: #bfc5cc;
    border-radius: 50%;
    border: solid 4px #fff;
  }
`;

export const ContactInfo = styled.div`
  flex-grow: 1;
  margin: 0 24px;
`;