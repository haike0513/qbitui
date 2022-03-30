import { ApiPromise } from '@polkadot/api';
import type { InjectedAccountWithMeta, InjectedExtension, InjectedProviderWithMeta, ProviderList, Unsubcall, Web3AccountsOptions } from '@polkadot/extension-inject/types';


import { atom, RecoilState } from 'recoil';

// type InjectedAccountWithMeta = any;
export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'ss', // default value (aka initial value)
});


export const blockApiState = atom<ApiPromise | null>({
  key: 'blockApiState', // unique ID (with respect to other atoms/selectors)
  default: null
});

export const substrateAccountsState = atom<InjectedAccountWithMeta[]>({
  key: 'substrateAccountsState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});


export const activeSubstrateAccountState = atom<InjectedAccountWithMeta | undefined>({
  key: 'activeSubstrateAccountState', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});


export const providerStore = atom({
  key: 'providerStore', // unique ID (with respect to other atoms/selectors)
  default: new Map<number, ApiPromise>(), // default value (aka initial value)
});


export const activeChainState = atom({
  key: 'activeChainState', // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});

export const apiConfigState = atom({
  key: 'apiConfigState', // unique ID (with respect to other atoms/selectors)
  default: [
    {
      chainId: 1,
      // url: 'wss://rpc.polkadot.io'
      url: 'ws://127.0.0.1:9944'

    }
  ], // default value (aka initial value)
});

export const apiPromiseMapState = atom({
  key: 'apiPromiseMap', // unique ID (with respect to other atoms/selectors)
  default: new Map<number, ApiPromise>(), // default value (aka initial value)
});

export const polkdotExtensionState = atom({
  key: 'polkdotExtension', // unique ID (with respect to other atoms/selectors)
  default: new Map<number, ApiPromise>(), // default value (aka initial value)
});