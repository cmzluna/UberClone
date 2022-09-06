import {validateObject} from 'src/utils';

export const selectDestination = state => {
  if (!state || !validateObject(state) || !Object.keys(state).length) return {};

  const {navigation} = state;

  if (!navigation || !validateObject(navigation)) return {};

  const {destination} = navigation;

  return destination;
};
