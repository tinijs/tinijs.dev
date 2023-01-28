const states = {
  key: 'value',
};

export default states;
export type States = typeof states;

export type Store = TiniStore<States>;
