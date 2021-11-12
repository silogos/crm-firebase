import firestore from '@react-native-firebase/firestore';

export default class BaseService {
  constructor(public ref: CollectionReference) {}

  create() {
    return;
  }
}
