import { User } from "@nhost/core";
import { useUserData } from "@nhost/react";
import { createContext, ReactNode, useContext } from "react";

interface Props {
  user: User | null;
}

const UserContext = createContext<Props>({
  user: null,
});

export const useUserContext = () => {
  return useContext(UserContext);
};

interface Child {
  children: ReactNode;
}

const UserProvider = ({ children }: Child) => {
  const user = useUserData();

  const value = {
    user,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
