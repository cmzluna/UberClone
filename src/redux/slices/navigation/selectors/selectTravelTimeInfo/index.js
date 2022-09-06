import {validateObject} from 'src/utils';

export const selectTravelTimeInformation = state => {
  if (!state || !validateObject(state) || !Object.keys(state).length) return {};

  const {navigation} = state;

  if (!navigation || !validateObject(navigation)) return {};

  const {travelTimeInformation} = navigation;

  return travelTimeInformation;
};
