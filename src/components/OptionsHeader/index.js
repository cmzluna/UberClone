import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import Styles from './styles';
import {setOrigin} from 'src/redux/slices/navigation/navSlice';
import {validateObject} from 'src/utils';
import {selectOrigin} from 'src/redux/slices/navigation/selectors/selectOrigin';
import GooglePlacesInput from '../GooglePlacesInput';

const data = [
  {
    id: '1',
    title: 'Take ride',
    image: require('../../assets/car.png'),
    screen: 'MapScreen',
  },

  {
    id: '2',
    title: 'Order food',
    image: require('../../assets/food.png'),
    screen: 'EatsScreen',
  },
];

const OptionsHeader = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const {description} = origin;
  const {
    location: {lng, lat},
  } = origin;

  const isDisabled =
    !Object.keys(origin).length || !description || !lng || !lat;

  const handlePress = screen => {
    navigate(screen);
  };

  const handleDispatch = (data, details = null) => {
    const {
      geometry: {location = {}},
    } = details;

    const {description = {}} = data;

    if (!location || !validateObject(location) || !Object.keys(location))
      return null;

    dispatch(
      setOrigin({
        location,
        description,
      }),
    );
  };

  const renderOptions = ({item}) => {
    return (
      <Styles.Wrapper
        onPress={() => handlePress(item.screen)}
        disabled={isDisabled}>
        {({pressed}) => (
          <Styles.InnerWrapper pressed={pressed}>
            <Styles.ImageComp source={item.image} resizeMode="contain" />
            <Styles.TextComp>{item.title}</Styles.TextComp>
            <Styles.IconComp name="right" type="antdesign" />
          </Styles.InnerWrapper>
        )}
      </Styles.Wrapper>
    );
  };

  return (
    <>
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
      <FlatList
        data={data}
        contentContainerStyle={{flex: 1, justifyContent: 'center'}}
        keyExtractor={item => item.id}
        horizontal
        renderItem={renderOptions}
      />
    </>
  );
};

export default OptionsHeader;
