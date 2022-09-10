import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import Styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from 'env.json';

const data = [
  {
    id: '1',
    title: 'Take ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },

  {
    id: '2',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const OptionsHeader = () => {
  const {navigate} = useNavigation();
  const handlePress = screen => {
    navigate(screen);
  };

  const renderOptions = ({item}) => (
    <Styles.Wrapper onPress={() => handlePress(item.screen)}>
      {({pressed}) => (
        <Styles.InnerWrapper pressed={pressed}>
          <Styles.ImageComp source={{uri: item.image}} resizeMode="contain" />
          <Styles.TextComp>{item.title}</Styles.TextComp>
          <Styles.IconComp name="right" type="antdesign" />
        </Styles.InnerWrapper>
      )}
    </Styles.Wrapper>
  );

  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Search | Here"
        nearbyPlacesAPI={'GooglePlacesSearch'}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
        debounce={400}
        styles={{textInput: {fontSize: 18}}}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        renderItem={renderOptions}
      />
    </>
  );
};

export default OptionsHeader;
