import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router";
import { selectUser, storeRedirect } from "../features/user/userSlice";

export function ProtectedRoute({ children, ...props }) {
  const { me } = useSelector(selectUser);
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    me || dispatch(storeRedirect(location.pathname));
  }, [me, location, dispatch]);
  return me ? <Route {...props}>{children}</Route> : <Redirect to="/login" />;
}
