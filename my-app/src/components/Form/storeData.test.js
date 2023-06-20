import CryptoJS from 'crypto-js';
import { storeData } from './storeData';


const localStorageMock = (() => {
  let store = {};

  return {
    getItem: key => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});



describe('storeData', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should store encrypted data in local storage', () => {
    const values = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    };

    storeData(values);

    const storedData = localStorage.getItem('formEntries');
    expect(storedData).toBeDefined();

    const entries = JSON.parse(storedData);
    expect(entries).toBeInstanceOf(Array);
    expect(entries.length).toBe(1);

    const encryptedData = entries[0];
    expect(encryptedData).toBeDefined();

    const decryptedData = CryptoJS.AES.decrypt(encryptedData, 'secretKey').toString(CryptoJS.enc.Utf8);
    expect(decryptedData).toBe(JSON.stringify(values));
  });

  it('should append new entries to existing stored data', () => {
    const initialEntries = [
      'encryptedData1',
      'encryptedData2',
    ];
    localStorage.setItem('formEntries', JSON.stringify(initialEntries));

    const values = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password456',
    };

    storeData(values);

    const storedData = localStorage.getItem('formEntries');
    expect(storedData).toBeDefined();

    const entries = JSON.parse(storedData);
    expect(entries).toBeInstanceOf(Array);
    expect(entries.length).toBe(initialEntries.length + 1);

    const lastEncryptedData = entries[entries.length - 1];
    expect(lastEncryptedData).toBeDefined();

    const decryptedData = CryptoJS.AES.decrypt(lastEncryptedData, 'secretKey').toString(CryptoJS.enc.Utf8);
    expect(decryptedData).toBe(JSON.stringify(values));
  });
});
