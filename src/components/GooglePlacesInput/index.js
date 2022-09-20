import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GOOGLE_API_KEY} from '@env';
import {oneOfType, arrayOf, object, string} from 'prop-types';
import Styles from './styles';

const GooglePlacesInput = ({
  placeholder,
  nearbyPlacesAPI,
  debounce,
  onPress,
  ...props
}) => {
  return (
    <View>
      <Styles.Input
        placeholder={placeholder}
        nearbyPlacesAPI={nearbyPlacesAPI}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
        onPress={onPress}
        {...props}
      />
    </View>
  );
};

GooglePlacesInput.propTypes = {
  placeholder: string,

  query: oneOfType([arrayOf(object)]),
};

export default GooglePlacesInput;

const styles = StyleSheet.create({});
