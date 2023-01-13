import {Store as TiniStore} from '@tinijs/store';

const states = {
  key: 'value',
};

export default states;
export type States = typeof states;

export type Store = TiniStore<States>;
