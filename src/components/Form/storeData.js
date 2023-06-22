import CryptoJS from 'crypto-js';

const storeData = values => {
    const storedData = localStorage.getItem('formEntries');
    let entries = [];
  
  if (storedData) {
    entries = JSON.parse(storedData);
  }

  const formValues = JSON.stringify(values);
    const encryptedData = CryptoJS.AES.encrypt(formValues, 'secretKey').toString();
    entries.push(encryptedData);
    localStorage.setItem('formEntries', JSON.stringify(entries));
};
export { storeData }

