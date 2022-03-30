import { MetadataDef } from '@polkadot/extension-inject/types';
import { atom, RecoilState } from 'recoil';

export type ChainType = 'substrate' | 'ethereum';

export interface ChainInfo extends MetadataDef {
  color: string | undefined;
  chainType: ChainType;
}


// type InjectedAccountWithMeta = any;
export const blockNumberState = atom({
  key: 'blockNumberState', // unique ID (with respect to other atoms/selectors)
  default: 0,
});

export const chainInfoState = atom<ChainInfo | undefined>({
  key: 'chainInfoState', // unique ID (with respect to other atoms/selectors)
  default: undefined,
});
