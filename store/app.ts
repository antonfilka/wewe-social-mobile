import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import { observable } from '@legendapp/state';
import { syncObservable } from '@legendapp/state/sync';

interface Settings {
  language: 'en' | 'ru';
}

interface Store {
  settings: Settings;
  isAppReady: boolean;
  setAppIsReady: (val: boolean) => void;
}

const initialStore: Store = {
  isAppReady: false,
  settings: { language: 'en' },
  setAppIsReady: (val: boolean) => {
    store$.isAppReady.set(val);
  },
};

export const store$ = observable<Store>(initialStore);

syncObservable(store$, {
  persist: {
    name: 'store',
    plugin: ObservablePersistMMKV,
  },
});
