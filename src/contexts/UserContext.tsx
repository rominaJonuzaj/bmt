import React, { useState, createContext, useContext } from "react";

const UserContext = createContext<UserState>({
  name: "",
  email: "",
  isUserLoggedIn: false,
});

type Props = {
  children: JSX.Element;
};

export type UserState = {
  name: string;
  email: string;
  isUserLoggedIn: boolean;
};

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserState>({
    name: "",
    email: "",
    isUserLoggedIn: false,
  });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
