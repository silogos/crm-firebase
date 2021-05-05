import firestore from '@react-native-firebase/firestore';
import { GroupInterface } from '~/@types/GroupInterface';

export default class GroupService {
  async getGroupBySequence(sequence: number) {
    const group: GroupInterface[] = [];
    try {
      await firestore()
        .collection('group')
        .where('sequence', '==', sequence)
        .get()
        .then(documentSnapshot => {
          documentSnapshot.forEach(documentSnapshot => {
            const data = {
              key: documentSnapshot.id,
              ...documentSnapshot.data(),
            } as GroupInterface;
            group.push(data);
          });
        });

      return group;
    } catch (error) {}

    return group;
  }

  async getGroupByParent(parentCode: string) {
    const group: GroupInterface[] = [];
    try {
      await firestore()
        .collection('group')
        .where('parent', '==', parentCode)
        .get()
        .then(documentSnapshot => {
          documentSnapshot.forEach(documentSnapshot => {
            const data = {
              key: documentSnapshot.id,
              ...documentSnapshot.data(),
            } as GroupInterface;
            group.push(data);
          });
        });

      return group;
    } catch (error) {}

    return group;
  }

  async getGroupsIds(parentIds: string[]) {
    const groupIds: string[] = [];
    await firestore()
      .collection('group')
      .where('parent', 'in', parentIds)
      .get()
      .then(documentSnapshot => {
        documentSnapshot.forEach(documentSnapshot => {
          groupIds.push(documentSnapshot.id);
        });
      });
    return groupIds;
  }

  async getGroupIdByParent(parentCode: string[]) {
    let groupIds: string[] = parentCode;
    let _groupIds: string[] = parentCode;

    while (true) {
      _groupIds = await this.getGroupsIds(_groupIds);
      groupIds = [...groupIds, ..._groupIds];
      console.log({ groupIds, _groupIds });
      if (_groupIds.length === 0) {
        break;
      }
    }

    return groupIds;
  }
}
