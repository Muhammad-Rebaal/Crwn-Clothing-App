import { createContext, useEffect, useState } from "react";

import {
  OnAuthStateChangedListener,
  SignOutUser,
  createUserDocumentFromAuth
} from "../utils/Firebase.utils/Firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // SignOutUser()

  useEffect(() => {
    const unsubscribe = OnAuthStateChangedListener((user) => {
      if (user) {
         createUserDocumentFromAuth(user);
      }
        setCurrentUser(user);
      console.log(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
