import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from 'react-icons/fi';
import { logOut } from "redux/auth/operations";
import { selectAuth } from "redux/auth/selectors";
import { MenuWrapper, User, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);
  
  return (
    <MenuWrapper>
      <div>
        <User>{user.name}</User>
        <User>{user.email}</User>
      </div>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
        <FiLogOut/>
      </Button>
    </MenuWrapper>
  );
};
