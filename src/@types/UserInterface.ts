export interface UserInterface {
  key?: string;
  name: string | null;
  email: string | null;
  phoneNumber?: string;
  photoURL?: string;
  metadata?: {
    creationTime?: string;
    lastSignInTime?: string;
  };
}
