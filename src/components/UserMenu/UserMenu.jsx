import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from 'react-icons/fi';
import { logOut } from "redux/auth/operations";
import { selectAuth } from "redux/auth/selectors";
import useWindowDimensions from 'hooks/useWindowDimensions';
import { MenuWrapper, User, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);
  const { width } = useWindowDimensions();
  
  return (
    <MenuWrapper>
      <div>
        <User>{user.name}</User>
        {width >= 768 && (<User>{user.email}</User>)}
      </div>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
        <FiLogOut/>
      </Button>
    </MenuWrapper>
  );
};
