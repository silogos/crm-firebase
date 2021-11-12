import { createContext } from 'react';
import { UserInterface } from '~/@types/UserInterface';

export type UserContextType = {
  user: UserInterface | null;
  setUser: (user: UserInterface | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
