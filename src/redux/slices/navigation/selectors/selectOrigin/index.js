import {validateObject} from 'src/utils';

export const selectOrigin = state => {
  if (!state || !validateObject(state) || !Object.keys(state).length) return {};

  const {navigation} = state;

  if (!navigation || !validateObject(navigation)) return {};

  const {origin} = navigation;

  return origin;
};
