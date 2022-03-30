import { MetadataDef } from '@polkadot/extension-inject/types';
import { atom, RecoilState } from 'recoil';

export type ChainType = 'substrate' | 'ethereum';

export interface ChainInfo extends MetadataDef {
  color: string | undefined;
  chainType: ChainType;
}


// type InjectedAccountWithMeta = any;

export type ResourceProps = {
  rid: string;
  index: number;
  creator: string;
}
export const userCreatedResourceState = atom<ResourceProps[]>({
  key: 'userCreatedResourceState', // unique ID (with respect to other atoms/selectors)
  default: [],
});