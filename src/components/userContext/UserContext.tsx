import { createContext, useContext, useState } from "react";

interface IUserContext {
  avatar: {
    id: number;
    high: string;
    medium: string;
    low: string;
  };
  created: string;
  email: string;
  id: number;
  is_active: boolean;
  modified: string;
  name: string;
  role: string;
  type: string;
  updateUserData(data: Partial<IUserContext>): void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({
    avatar: {
      id: 1,
      high: "",
      medium: "",
      low: "",
    },
    created: "",
    email: "",
    id: 0,
    is_active: false,
    modified: "",
    name: "",
    role: "",
    type: "",
  });

  const updateUserData = (data: IUserContext) => {
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ ...user, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("Verifique a estrutura do Provider em sua aplicação");
  }
  return context;
};
