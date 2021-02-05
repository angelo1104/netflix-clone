import React, { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/actions";

interface Props {
  children: any;
}

function AuthProvider({ children }: Props): JSX.Element {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //she is signed in and hot.
        dispatch(actions.updateUser(user));
      } else {
        //she is not signed in yet hot
        dispatch(actions.updateUser(null));
      }
    });
  }, []);

  useEffect(() => {
    console.log("firebase user", user);
  }, [user]);

  return <div>{children}</div>;
}

export default AuthProvider;
