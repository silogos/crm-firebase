import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ClientInterface } from '~/@types/ClientInterface';

function useHome() {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collectionGroup('group')
  //     .onSnapshot(
  //       querySnapshot => {
  //         const _data: any[] = [];

  //         querySnapshot.forEach(documentSnapshot => {
  //           console.log(documentSnapshot.id, documentSnapshot);
  //           const data = {
  //             key: documentSnapshot.id,
  //             ...documentSnapshot.data(),
  //           } as any;
  //           _data.push(data);
  //         });
  //         console.log(_data);
  //         setLoading(false);
  //       },
  //       error => {
  //         console.log({ error });
  //       },
  //     );

  //   return () => subscriber();
  // }, []);

  const addClient = () => navigation.navigate('ClientAdd', { group });

  return {
    // loading,
    // group,
    // clients,
    // addClient,
  };
}

export default useHome;
