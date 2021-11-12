import firestore from '@react-native-firebase/firestore';
import { UserInterface } from '~/@types/UserInterface';

export default class UserService {
  async getUserInfo(userId: string) {
    return await firestore().collection('user').doc(userId).get();
  }

  async setUserInfo(userId: string, userData: UserInterface) {
    return await firestore()
      .collection('user')
      .doc(userId)
      .set(userData, { merge: true });
  }
}
