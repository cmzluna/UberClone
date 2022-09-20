import styled from 'styled-components';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const Input = styled(GooglePlacesAutocomplete).attrs({
  styles: {
    container: {
      backgroundColor: '#edb55d',
      paddingTop: 10,
      paddingBottom: 5,
      flex: 0,
    },
    textInput: {
      backgroundColor: '#ffefc7',
      borderRadius: 8,
      marginHorizontal: 10,
      fontSize: 18,
      fontColor: '#edb55d',
    },
    separator: {
      height: 0.5,
      backgroundColor: 'lightblue',
    },
  },
})``;

export default {Input};
