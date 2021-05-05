import { useState } from 'react';

function usePhoneNumber(code = '62') {
  const [phone, setPhone] = useState('');

  const setPhoneNumber = (text: string) => {
    let phoneNumber = text?.replace(/\D/g, '');

    if (phoneNumber.length === 0) {
      phoneNumber = '';
    } else {
      if (phoneNumber?.startsWith(code)) {
        phoneNumber = `+${phoneNumber}`;
      } else if (phoneNumber?.startsWith('0')) {
        if (phoneNumber.length === 1) {
          phoneNumber = `+${code}`;
        } else if (phoneNumber.length > 1) {
          phoneNumber = `+${code}${phoneNumber.substr(1)}`;
        }
      } else if (phone.length !== 0 && phoneNumber?.startsWith(code[0])) {
        phoneNumber = '';
      } else {
        phoneNumber = `+${code}${phoneNumber}`;
      }
    }

    setPhone(phoneNumber);
  };

  return { phone, setPhoneNumber };
}

export default usePhoneNumber;
