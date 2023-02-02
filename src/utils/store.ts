import { Store } from 'tauri-plugin-store-api';

const tauriStore = new Store('.settings.dat');

export const store = {
  getValueFromStore: <T>(key: string): Promise<T | null> => {
    return tauriStore.get(key);
  },
  setValueInStore: (key: string, value: any) => {
    return tauriStore.set(key, value);
  },
};
