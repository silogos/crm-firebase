import { createContext } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type UserContextType = {
  user: FirebaseAuthTypes.User | null;
  setUser: (user: FirebaseAuthTypes.User | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
