import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GooglePlacesInput from '../GooglePlacesInput';
import {setDestination} from 'src/redux/slices/navigation/navSlice';
import {validateObject} from 'src/utils';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';

const NavigationCard = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const handleDispatch = (data, details = null) => {
    const {
      geometry: {location = {}},
    } = details;

    const {description = {}} = data;

    if (!location || !validateObject(location) || !Object.keys(location))
      return null;

    dispatch(
      setDestination({
        location,
        description,
      }),
    );

    navigate('RideCard');
  };

  return (
    <Styles.Container>
      <Styles.Title>Please, select your destination</Styles.Title>
      <GooglePlacesInput
        placeholder="Search | Here"
        nearbyPlacesAPI={'GooglePlacesSearch'}
        fetchDetails={true}
        debounce={400}
        returnKeyType={'search'}
        enablePoweredByContainer={false}
        onPress={handleDispatch}
        onFail={error => console.log('ERROR! ', error)}
        onNotFound={() => console.log('Sorry, no results!')}
      />
    </Styles.Container>
  );
};

export default NavigationCard;

const styles = StyleSheet.create({});
