import type { InjectedExtension } from '@polkadot/extension-inject/types';
import { atom, RecoilState } from 'recoil';

// type InjectedAccountWithMeta = any;
export const currentInjectedExtenstionState = atom<InjectedExtension | undefined>({
  key: 'currentInjectedExtenstionState', // unique ID (with respect to other atoms/selectors)
  default: undefined,
});
