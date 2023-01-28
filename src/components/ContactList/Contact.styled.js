import styled from 'styled-components';
import { ImUser } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 82px;
  margin: 16px 0;
  padding: 12px 20px;
  color: #212735;
  background-color: #eff2fa;
  border-radius: 12px;
  box-shadow: #2127358d 0px 6px 16px 0px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 4px;
  color: #fff;
  background-color: #212735d0;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.7) 0px 2px 5px 0px;

  :hover {
    background-color: #212735f0;
    box-shadow: rgba(99, 99, 99, 0.9) 0px 2px 5px 1px;
  }
  :disabled {
    background-color: #21273580;
    box-shadow: rgba(99, 99, 99, 0.4) 0px 2px 5px 0px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 4px;
  color: #fff;
  background-color: #212735d0;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.7) 0px 2px 5px 0px;

  :hover {
    background-color: #212735f0;
    box-shadow: rgba(99, 99, 99, 0.9) 0px 2px 5px 1px;
  }
  :disabled {
    background-color: #21273580;
    box-shadow: rgba(99, 99, 99, 0.4) 0px 2px 5px 0px;
  }
`;

export const Text = styled.p`
  padding: 4px 0;
  margin: 0;

  :first-of-type {
    font-weight: 500;
  }

  a {
    color: #212735;
    :hover {
      color: #486ec8;
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  overflow: hidden;
  background-color: #afb4be;
  border-radius: 50%;

  ::after {
    content: '';
    position: absolute;
    right: 0;
    /* display: inline-block; */
    display: none;
    width: 22px;
    height: 22px;
    background-color: #afb4be;
    border-radius: 50%;
    border: solid 4px #eff2fa;
  }
`;

export const ContactInfo = styled.div`
  flex-grow: 1;
  margin: 0 24px;
`;

export const UserImg = styled(ImUser)`
  position: absolute;
  top: 4px;
`;