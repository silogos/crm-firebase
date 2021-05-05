import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { GroupInterface } from '~/@types/GroupInterface';

function useGroup() {
  const navigation = useNavigation();
  const route = useRoute();
  const parentGroup = route.params?.parentGroup as GroupInterface;
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<GroupInterface[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('group')
      .where('parent', '==', parentGroup.key)
      .onSnapshot(
        querySnapshot => {
          const _data: GroupInterface[] = [];

          querySnapshot.forEach(documentSnapshot => {
            const data = {
              key: documentSnapshot.id,
              ...documentSnapshot.data(),
            } as GroupInterface;
            _data.push(data);
          });

          setGroups(_data);
          setLoading(false);
        },
        error => {
          console.log({ error });
        },
      );

    return () => subscriber();
  }, []);

  const addGroup = () => navigation.navigate('GroupAdd', { parentGroup });

  const browseGroup = (group: GroupInterface) =>
    navigation.dispatch(StackActions.push('Group', { parentGroup: group }));

  const browseClient = (group: GroupInterface) =>
    navigation.navigate('Client', { group });

  return {
    parentGroup,
    loading,
    groups,
    addGroup,
    browseGroup,
    browseClient,
  };
}

export default useGroup;
