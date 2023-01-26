import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { logOut } from "redux/auth/operations";
import { selectAuth } from "redux/auth/selectors";
import useWindowDimensions from 'hooks/useWindowDimensions';
import { MenuWrapper, User, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);
  const { width } = useWindowDimensions();

  const handleLogOut = () => {
    dispatch(logOut())
    .unwrap()
    .then()
    .catch(error => {
      toast.error(
        'Oops... Something went wrong. Please refresh the page and try again!'
      );
      console.log('Error: ', error);
    });
  }
  
  return (
    <MenuWrapper>
      <div>
        <User>{user.name}</User>
        {width >= 768 && <User>{user.email}</User>}
      </div>
      <Button type="button" onClick={handleLogOut}>
        Logout
        <FiLogOut />
      </Button>
    </MenuWrapper>
  );
};
