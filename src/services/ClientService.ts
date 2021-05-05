import firestore from '@react-native-firebase/firestore';
import { ClientInterface } from '~/@types/ClientInterface';

export default class ClientService {
  async getAllClient(
    onResult: (client: ClientInterface[]) => void,
    onError?: () => void,
  ) {
    return firestore()
      .collection('client')
      .onSnapshot(querySnapshot => {
        const _data: ClientInterface[] = [];

        querySnapshot.forEach(documentSnapshot => {
          const data = {
            key: documentSnapshot.id,
            ...documentSnapshot.data(),
          } as ClientInterface;
          _data.push(data);
        });
        onResult(_data);
      }, onError);
  }

  async getClientByGroup(groupCode: string) {
    const client: ClientInterface[] = [];
    try {
      await firestore()
        .collection('client')
        .where('group_id', '==', groupCode)
        .get()
        .then(documentSnapshot => {
          documentSnapshot.forEach(documentSnapshot => {
            const data = {
              key: documentSnapshot.id,
              ...documentSnapshot.data(),
            } as ClientInterface;
            client.push(data);
          });
        });
    } catch (error) {}

    return client;
  }
}
