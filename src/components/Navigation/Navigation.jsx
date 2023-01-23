import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuth } from "redux/auth/selectors";

export const Navigation = () => {
    const { isLoggedIn, isRefreshing} = useSelector(selectAuth)
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && !isRefreshing && (
        <NavLink to="/contacts">Contacts</NavLink>
      )}
      {/* {isLoggedIn && !isRefreshing && <NavLink to="/contacts/add">Add contact</NavLink>} */}
    </nav>
  );
};