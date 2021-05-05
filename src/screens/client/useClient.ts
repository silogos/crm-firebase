import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ClientInterface } from '~/@types/ClientInterface';
import GroupService from '~/services/GroupService';
import { GroupInterface } from '~/@types/GroupInterface';

function useClient() {
  const navigation = useNavigation();
  const route = useRoute();
  const groupService = new GroupService();
  const group = route.params?.group as GroupInterface;
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState<ClientInterface[]>([]);
  const [groupIds, setGroupIds] = useState<string[]>([]);

  useEffect(() => {
    async function getGroupsId() {
      const _groupId = await groupService.getGroupIdByParent([group.key]);
      setGroupIds(_groupId);
    }

    getGroupsId();
  }, [group]);

  useEffect(() => {
    if (groupIds.length < 1) {
      return;
    }

    const subscriber = firestore()
      .collection('client')
      .where('group_id', 'in', groupIds)
      .onSnapshot(
        querySnapshot => {
          const _data: ClientInterface[] = [];

          querySnapshot.forEach(documentSnapshot => {
            const data = {
              key: documentSnapshot.id,
              ...documentSnapshot.data(),
            } as ClientInterface;
            _data.push(data);
          });
          setClients(_data);
          setLoading(false);
        },
        error => {
          console.log({ error });
        },
      );

    return () => subscriber();
  }, [groupIds]);

  const addClient = () => navigation.navigate('ClientAdd', { group });

  return {
    loading,
    group,
    clients,
    addClient,
  };
}

export default useClient;
