import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { ClientInterface } from '~/@types/ClientInterface';
import { Platform } from 'react-native';
import usePhoneNumber from '~/helpers/hooks/usePhoneNumber';
import { deleteUnfillObject } from '~/helpers/DataHelpers';
import { GroupInterface } from '~/@types/GroupInterface';

function useClientAdd(parentGroup: GroupInterface) {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { phone, setPhoneNumber } = usePhoneNumber();
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [gender, setGender] = useState('male');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const GENDER_LIST = [
    { key: 'male', name: 'Male' },
    { key: 'female', name: 'Female' },
  ];

  const _setBirthday = (selectedDate?: Date) => {
    const currentDate = selectedDate || birthday;
    setModal(Platform.OS === 'ios' ? 'birthday' : null);
    setBirthday(currentDate);
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateData = async (client: Omit<ClientInterface, 'key'>) => {
    return new Promise((resolve, reject) => {
      if (client.first_name.length <= 2) {
        reject({
          name: 'validationError',
          message: 'First Name must be more than 2 characters',
        });
      }

      if (client.email && !validateEmail(client.email)) {
        reject({ name: 'validationError', message: 'Invalid Email' });
      }

      if (client.phone_number && client.phone_number.length <= 10) {
        reject({
          name: 'validationError',
          message: 'First Name must be more than 10 characters',
        });
      }

      resolve(deleteUnfillObject(client));
    });
  };

  const submit = async () => {
    setLoading(true);
    setErrorMessage(null);
    const client: Omit<ClientInterface, 'key'> = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      birthday: birthday,
      gender: gender,
      group_id: parentGroup.key,
    };

    try {
      const data = await validateData(client);
      await firestore().collection('client').add(data);
      console.log('User added!', data);
    } catch (error) {
      setErrorMessage(error.message);
      console.log('Add User error!', error);
    }
    setLoading(false);
  };

  return {
    loading,
    modal,
    errorMessage,
    firstName,
    lastName,
    email,
    phone,
    birthday,
    gender,
    address,
    GENDER_LIST,
    setModal,
    setFirstName,
    setLastName,
    setEmail,
    setPhone: setPhoneNumber,
    setBirthday: _setBirthday,
    setGender,
    setAddress,
    submit,
  };
}

export default useClientAdd;
