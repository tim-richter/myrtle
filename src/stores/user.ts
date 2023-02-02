/* eslint-disable no-param-reassign */
import create from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { storage } from '../utils/zustandPersist';

export interface UserState {
  jenkins: {
    base_url: string | null;
    password: string | null;
    username: string | null;
  };
  setBaseUrl: (scope: Providers, url: string) => void;
  setPassword: (scope: Providers, password: string) => void;
  setUsername: (scope: Providers, username: string) => void;
  logout: (scope: Providers) => void;
}

type Providers = 'jenkins';

const useUser = create<UserState>()(
  devtools(
    immer(
      persist(
        (set) => ({
          jenkins: {
            base_url: '' || null,
            password: '' || null,
            username: '' || null,
          },
          setBaseUrl: (scope: Providers, url: string) => {
            set((state) => {
              state[scope].base_url = url;
            });
          },
          setPassword: (scope: Providers, password: string) => {
            set((state) => {
              state[scope].password = password;
            });
          },
          setUsername: (scope: Providers, username: string) => {
            set((state) => {
              state[scope].username = username;
            });
          },
          logout: (scope: Providers) => {
            set((state) => {
              state[scope].password = null;
              state[scope].base_url = null;
              state[scope].username = null;
            });
          },
        }),
        {
          name: 'user',
          storage: createJSONStorage(() => storage),
        },
      ),
    ),
  ),
);

export default useUser;
