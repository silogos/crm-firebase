import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GroupInterface } from '~/@types/GroupInterface';
import { deleteUnfillObject } from '~/helpers/DataHelpers';

function useGroupAdd() {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const parentGroup = route.params?.parentGroup as GroupInterface;
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateData = async (group: GroupInterface): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      if (group.key.length < 3) {
        reject({
          name: 'validationError',
          message: 'Group Code must be more than 2 characters',
        });
      }

      if (group.name.length < 4) {
        reject({
          name: 'validationError',
          message: 'Group Name must be more than 3 characters',
        });
      }

      resolve(deleteUnfillObject(group));
    });
  };

  const submit = async () => {
    setLoading(true);
    setErrorMessage(null);
    const group: GroupInterface = {
      key: code,
      name: name,
      parent: parentGroup?.key,
      sequence: parentGroup?.sequence ? parentGroup?.sequence + 1 : 1,
    };

    try {
      const data = await validateData(group);
      console.log({ data });
      await firestore().collection('group').doc(group.key).set(data);
      navigation.goBack();
      console.log('Group added!');
    } catch (error) {
      setErrorMessage(error.message);
      console.log('Add Group error!', error);
    }
    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    parentGroup,
    code,
    name,
    setCode,
    setName,
    submit,
  };
}

export default useGroupAdd;
