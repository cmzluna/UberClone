import * as ExpoLocation from 'expo-location';
import {validateObject} from '..';

const getCurrentLocation = async () => {
  const permission = await ExpoLocation.requestForegroundPermissionsAsync();

  console.log('///', permission);
  if (
    !permission ||
    !validateObject(permission) ||
    !Object.keys(permission).length
  )
    return {};

  if (permission.status === 'granted') {
    const location = await ExpoLocation.getCurrentPositionAsync({});
    if (!location || !validateObject(location) || !Object.keys(location).length)
      return {};

    return location;
  }

  return {};
};

export default getCurrentLocation;
